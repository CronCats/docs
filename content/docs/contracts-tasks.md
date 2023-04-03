---
description: 'Tasks smart contract'
sidebar: 'docs'
prev: '/docs/contracts-manager/'
next: '/docs/contracts-agents/'
---

# Tasks contract

As the name implies, the tasks contract contains core logic dealing with CronCat tasks. Tasks are the fundamental entity that end users and/or integrating contracts create, describing in detail what "actions" should occur, and under which conditions, if any.

You may review the [anatomy of a task](/docs/task-anatomy/) for details explanations on what's involved in the fields of a CronCat task.

As mentioned in the [manager section](/docs/contracts-manager#shared-logic), there exists an interplay between the tasks contract and the manager contract, since the manager contract contains the stored tokens associated with a task.

## Integration methods

There are a few helpful methods that can be useful for frontend and smart contracts that leverage automation. Creating tasks is an important component to automation, and that process starts in the tasks contract.

When integrating CronCat task creation, you'll want to ensure you're using the latest version of the tasks contract, by asking the factory for the latest version. This is covered in the [factory contract section](/docs/contracts-factory#latest_contract), and demonstrated in the [boolean contract caller example](/docs/examples).

### Queries

#### `tasks_by_owner`

This query takes an `owner_addr` argument, and two optional fields for pagination: `from_index` and `limit` returning all the tasks by the owner using the [TaskInfo struct](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/msg/enum.TasksQueryMsg.html#variant.TasksByOwner).

#### `task`

Given the argument `task_hash`, it returns a [TaskResponse struct](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskResponse.html). If a task with that task hash exists, the response will populate the `task` field with details of the task. If the task hash doesn't exist, the `task` field will not populate. Since CosmWasm responses come back in JSON, this value will be `null`.

```json
{
  "data": {
    "task": null
  }
}
```

**Note**: when a CronCat task completes, it is removed from state, so a query for an outdated task hash will not return the historical details. 

#### `task_hash`

At times, it can be helpful to determine the CronCat task hash before creation. Task hashes are deterministic, and only include identifying task fields that differentiate one task from another.

This query takes one argument, `task` which is a [Task struct](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.Task.html), containing these fields:

- Task owner's address
- Task interval
- Optional, applicable boundaries
- If it's a recurring task, whether it should stop when any action fails.
- The actions (detailed Cosmos messages) that will be performed at the designated time(s)
- Optional queries that should be checked, helping to determine whether conditions are met to execute the actions
- Optional transforms that may take results captured from queries, and how to inject those values into further queries or actions
- The version of the CronCat task contract
- Details on the (estimated) amount of native tokens required to execute this task one time. It also contains details on the gas, gas price, and percentages involved with incentivizing agents and whatnot.

*As always, the code is the best source of truth, so consider the bullet list above as subject to change as future versions are built.*

### Execute methods

#### `create_task`

This is one of the more important methods, since it creates the CronCat task that'll execute exactly as designated according to the fields provided.

This method takes one argument, `task`, which is a [TaskRequest struct](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskRequest.html).

CronCat automation uses a decentralized agent network, which run a lightweight daemon that automatically executes transactions at the proper moment defined in the tasks. The agents are paid a small percentage above the total gas sent in their transactions. When creating a task, you must attach native tokens with the creation of the task, as a means of participating in the incentivized network.

Please see the [anatomy of a task](/docs/task-anatomy/) for further details. 

A task can stop by:

1. The owner setting the `stop_on_fail` field to `true`, and upon execution of the task, a task action fails (returning a non-zero code)
2. A task having an interval of `Once` and successfully completing its execution.
3. A task becoming invalid by defining an end-boundary for a time of block that has elapsed.
4. The owner removing the task by calling the `remove_task` method.

When a task stops or is removed, the remaining balance (in native and fungible tokens) is returned to the owner.

**Note**: for security purposes, a task hash must be unique. This means immediately attempting to create the same task twice will fail, and this is expected. If you wish to extend a recurring task or add more balance to an existing task, please see the available [methods on the manager contract](/docs/contracts-manager/#execute-methods), which is the contract that stores funds necessary for operation.

#### `remove_task`

This method can only be called by the owner of an existing task, removing it and returning the remaining balance of native and fungible tokens included with the task.

It takes one argument, `task_hash`, and will remove the task from state and signal the manager smart contract to return the remaining balances.
