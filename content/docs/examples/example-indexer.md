---
description: 'Integrate task triggers directly inside on-chain contracts'
sidebar: 'docs'
prev: '/docs/'
next: '/docs/task-monitoring/'
---

# Example: Indexer

First off -- why you would want this?
In certain situations all that is needed is a simple task being scheduled by a person, that is easily managed checking on its progress every so often.

A more advanced use would be to integrate logic for scheduling directly inside the contracts functionality, such that the contract can schedule and maintain a task. This effectively allows a contract to have a fully autonomous runtime, a decentralized automonous business appears! So, if you would like to integrate cron within a contract, here's the full CRUD example with all the cases for interacting directly. Bonus points for setting this up with a DAO :)

# Example: Cross-Crontract Cron Task Management

[View Full Source](https://github.com/Cron-Near/contracts/tree/main/examples/cross-contract)

This example shows how to setup a cross-contract implementation with croncat. The demo functionality shows an on-chain indexing of balances in a time series format. This contract allows scheduling, updating, removing & checking status.

## Contract Setup

Integration in a cross-contract setup requires 3 main things:
1. ABI Definitions
2. Methods to schedule
3. Methods to maintain

## Definitions:

You will need the following definitions for rust to be able to analyze and structure you code properly.

```rust

#[derive(BorshDeserialize, BorshSerialize, Debug, Serialize, Deserialize, PartialEq)]
#[serde(crate = "near_sdk::serde")]
pub struct Task {
    pub owner_id: AccountId,
    pub contract_id: AccountId,
    pub function_id: String,
    pub cadence: String,
    pub recurring: bool,
    pub total_deposit: U128,
    pub deposit: U128,
    pub gas: Gas,
    pub arguments: Vec<u8>,
}

#[ext_contract(ext_croncat)]
pub trait ExtCroncat {
    fn get_tasks(&self, offset: Option<u64>) -> (Vec<Base64VecU8>, U128);
    fn get_all_tasks(&self, slot: Option<U128>) -> Vec<Task>;
    fn get_task(&self, task_hash: Base64VecU8) -> Task;
    fn create_task(
        &mut self,
        contract_id: String,
        function_id: String,
        cadence: String,
        recurring: Option<bool>,
        deposit: Option<U128>,
        gas: Option<Gas>,
        arguments: Option<Vec<u8>>,
    ) -> Base64VecU8;
    fn update_task(
        &mut self,
        task_hash: Base64VecU8,
        cadence: Option<String>,
        recurring: Option<bool>,
        deposit: Option<U128>,
        gas: Option<Gas>,
        arguments: Option<Vec<u8>>,
    );
    fn remove_task(&mut self, task_hash: Base64VecU8);
    fn proxy_call(&mut self);
}
```

## Scheduling

Setting up a single or recurring task is very straightforward, however it can be hard to guess at the right parameters. The following is an example setup for a task the will execute a transaction to the account `crosscontract.testnet` using the method `tick` (which computes a timeseries tick) at an interveral of every 1 minute.

Key things to note:
* There is a callback shown here, it is a way to get the task hash, the main identifier for your scheduled task.
* attached deposit is used to fund the future task executions
* Parameters in this example will vary from your implementation, this is just a sample.

```rust
/// Create a new scheduled task, registering the "tick" method with croncat
///
/// ```bash
/// near call crosscontract.testnet schedule '{ "function_id": "tick", "period": "0 */1 * * * *" }' --accountId YOUR_ACCOUNT.testnet
/// ```
#[payable]
pub fn schedule(&mut self, function_id: String, period: String) -> Promise {
    assert_eq!(
        env::current_account_id(),
        env::predecessor_account_id(),
        "{}",
        ERR_ONLY_OWNER
    );
    // NOTE: Could check that the balance supplied is enough to cover XX task calls.

    ext_croncat::create_task(
        env::current_account_id(),
        function_id,
        period,
        Some(true),
        Some(U128::from(NO_DEPOSIT)),
        Some(GAS_FOR_TICK_CALL), // 30 Tgas
        None,
        &self.cron.clone().expect(ERR_NO_CRON_CONFIGURED),
        env::attached_deposit(),
        GAS_FOR_SCHEDULE_CALL,
    )
    .then(ext::schedule_callback(
        &env::current_account_id(),
        NO_DEPOSIT,
        GAS_FOR_SCHEDULE_CALLBACK,
    ))
}

/// Get the task hash, and store in state
#[private]
pub fn schedule_callback(&mut self, #[callback] task_hash: Base64VecU8) {
    log!("schedule_callback task_hash {:?}", &task_hash);
    self.task_hash = Some(task_hash);
}
```

## Maintaining the Task

Once you've scheduled a task, its important to make sure it is funded to continue running (if your app needs it). The task hash allows you to update or get information about your task. Your contract can then know key information like how much balance is remaining on the task itself.

For a full sample of updating, removing & more: [View Full Demo Source](https://github.com/Cron-Near/contracts/tree/main/examples/cross-contract)

```rust
/// Get the task status, including remaining balance & etc.
/// Useful for automated on-chain task management! This method could be scheduled as well, and manage re-funding tasks or changing tasks on new data.
///
/// ```bash
/// near call crosscontract.testnet status
/// ```
pub fn status(&self) -> Promise {
    // TODO: fix this! serialization is not working
    let hash = self.task_hash.clone().expect(ERR_NO_TASK_CONFIGURED);
    log!("TASK HASH: {:?} {:?} {}", &hash, serde_json::to_string(&hash).unwrap(), serde_json::to_string(&hash).unwrap());
    ext_croncat::get_task(
        // hash,
        serde_json::to_string(&hash).unwrap().to_string(),
        &self.cron.clone().expect(ERR_NO_CRON_CONFIGURED),
        NO_DEPOSIT,
        GAS_FOR_STATUS_CALL,
    )
    .then(ext::schedule_callback(
        &env::current_account_id(),
        NO_DEPOSIT,
        GAS_FOR_STATUS_CALLBACK,
    ))
}

/// Get the task hash, and store in state
/// NOTE: This method helps contract understand remaining task balance, in case more is needed to continue running.
/// NOTE: This could handle things about the task, or have logic about changing the task in some way.
#[private]
pub fn status_callback(&self, #[callback] task: Option<Task>) -> Option<Task> {
    // NOTE: Could check remaining balance here
    // NOTE: Could have logic to another callback IF the balance is running low
    task
}
```

There's a lot of information in this guide, and you've probably got questions. Do not hesitate to reach out and get help with further integrating croncat!