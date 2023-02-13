---
description: 'Actively maintained contracts by network'
sidebar: 'docs'
previous: '/docs/join-croncat/'
---

# Deployed Contracts

Here are the deployed contracts on each network supporting Croncat:

## Interchain (Cosmos blockchains)

The [CosmWasm smart contract(s)](https://github.com/CronCats/cw-croncat) will be deployed to the [Juno network](https://www.junonetwork.io) first, with other networks in the interchain following.

## Neutron

#### Factory

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | `` | [✕] |
| Testnet | `neutron1wr6vc3g4caz9aclgjacxewr0pjlre9wl2uhq73rp8mawwmqaczsq5smp3h` | [✕] |

## Juno

#### Factory

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | `` | [✕] |
| Testnet | `juno1x82wr3jkfurkgm8za3vayjr5ty932vn8nsmauvkxe4n35aj632tq5lguvl` | [✕] |

## Osmosis

#### Factory

| Network | Contract address                                                                                  | Live |
|----|---------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™                                                                                             | [] |
| Testnet | `osmo1j5tr7329ff843r7u6htjnghylecy3ejc5kxzk0p4yyfuhm5lwr2qa89pl8` (somewhat outdated, RPC issues) | [] |

## Stargaze

#### Factory

| Network | Contract address                                                                                                     | Live |
|----|----------------------------------------------------------------------------------------------------------------------|------|
| Mainnet | Soon™                                                                                                                | []   |
| Testnet | `stars1ysuhjlsvwkazu4f43tfzk3a5afnlymx4znnxy7fx0e9d6nlluq9sqqu9rr` | [✕]  |

## Archway

#### Factory

| Network | Contract address                                                                                    | Live |
|----|-----------------------------------------------------------------------------------------------------|----|
| Mainnet | Soon™ | [] |
| Testnet | `archway1g8s22s8mkgtu8p7zpy3lrmjl09jj76wkgl8c0xmt4hm7jc9vwq9qhk6u3t` | [] |

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
