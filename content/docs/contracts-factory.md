---
description: 'Factory smart contract'
sidebar: 'docs'
prev: '/docs/deployed-contracts/'
next: '/docs/contracts-manager/'
---

# Factory contract

The [factory contract](https://github.com/CronCats/cw-croncat/tree/211b829b3c719c3e7bbfef30c7d637e2ba8ccfaa/contracts/croncat-factory) keeps track of the CronCat contracts and their versions.

The factory has one owner: the CronCat DAO. When a new version is ready to be released, we used a truncated semantic versioning to just contain a major and minor version, then the factory instantiates it. The updated contract address will be stored, and the `code_id` provided (along with other fields) to the `deploy` method.

The factory's address is propagated to the various contracts, and they'll store it in their state, so they can reference factory's state they need to reference.

For instance, during task creation the [Task contract](https://github.com/CronCats/cw-croncat/tree/211b829b3c719c3e7bbfef30c7d637e2ba8ccfaa/contracts/croncat-tasks), it checks the state of the Factory contract to get the Manager contract's address, so it can send a message during the response.

End users and dApps will never send execute messages to the Factory contract, but it's expected practice to query it, since it acts as the source of truth for the addresses to the latest contract versions for Tasks, Agents, and the Manager contracts.

For dApp integration, let's highlight some useful methods.

## Integration methods

The queries listed below do not cover every message available for the factory contract. Instead, these highlight queries that integrating dApps/frontends will likely want to use, to take advantage of the architecture and ensure task creation, refilling, and withdrawal happen on the most up-to-date CronCat contracts.

### Queries

#### `latest_contracts`

This query method returns all CronCat contract addresses with their version information, but only the latest version. It's considered best practice to always query for the latest contract address instead of, say, hardcoding a Tasks contract address in your decentralized app. This way, when improvements are added to new versions, your dApp can leverage the full power of automation as it gets better and better.

#### `latest_contract`

Similar to `latest_contracts`, this query returns one contract address based on the parameter `contract_name`. At the time of this writing, these contract keys are `String`s including:

- `"tasks"` — this is likely the most common contract an integrating dApp will query for, since it contains the methods specific to task creation, refill of native tokens, and task removal. See more details in [the tasks section](/docs/contracts-tasks).
- `"agents"` — as explained in [the agents section](/docs/contracts-agents), this contains logic essential for the CronCat agent network, who participate in fulfilling tasks at the proper time.
- `"manager"` — the manager contract is a bit different from the others in that it contains the `proxy_call` method, which is what agents call to fulfill tasks, but it also executes methods sent from other CronCat contracts. For instance, the process of removing a task uses logic from the the tasks and the manager contract.

## Remaining methods

The majority of the factory methods are not helpful in integration and will be omitted. For details on the other methods, please see the crate's documentation:

- [Factory execute methods](https://docs.rs/croncat-sdk-manager/latest/croncat_sdk_manager/msg/enum.ManagerExecuteMsg.html)
- [Factory query methods](https://docs.rs/croncat-sdk-manager/latest/croncat_sdk_manager/msg/enum.ManagerQueryMsg.html)
