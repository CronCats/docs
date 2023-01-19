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
| Testnet | `juno1gqkv06dxrccavckw8ydwaxm353pvlrtx0cgxfehvn0gjvlwjfscq58nn8w` | [✕] |

#### Rules

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | `juno1axv2zrp7gvgjy6jnmn0zscnsdgywuxh0hmp4v5nejndq05wmza9srmy9qz` | [✕] |
| Testnet | `juno1ywyp2kgxdkv8wz0sqgfme8n0vlu0rfcgf9cyhyr4qmmclsnyx69sqqk3hj` | [✕] |

## Osmosis

#### Manager

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™                                                                                                                | [] |
| Testnet | `osmo1j5tr7329ff843r7u6htjnghylecy3ejc5kxzk0p4yyfuhm5lwr2qa89pl8` | [] |

#### Rules

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™                                                                                                                | [] |
| Testnet | `osmo1zetastr0yz5rcnhg7p8hc0ye3de9yg2l3yye3dnpp0mdn3qc5l5q09x5yw` | [] |

## Stargaze

#### Manager

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|------|
| Mainnet | Soon™                                                                                                                | []   |
| Testnet | `stars1mesz5kqedgq3vwx6kvxvckk4dg5k7hr2840f3r3xkhyg00dvh9gskk6f9q` | [✕]  |

#### Rules

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|------|
| Mainnet | Soon™                                                                                                                | []   |
| Testnet | `stars13lk0cfjyy4zyy9ynv44r5jxl58gfgzhy5xxpetvnrdvjen9m9a2smfqd5x` | [✕]  |

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
