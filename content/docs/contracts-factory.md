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

### `latest_contracts`

This method returns all CronCat contract addresses with their version information, but only the latest version. It's considered best practice to always query for the latest contract address instead of, say, hardcoding a Tasks contract address in your dApp. This way, when improvements are added to new versions, your dApp can leverage the full power of automation as it gets better and better.

#### CosmWasm



### `latest_contract`

Similar to `latest_contracts`, this method
