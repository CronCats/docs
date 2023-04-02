---
description: 'Create a task in CronCat specifying different configuration params'
sidebar: 'docs'
prev: '/docs/'
next: '/docs/task-monitoring/'
---

# Task Creation

## Cosmos

### Create a one-time task

When creating a task that's meant to execute once, we use the [Interval](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskRequest.html) type of [Once](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/enum.Interval.html).

CronCat tasks can have simple criteria (eg. execute my task at the future block height 123456789, or when a given timestamp is reached) or more event-driven criteria. The latter utilizes the "if-this-then-that" capabilities of CronCat, and means the task will populate the fields [`queries`](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskRequest.html#structfield.queries) and/or [`transforms`](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskRequest.html#structfield.transforms). For the purpose of this example, we'll stick to the simpler task.


| Create from | How                                                                                                                                                                                                                                         |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CosmWasm    | Cross-contract calls through CosmWasm [messages](https://book.cosmwasm.com/basics/funds.html?#preparing-messages) or [submessages](https://book.cosmwasm.com/actor-model/contract-as-actor.html?#sending-submessages) |
| Frontend    | Typically using the [CosmJS dependencies](https://www.npmjs.com/org/cosmjs), containing many helpers                                                                                                                                                                           |
| NodeJS      | CosmJS is again excellent for this use case.                                                                                                                                                                                                |
|             |                                                                                                                                                                                                                                             |

**Note**: when a task is created, it will return data that's a [`TaskExecutionInfo` struct](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskExecutionInfo.html), providing useful information. This can be used by a frontend or inside a CosmWasm contract's [`Reply` entrypoint](https://book.cosmwasm.com/actor-model/contract-as-actor.html?highlight=reply#reply-handling) and stored, if you wish.

### See an example

Check out [an example here](/docs/examples).
