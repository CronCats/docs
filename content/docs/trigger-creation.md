---
description: 'Create a task in croncat specifying different configuration params'
sidebar: 'docs'
prev: '/docs/'
next: '/docs/trigger-monitoring/'
---

# Trigger Creation

## Basic Flow

Croncat triggers follow a very straight forward flow:

1. Create a croncat task - [See here for setup](./task-creation.md)
2. Get the task hash for the task you own & want to trigger
3. Create the trigger with croncat
4. Monitor the ongoing progress of the trigger

## Configuration Reference

Each field within croncat serves a specific purpose, the following details show what kinds of data are acceptable. [View Source](https://github.com/CronCats/contracts/blob/main/manager/src/triggers.rs#L52-L55)

| Field | Type | Description |
| ------- | ------- | ------- |
| contract_id | AccountId | Account to direct all execution calls against |
| function_id | String | Contract method this task will be executing |
| task_hash | String | The hash of the task you own and want to trigger |
| arguments | Vec<u8> | NOTE: Only allow static pre-defined bytes, most useful for cross-contract task creation |
|  |  |  |

## Simple Trigger Creation Example

Let's say you have a task that calls the contract "counter" that increments a storage integer. You want it to trigger every even minute by using a different contract that returns true/false before calling the increment contract.

Creating a trigger will look like this:

```bash
near call manager_v1.croncat.testnet create_trigger '{"contract_id": "view.in.testnet","function_id": "get_a_boolean","arguments":"","task_hash":"fsda1234fdas1234..."}' --accountId YOU.testnet
```

Now let's break this down a bit:

First snippet makes a call request to the "cron" manager in testnet to register a new trigger.
```bash
near call manager_v1.croncat.testnet create_trigger
```

Next we specify the contract and function getting viewed, like this:
```bash
'{"contract_id": "view.in.testnet","function_id": "get_a_boolean",
```

Then we specify the `task_hash` of this contract call:
```bash
"arguments":"","task_hash":"fsda1234fdas1234...",
```

This is completed by making sure the transaction is signed by the account that will own this trigger:
```bash
--accountId YOUR_NEAR_ACCT.testnet
```

**Important thing to note:** You will get a trigger hash upon successful creation. Save this hash as its your access to monitor and update the trigger in the future.


## How to get Trigger Hash

```bash
near view <CONTRACT_ACCOUNT> get_hash '{"contract_id": "<CONTRACT_ID>","function_id": "<FUNCTION>","cadence": "0 0 * * * *","owner_id": "<OWNER_ID>"}'
```

Example (get Task Hash from "ping" function):
```bash
near view manager_v1.croncat.testnet get_hash '{"contract_id": "jakson.pool.f863973.m0","function_id": "ping","cadence": "0 0 * * * *","owner_id": "jakson.testnet"}'
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
