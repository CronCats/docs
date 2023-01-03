---
description: 'Actively maintained contracts by network'
sidebar: 'docs'
previous: '/docs/join-croncat/'
---

# Deployed Contracts

Here are the deployed contracts on each network supporting Croncat:

## Interchain (Cosmos blockchains)

The [CosmWasm smart contract(s)](https://github.com/CronCats/cw-croncat) will be deployed to the [Juno network](https://www.junonetwork.io) first, with other networks in the interchain following.

## Juno

#### Manager

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | `juno1gvu90ulpql5zaes62rnep0cwrndrtdj80lwkywa7uph7eezdsp9qgz37yh` | [✕] |
| Testnet | `juno174ncqgapq7fudqj64ut4ue47gevlqp93guecjelnkquruvnpjdgsuk046w` | [✕] |

#### Rules

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | `juno1axv2zrp7gvgjy6jnmn0zscnsdgywuxh0hmp4v5nejndq05wmza9srmy9qz` | [✕] |
| Testnet | `juno1kl7nruktwljv0e3p6dg99uelqyxldm0vl5ujrj7up4yv8x6gxtssucxrgs` | [✕] |

## Osmosis

#### Manager

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™                                                                                                                | [] |
| Testnet | `osmo14vnvdwc8kcysymarla8476654r2l6hqtyy3jl32ysxrrllzkhytqy420td` | [] |

#### Rules

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™                                                                                                                | [] |
| Testnet | `osmo16px0ca5elm0ff06l5ev5hyfduwc3vrx29x35yqpa3q2mnve7ehzsxsv8yq` | [] |

## Stargaze

#### Manager

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|------|
| Mainnet | Soon™                                                                                                                | []   |
| Testnet | `stars1vrf82kjkjw7wk3kx09t6pks7mte0flwhtaqqz8rcu9eff6zrjmjsqqhwpt` | [✕]  |

#### Rules

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|------|
| Mainnet | Soon™                                                                                                                | []   |
| Testnet | `stars14rp2tpns3c3sn3aznsgmvfecz4hltc2hyae6zzvauyc5wfnf9aaqdd6kcv` | [✕]  |

## Archway

#### Manager

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™ | [] |
| Testnet | Soon™ | [] |

#### Rules

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™ | [] |
| Testnet | Soon™ | [] |

---

## NEAR Protocol

#### Manager

| Network | Contract Account | Live |
|----|----|----|
| Mainnet | [manager_v1.croncat.near](https://explorer.near.org/accounts/manager_v1.croncat.near) | [✕] |
| Testnet | [manager_v1.croncat.testnet](https://explorer.testnet.near.org/accounts/manager_v1.croncat.testnet) | [✕] |
| Guildnet | [manager_v1.croncat.guildnet](https://explorer.guildnet.near.org/accounts/manager_v1.croncat.guildnet) | [✕] |
| Betanet | [manager_v1.croncat.betanet](https://explorer.betanet.near.org/accounts/manager_v1.croncat.betanet) | [ ] |

### NEAR Manager Contract ABI:

```json
"manager": {
  "viewMethods": [
    "version",
    "get_info",
    "get_tasks",
    "get_task",
    "get_tasks_by_owner",
    "get_slot_tasks",
    "get_slot_ids",
    "get_agent_tasks",
    "get_agent",
    "get_agent_ids",
    "get_hash",
    "validate_cadence"
  ],
  "changeMethods": [
    "create_task",
    "remove_task",
    "proxy_call",
    "register_agent",
    "update_agent",
    "unregister_agent",
    "withdraw_task_balance"
  ]
}
```

### NEAR Rewards

| Network | Contract Account | Live |
|----|----|----|
| Mainnet | [rewards.croncat.near](https://explorer.near.org/accounts/rewards.croncat.near) | [✕] |
| Testnet | [rewards.cron.testnet](https://explorer.testnet.near.org/accounts/rewards.cron.testnet) | [✕] |
| Guildnet | [rewards.croncat.guildnet](https://explorer.guildnet.near.org/accounts/rewards.croncat.guildnet) | [ ] |
| Betanet | [rewards.croncat.betanet](https://explorer.betanet.near.org/accounts/rewards.croncat.betanet) | [ ] |

### NEAR Rewards Contract ABI:

```json
"manager": {
  "viewMethods": [
    "version",
    "stats"
  ],
  "changeMethods": [
    "pet_check_task_ownership"
  ]
}
```
