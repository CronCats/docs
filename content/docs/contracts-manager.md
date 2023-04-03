---
description: 'Manager smart contract'
sidebar: 'docs'
prev: '/docs/contracts-factory/'
next: '/docs/contracts-tasks/'
---

# Manager contract

The manager contract is somewhat unlike the other CronCat contracts in that it is involved in some functionality shared between other contracts. It's also the contract that stores task funds.

**Note**: the CronCat contracts are not intended to custody meaningful amounts of tokens, either native or fungible. It is reasonable, however to attach funds to a task in order to secure purchasing, say, an NFT once a given floor price is reached. Adding non-essential tokens and/or utilizing CronCat contracts as a place to attempt to claim and stake tokens is discouraged. For use cases that may involve some form of custody like this, CronCat should be calling an audited intermediary contract that acts as an escrow, or an audited intermediate contract that and provides the powerful functionality available in the [FeeGrant](https://tutorials.cosmos.network/tutorials/8-understand-sdk-modules/2-feegrant.html) and/or [Authz](https://tutorials.cosmos.network/tutorials/8-understand-sdk-modules/1-authz.html) modules.

One of the important methods in the manager contract is [`proxy_call`](https://docs.rs/croncat-sdk-manager/latest/croncat_sdk_manager/msg/enum.ManagerExecuteMsg.html#variant.ProxyCall). This function can only be called by active agents, and will be called automatically through the [agent daemon](https://github.com/CronCats/croncat-rs). The `proxy_call` function takes an optional `task_hash` argument. That argument is omitted when a simple task is being fulfilled, and included when an event-based task is being fulfilled. Event-based tasks utilize the queries and transforms described in the [task fields section](/docs/examples/#task-fields).

## Shared logic

Unlike some other CronCat contracts, the manager contract shares certain logical interactions.

For instance, when a task is created, the owner of the task may wish to stop and remove the task, and having their unused balance returned. Task removal starts from a call to the task contract, but includes logic in the manager contract.

Certain agent interactions also involve the manager contract, like the agent withdrawal of earned rewards since, as mentioned, the manager is the sole contract holding funds essential to operation.

## Integration methods

The following methods may be useful integrating CronCat automation to new or existing contracts. Because of the shared logic in the manager contract, it's recommended to study the codebase if you need further understanding or advanced usage of task creation and maintenance.

### Queries

#### `task_balance`

This query method takes one argument, `task_hash`, and returns the balance for a given task. This can be useful if a recurring task might benefit from having the native tokens refilled, allowing for seamless continuation.

#### `agent_rewards`

This query takes one argument, `agent_id`, and returns the balance of the rewards earned by this agent. Note that the agent daemon is a long-running application with built-in features to automatically claim rewards once a balance hits an amount. Therefore, this query method is likely helpful for more bespoke agent use or to assist in tracking rewards.

### Execute methods

#### `refill_task_balance`

An owner may refill the native tokens attached to their task. It takes one argument, `task_hash`, and assumes the call will attach native funds to be added to the balance. This is the primary way to "extend" the duration of an existing, recurring task.

#### `refill_task_cw20_balance`

Similar to the previous method, this refills cw20 balances that are included in the task, if called by the owner.

#### `agent_withdraw`

When an agent wishes to withdraw their rewards, they call this method. Note that this method lives in the manager contract since it's where all essential funds are stored, including the agent rewards. The rewards will be sent to the agent's `payable_account_id`.
