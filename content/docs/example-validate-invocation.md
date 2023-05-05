---
description: 'Handle task invocation on CosmWasm method'
sidebar: 'docs'
prev: '/docs/examples/'
---

# Handling task invocation

You may wish to automatically call a method on your smart contract, but want to guard against anyone else calling this method. It's simple to validate whether the invocation is from a CronCat task you created, or a task your contract knows about.

See the full example here:

https://github.com/CronCats/cw-purrbox/tree/main/contracts/create-task-handle-tick

## Overview of steps

This example covers a use case where a smart contract wishes to create a recurring CronCat task that will clear out old auctions in a rather naive way, by calling the method `tick` at a provided interval.

1. CosmWasm contract creates a CronCat task that will call itself at the `tick` method.
2. When the time is right, CronCat calls `tick`.
3. The `tick` method uses the helper function `handle_incoming_task` to validate that the invocation is from a sanctioned CronCat contract, and is in the same block and transaction index. Furthermore, it checks the owner of the task that's calling, ensuring it's the contract's address. In other words, it verifies that "we're in the middle of a cross-contract call from a task that we created."
4. Your contract state becomes neat and tidy.

## Highlights

This example provides a few helpful pieces worth highlighting including task creation, reply handling, invocation validation, and testing helpers. These can ready to be copy/pasted from the example linked earlier.

### `create_croncat_task_submessage`

When creating a CronCat task from a CosmWasm contract, we'll want to use [submessages](https://book.cosmwasm.com/actor-model/contract-as-actor.html#sending-submessages), which allows us to dynamically receive and handle result of the task creation.

We create the task like this:

```rust
// Load the CronCat factory address from state…

// Create a task that fires every block, stops and refunds remaining
// funds if the call fails.
// This will have one Action: to call myself at the "tick" method.
let croncat_task = CronCatTaskRequest {
  interval: CronCatInterval::Block(1),
  boundary: None,
  stop_on_fail: true,
  actions: vec![CronCatAction {
    msg: Wasm(Execute {
      contract_addr: env.contract.address.to_string(), 
      msg: to_binary(&ExecuteMsg::Tick {})?,
      funds: vec![],
    }), 
    gas_limit: Some(300_000), // Can fine tune gas here
  }],
  queries: None,
  transforms: None,
  cw20: None,
};

let sub_message = create_croncat_task_submessage(
  &deps.querier,
  info,
  croncat_factory_address,
  croncat_task,
  None,
)?;

Ok(Response::new()
  .add_attribute("action", "make_croncat_tick_task")
  .add_submessage(sub_message))
```

The `create_croncat_task_submessage` helper will do the work of finding the latest CronCat task smart contract, do some primitive validation, and prepare the submessage. Note that this method can take [optional parameters for flexibility](https://docs.rs/croncat-integration-utils/latest/croncat_integration_utils/types/struct.CronCatTaskSubmessageParams.html).

### `reply_handle_croncat_task_creation`

In the [`reply` endpoint](https://book.cosmwasm.com/actor-model/contract-as-actor.html?highlight=reply#reply-handling), we get a `msg` object that contains useful information on how the task creation went.

```rust
pub fn reply(_deps: DepsMut, msg: Reply) -> Result<Response, ContractError> {
  // Pass the reply message into a CronCat integration helper
  // Returns helpful info about task hash, owner, etc.
  let (task_info, msg_binary) = reply_handle_croncat_task_creation(msg)?;
    
  // YOUR CODE HERE

  Ok(Response::new().set_data(msg_binary))
}
```

Above, the `task_info` variable is a [`CronCatTaskExecutionInfo`](https://docs.rs/croncat-integration-utils/1.0.0/croncat_integration_utils/struct.CronCatTaskExecutionInfo.html). Perhaps the most useful fields in this struct (shown below) are the task hash and version of the tasks contract.

```rust
pub struct CronCatTaskExecutionInfo {
  pub block_height: u64,
  pub tx_info: Option<TransactionInfo>,
  pub task_hash: String, // 😻consider saving to state
  pub owner_addr: Addr,
  pub amount_for_one_task: AmountForOneTask,
  pub version: String, // 😻consider saving to state
}
```

Certain use cases may benefit from saving the `task_hash` and `version` to state. For instance, if your contract wants to remove the task or refill the task balance, so a recurring task can continue.

### `handle_incoming_task`

This method is not covered in the [boolean contract caller example](/docs/examples/).

The code below is from the `tick` method, or whatever method(s) your task has specified to call.

```rust
// Load the CronCat factory address from state… 

// Call a CronCat integration helper function
let task_info: CronCatTaskExecutionInfo = handle_incoming_task(
  &deps.querier,
  env.clone(),
  info,
  // Remember we load this from our contract's state.
  croncat_factory_addr,
  // We could use extra_params here, but this also means default.
  None,
)?;

// We've validated that this invocation is from our CronCat task.

// Perform application logic here…
// This example cleans up old auctions from state.
```

The helper above with return information on calling task, as well as throw an error if validation fails. Validation includes a few checks:

- The calling contract is indeed a sanction CronCat address
- This transaction is in the same block and transaction index as the last task sent from CronCat. Put another way, this invocation is indeed in the middle of a cross-contract call from CronCat.
- The task that's calling the contract was created by that contract.

**Note**: there may be cases where you do not want to validate that the invocation is in the same block. (ex. perhaps there are IBC messages involved in the future.) Or perhaps your project contains several contracts, and the task is created by a known address that differs from the one being called.

To fine-tune the validation checks, you may pass in an optional struct [`HandleIncomingTaskParams`](https://docs.rs/croncat-integration-utils/1.0.0/croncat_integration_utils/types/struct.HandleIncomingTaskParams.html) as the final parameter.

```rust
pub struct HandleIncomingTaskParams {
  pub disable_sync_check: bool,
  pub disable_owner_check: bool,
  pub expected_owner: Option<Addr>,
}
```

For details on how these modify the validation, visit the [fields section](https://docs.rs/croncat-integration-utils/latest/croncat_integration_utils/types/struct.HandleIncomingTaskParams.html#fields) in the crate's docs.

### Handling errors

We use the [`#[croncat_error]` macro](https://docs.rs/croncat-errors-macro/latest/croncat_errors_macro/attr.croncat_error.html) above our contract's `ContractError` enum in order to add a custom variant and implementation that'll allow for clean error propagation.

```rust
#[croncat_error]
#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
  #[error("{0}")]
  Std(#[from] StdError),

  // more variants…
}
```

This will add this variant to the `ContractError` enum:

```rust
#[error("CronCat error: {err:?}")]
CronCatError {
  err: CronCatContractError
}
```

and this implementation:

```rust
impl From<CronCatContractError> for ContractError {
  fn from(error: CronCatContractError) -> Self {
    ContractError::CronCatError {
      err: error,
    }
  }
}
```

Earlier on this page, we called `handle_incoming_task` and ended the line with a [question mark operator](https://doc.rust-lang.org/reference/expressions/operator-expr.html#the-question-mark-operator) `?`. If, for instance, validation fails, a custom CronCat error will be thrown in your contract, as long as you include the macro as shown above.

### Testing with `set_up_croncat_contracts`

If your contract uses [`cw-multi-test`](https://book.cosmwasm.com/basics/execute.html?highlight=cw-multi-test#custom-error-and-multi-test), you may call the [`set_up_croncat_contracts` helper](https://docs.rs/croncat-integration-utils/latest/croncat_integration_utils/task_creation/fn.get_latest_croncat_contract.html) method to mock the CronCat contracts with ease. For context, CronCat automation uses a handful of modular contracts, controlled via a factory architecture. You shouldn't have to understand this, so this method gets you rolling with tests in no time.

**Note**: the method takes an optional [`App` object](https://docs.rs/cw-multi-test/latest/cw_multi_test/struct.App.html), which is the typical testing helper from `cw-multi-test`. If you pass in `None`, the method will return a new `App`. If you pass in an existing `App` as `Some(app)`, it will use it instead.

## Conclusion

With these helper functions, creating CronCat tasks is a cinch to add to new or existing CosmWasm contracts. While this is a toy example, you can create one or many tasks that call your smart contract at specific times and create incredible workflows that have been hitherto impossible. LFG!
