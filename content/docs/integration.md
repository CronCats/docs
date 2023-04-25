---
description: 'Using the CronCat integration SDK with helper functions for task creation, handling, and testing'
sidebar: 'docs'
---

# Integration SDK

We've created helper functions for CosmWasm contracts that wish to integrate CronCat automation. There are a few crates available for developers that will handle logic involving task creation, handling the reply's response, validating an invocation as coming from your task, providing clean errors, and testing methods for dApps using [`cw-multi-test`](https://book.cosmwasm.com/basics/multitest-intro.html).

Please see these examples that demonstrate usage:

- [Toggle a boolean contract](https://github.com/CronCats/cw-purrbox/tree/main/contracts/boolean-contract-caller)
- [Create task and handle invocation](https://github.com/CronCats/cw-purrbox/tree/main/contracts/create-task-handle-tick)

## Integration Utilities

The crate [`croncat-integration-utils`](https://crates.io/crates/croncat-integration-utils/0.1.6-rc.1) contains helper functions allowing your smart contract to leverage automation, and will help you programmatically create and handle tasks.

### Key methods

#### `create_croncat_task_submessage`

Makes it simple to create a CronCat task in your smart contract. Fill out your [`CronCatTaskRequest` struct](https://docs.rs/croncat-integration-utils/0.1.6-rc.1/croncat_integration_utils/struct.CronCatTaskRequest.html), send it to this method, and you'll receive a [submessage](https://book.cosmwasm.com/actor-model/contract-as-actor.html#sending-submessages) to add to your contract's [Response](https://docs.rs/cosmwasm-std/latest/cosmwasm_std/struct.Response.html).

Example:

```rust
fn foo(…) -> Result<Response, ContractError> {
    // load croncat_factory_address from state

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
            gas_limit: Some(300_000),
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
        .add_submessage(sub_message)
    )
}
```

#### `reply_handle_croncat_task_creation`

After the task creation (see method above) we can handle the submessage's reply to see get details on the newly-created task, or propagate an error if there were problems.

Example: 

```rust
pub fn reply(deps: DepsMut, msg: Reply) -> Result<Response, ContractError> {
    let (task_info, msg_binary) = reply_handle_croncat_task_creation(msg)?;

    // task_info contains relevant details to the newly-created task

    Ok(Response::new().set_data(msg_binary))
}
```

### `handle_incoming_task`

Sometimes, an invocation to your smart contract's method should only be called by a task your contract created. If this applies to your use case, this method helps validate this, then returns the TaskExecutionInfo, which is the same struct we get in the reply handler.

Example:

```rust
fn bar(…) -> Result<Response, ContractError> {
    // load croncat_factory_address from state
    
    let task_info = handle_incoming_task(
        &deps.querier,
        env.clone(),
        info,
        croncat_factory_addr,
        None,
    )?;

    // This invocation is from our CronCat task.
}
```

## Clean Errors

The [`croncat-errors-macro`](https://crates.io/crates/croncat-errors-macro/0.1.6-rc.1) crate is a procedural attribute macro meant to be used with the integration utils from above. This type of macro needs to be in its own crate, hence the distinction.

To use it, place the `#[croncat_error]` macro on your error enum, before the derives.

### Usage

```rust
#[croncat_error] // Add this macro
#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("Custom error: {msg}")]
    MyCustomError { msg: String },
}
```

### What it does

This will do two things:

1. Add this enum variant:

```rust
#[error("CronCat error: {err:?}")]
CronCatError {
  err: CronCatContractError
}
```

2. Add an implementation to assist with clean errors:

```rust
impl From<CronCatContractError> for ContractError {
  fn from(error: CronCatContractError) -> Self {
    ContractError::CronCatError {
      err: error,
    }
  }
}
```

## Test Helpers

If your project is using `cw-multi-test`, you may add [`croncat-integration-testing`](https://crates.io/crates/croncat-integration-testing/0.1.6-rc.1) crate as a [dev dependency](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#development-dependencies).

### Highlight method

The [`set_up_croncat_contracts` method](https://docs.rs/croncat-integration-testing/0.1.6-rc.1/croncat_integration_testing/test_helpers/fn.set_up_croncat_contracts.html) will handle bootstrapping the secure CronCat factory architecture, and return addresses of the various contracts along with the [App from `cw-multi-test`](https://docs.rs/cw-multi-test/latest/cw_multi_test/struct.App.html).

**Note**: you may optionally pass in your `App` as a parameter. In the example below, you'll see we're passing in `None` which will create it.

```rust
#[test]
fn my_test() {
    let CronCatTestEnv {
        mut app,
        factory,
        manager,
        tasks: _,
        agents,
    } = set_up_croncat_contracts(None);
    
    // Rest of test…
}
```
