---
description: 'Create a task in CronCat specifying different configuration params'
sidebar: 'docs'
prev: '/docs/'
next: '/docs/task-creation/'
---

# Anatomy of a Task

A CronCat task is created by an end user or another contract to schedule the execution of an action at a later time. This can be done once, in a recurring fashion, only when certain conditions are met, etc.

When a task is created, it's given several important pieces of information:

- [Interval](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/enum.Interval.html) — defines when and how often the task should execute.
- [Boundary](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/enum.Boundary.html) — (optional) beginning and ending boundaries, further specifying when a task is valid to execute.
- [Stop on fail](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskRequest.html#structfield.stop_on_fail) — determines if a recurring task should stop in the case that an action doesn't succeed.
- [Actions](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.Action.html) — the Cosmos message(s) that will be sent when the task is executed
- [Queries](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/enum.CosmosQuery.html) & [Transforms](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.Transform.html) — (optional) describes powerful criteria enabling "if-this-then-that" event-type tasks based on nearly any on-chain condition.
- [cw20](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskRequest.html#structfield.cw20) — (optional) a single cw20 address and amount associated with the task.

Items not included in the [TaskRequest](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskRequest.html) sent during task creation:

- Fee — the tokens provided at task creation to incentivize the agent network and continued development.

### Interval

The interval of a task determines when it should and should not run. There are currently [four types](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/enum.Interval.html) of intervals:

- `Once`: execute this task once. It's not recurring. As soon as the task is executed and the DAO and agent are paid the fees specified in the CronCat configuration, return the remainder to the task creator.
- `Immediate`: execute the task immediately. A task with and **immediate** interval can be recurring, depending on the the set boundaries. Some tasks may wish to include queries and transforms, which determine whether a task should execute.
- `Block`: execute at a given block height. Depending on the **boundaries** on the task, this can be recurring. For instance, setting a **Block** interval of 100 means the task will execute every 100 blocks, if the boundary and query/transforms allow.
- `Cron`: executes the task at a given time. This uses the [cron spec](https://en.wikipedia.org/wiki/Cron#Cron_expression) that looks something like this: `19 */1 * * *`. That cron string says, "execute this task every hour at the 19th minute." There are helpful websites to interpret cron strings, like [this one](https://crontab.guru/#19_*/1_*_*_*).

### Boundary

A boundary specifies a window when a task window begins and/or ends. Boundaries are optional, and when `null` is provided, the task executes any time.

Let's take a toy example: perhaps an art project wants to mint NFTs every hour for the month of February. A start and end boundary can be specified.

Boundaries have [two types](https://github.com/CronCats/cw-croncat/blob/3bf16277abc4b5c3a6b8affef5814bd0bc08e2bb/packages/cw-croncat-core/src/types.rs#L90-L99):

- Height: the block height to start/end
- Time: a timestamp (unsigned 64-bit integer representing nanoseconds since Unix epoch)

### Actions

Actions are what a task executes. A task can have one or more actions. An action can be any Cosmos SDK message that is allowed by CronCat. For security purposes, not all messages are allowed. You may see the allowed messages in the [`cw-croncat-core` crate](https://docs.rs/cw-croncat-core/0.1.5/cw_croncat_core/msg/struct.TaskRequest.html#method.is_valid_msg_calculate_usage). Please feel free to reach out (DM on [Twitter](https://twitter.com/croncats), please.) if there are exciting use cases to unlock from other messages.

### Queries & Transforms

Queries and transforms are an incredibly powerful aspect to tasks, so we'll take some time explaining this one.

A query and transform can work in coordination to "insert" a query value into an action.

#### An example

Using CronCat queries and transforms, a DAO can create a task that automatically executes any proposal that has passed. For context, in [DAO DAO](https://daodao.zone), members vote on a proposal and if it passes, the status will change accordingly. Proposals do not automatically execute when the last proposal changes status, and must be executed for any intended Cosmos messages to be sent.

We can use a single query and transform to automatically execute a passed proposal.

In this example, a single **action** is specified. It calls a DAO smart contract at the method `execute`, passing these parameters: `{"proposal_id":""}`. Note that typically, this message would be sent with a `proposal_id`, but it is empty. That's because the `proposal_id` will be filled in using a query value, where the transform injects it into the action's message.

First, we start by querying a given DAO address, looking to find proposals whose status is `passed`, which means they're not executed yet. Once the query returns a proposal ID, the **transform** section of the task is utilized. Since there can be multiple actions and multiple queries, the transform section uses indices to determine where the returned query value should be inserted. In the case of the script in question, it fills in the aforementioned `proposal_id`.

### Fee

A fee is included with each task. This fee will cover the gas costs of executing the transaction, plus paying the decentralized agent and the CronCat DAO a modest percentage. For tasks that are meant to be recurring, this fee is tracked and automatically reduced upon each execution. When a recurring task no longer has the balance necessary to cover a subsequent execution (or the boundaries deem it should end) the remaining balance is returned to the task creator.
