---
description: 'Create a task in croncat specifying different configuration params'
sidebar: 'docs'
prev: '/docs/'
next: '/docs/task-monitoring/'
---

# Task Creation

## Basic Flow

Croncat tasks follow a very straight forward flow:

1. Deploy or find a contract to a NEAR blockchain account
2. Decide how often a contract should be called & estimate it's transaction fee needs.
3. Create the task configuration within croncat
4. Monitor the ongoing progress of the task

## Configuration Reference

Each field within croncat serves a specific purpose, the following details show what kinds of data are acceptable. [View Source](https://github.com/Cron-Near/contracts/blob/main/manager/src/lib.rs#L49)

| Field | Type | Description |
| ------- | ------- | ------- |
| contract_id | AccountId | Account to direct all execution calls against |
| function_id | String | Contract method this task will be executing |
| cadence* | String | Crontab Spec String. Defines the interval spacing of execution |
| recurring | Boolean | Defines if this task can continue until balance runs out |
| total_deposit | u128 | Total balance of NEAR available for current and future executions |
| deposit | u128 | Configuration of NEAR balance to send to each function call. This is the "amount" for a function call. |
| gas | u64 | Configuration of NEAR balance to attach to each function call. This is the "gas" for a function call. |
| arguments | Vec<u8> | NOTE: Only allow static pre-defined bytes, most useful for cross-contract task creation |
|  |  |  |

*Note that The smallest interval that can be described by a Cron expression is 60 blocks (~one minute). Intervals less than that need to be handled otherwise.

## Simple Task Creation Example

Let's say you have a contract "counter" that increments a storage integer, and you want it to trigger every 5 minutes. Creating an ongoing task will look like this:

```bash
near call manager_v1.croncat.testnet create_task '{"contract_id": "counter.in.testnet","function_id": "increment","cadence": "*/10 * * * * *","recurring": true,"deposit": "0","gas": 2400000000000}' --accountId YOUR_NEAR_ACCT.testnet --amount 10
```

Now let's break this down a bit:

First snippet makes a call request to the "cron" manager in testnet to register a new task.
```bash
near call manager_v1.croncat.testnet create_task
```

Next we specify the contract and function getting called, like this:
```bash
'{"contract_id": "counter.in.testnet","function_id": "increment",
```

Then we specify the scheduling of this contract call:
```bash
"cadence": "*/10 * * * * *","recurring": true,
```

Lastly, we specify any payment or fee needs:
```bash
"deposit": "0","gas": 2400000000000}'
```

This is completed by making sure the transaction is signed by the account that will own this task:
```bash
--accountId YOUR_NEAR_ACCT.testnet --amount 10
```

**Important thing to note:** You will get a task hash upon successful creation. Save this hash as its your access to monitor and update the task in the future.

**Very important thing to note:** the `--amount` flag is how you are attaching real NEAR tokens to your task. If you specify a "deposit" of 10, and then the `--amount` is less than 10, the task will never run.


## How to get Task Hash

```bash
near view <CONTRACT_ACCOUNT> get_hash '{"contract_id": "<CONTRACT_ID>","function_id": "<FUNCTION>","cadence": "0 0 * * * *","owner_id": "<OWNER_ID>"}'
```

Example (get Task Hash from "ping" function):
```bash
near view manager_v1.croncat.testnet get_hash '{"contract_id": "jakson.pool.f863973.m0","function_id": "ping","cadence": "0 0 * * * *","owner_id": "jakson.testnet"}'
```

## Refill Balance

If you run out of balance on a task, here's a way to refill the balance:

```bash
near call <CONTRACT_ACCOUNT> refill_balance '{"task_hash": "<YOUR_TASK_HASH>"}' --accountId <accountId> --amount 5
```


Example:

```bash
near call manager_v1.croncat.testnet refill_balance '{"task_hash": "r2JvrGPvDkFUuqdF4x1+L93aYKGmgp4GqXT4UAK3AE4="}' --accountId jakson.testnet --amount 5
```

## Remove task

When deleting a task, all unused balance will be returned to the wallet of the task owner.


```bash
near call <CONTRACT_ACCOUNT> remove_task '{"task_hash": "r2JvrGPvDkFUuqdF4x1+L93aYKGmgp4GqXT4UAK3AE4="}' --accountId jakson.testnet
```

Example

```bash
near call manager_v1.croncat.testnet remove_task '{"task_hash": "r2JvrGPvDkFUuqdF4x1"}' --accountId <accountId>
```

## More Examples

For deeper examples of contracts & task creation, [view all examples here](/docs/examples).
