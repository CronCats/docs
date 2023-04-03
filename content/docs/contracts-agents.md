---
description: 'Agents smart contract'
sidebar: 'docs'
prev: '/docs/contracts-tasks/'
---

# Agents contract

The agent network consists of folks running the [agent daemon](https://github.com/CronCats/croncat-rs), and registering to be an agent. In the early launch of CronCat on the interchain, progressive decentralization will occur. Details to this process and decision [are covered here](/docs/agents-cosmos/#launch-plan).

When progressive decentralization is activated, the public will be able to run a CronCat agent.

Every agent has a status (the [AgentStatus enum](https://docs.rs/croncat-sdk-agents/latest/croncat_sdk_agents/types/enum.AgentStatus.html)):

- `Active` — Active agents are "on the hook" for fulfilling tasks on time. Active agents that do not fulfill their expected responsibility risk being removed.
- `Pending` — Pending agents have registered, but at the time of registration, it was not necessary to include them in the active set. This logic is based on factors including the agent configuration's [`min_tasks_per_agent` field](https://docs.rs/croncat-sdk-agents/latest/croncat_sdk_agents/types/struct.Config.html#structfield.min_tasks_per_agent). 
- `Nominated` — A nominated agent is able to join the active set. When an agent queries their status and the response tells them they're nominated, the next step is to call `check_in_agent`.

## Integration methods

Unlike the factory, tasks, and manager contracts, the agents contract does not need to be called for dApps integrating CronCat automation. The agent daemon will take care of calling these automatically.

Below will highlight some commands to aid in the understanding of the agent network. If an inspired contributor desires to create a new client, these might be helpful.

### Queries

#### `get_approved_agent_addresses`

As described in the [interchain launch plan](/docs/agents-cosmos/#launch-plan), there will be a period of time where agent registration is tied to a whitelist. After progressive decentralization is enabled (specifically, when the configuration's [`public_registration`](https://docs.rs/croncat-sdk-agents/latest/croncat_sdk_agents/types/struct.Config.html#structfield.public_registration) becomes `true`) the pending and active queue described earlier becomes enabled.

This query returns the allowed agents before public registration.

#### `get_agent_tasks`

This query takes one argument, `account_id`, of an active agent. It returns details regarding how many tasks it's expected to fulfill. This method is called automatically by the agent daemon.

#### `get_agent`

This query also takes one argument, `account_id`, returning information about the agent. The value returned contains a field `agent` that will populate with details about the agent's statistics, their beneficiary account, and other items. See the [AgentInfo struct](https://docs.rs/croncat-sdk-agents/latest/croncat_sdk_agents/msg/struct.AgentInfo.html) for more info.

### Execute methods

#### `register_agent`

This method is called to register an agent. There is an option argument, `payable_account_id`, where a beneficiary of the rewards can be set. If no argument is provided, the sender will be set as the beneficiary.

When public registration is enabled, any interchain account that has passed the necessary requirements can call this method. Agents will likely be placed in the pending queue after calling this method, and will want to check their status by querying with `get_agent`. When the status comes back as `Nominated` the agent can proceed to call `check_in_agent`.

#### `check_in_agent`

When an [agent's status](https://docs.rs/croncat-sdk-agents/latest/croncat_sdk_agents/types/enum.AgentStatus.html) becomes `Nominated`, the agent will want to call this method. The method will confirm on-chain logic, then add the agent into active set, changing its status to `Active`.

There are configuration values that help maintain a reasonable number of agents based on the amount of total tasks. If the number of tasks were to rise significantly for a few months and then experience a dip, it's expected behavior that some agents would be removed. This is why the agent daemon is checking its status regularly, and will automatically call this method when it needs to.

#### `unregister_agent`

An agent may wish to stop participating in the agent network and unregister. They call this method from the agent address and it will remove them from the active set, sending remaining rewards if applicable. In the case that an agent wishes to unregister, but are no longer active, provide this optional argument and value: `from_behind: true`. See the [crate documentation](https://docs.rs/croncat-sdk-agents/latest/croncat_sdk_agents/msg/enum.ExecuteMsg.html#variant.UnregisterAgent) for more details.  

#### `update_agent`

When registering, an agent can provide an optional `payable_account_id`. This address will receive the rewards when the agent calls the [`agent_withdraw` method](/docs/contracts-manager/#agent_withdraw) on the manager contract, which is the contract holding essential funds.

This method allows an agent to update their beneficiary account, by providing a new `payable_account_id`.
