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
| Mainnet | `juno1lzkdx44dkvttup0dhmas67rfln4jmu89ms4ew59gwn0kp43wgg0qxl64k0` | [✕] |
| Testnet | `juno1ea664h8qjtuucfup2zftcm429tyt837ncmdm5mdkqdw3j8e9lg9qyya5r5` | [✕] |

#### Rules

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | `juno1z5k6my3e3v4crwd408d03r237xjxh4wc2sh96fp39k2ctudms4wqgjwsfs` | [✕] |
| Testnet | `juno1tfpc68vu75yxxf66tgu9zfk4jgawgy3x8lsh779y7n0tnpdxs9ys8w9qca` | [✕] |

## Osmosis

#### Manager

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™                                                                                                                | [] |
| Testnet | Issue deploying [(Discord)](https://discord.com/channels/798583171548840026/1033564974779469874/1033564974779469874) | [] |

#### Rules

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™                                                                                                                | [] |
| Testnet | Issue deploying [(Discord)](https://discord.com/channels/798583171548840026/1033564974779469874/1033564974779469874) | [] |

## Stargaze

#### Manager

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|------|
| Mainnet | Soon™                                                                                                                | []   |
| Testnet | `stars1q2cnrrng58v3mffy5myearnrtqkrn5e0rlehvqaekmkpvuqeuf0qhxl8wm` | [✕]  |

#### Rules

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|------|
| Mainnet | Soon™                                                                                                                | []   |
| Testnet | `stars1ge9hmtuxn9jfn2kfkq3na6fy6yn2fzee56mtjehepfm66qadjvnsrtzz47` | [✕]  |

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
