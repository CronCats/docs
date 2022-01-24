---
description: 'Actively maintained contracts by network'
sidebar: 'docs'
previous: '/docs/join-croncat/'
---

# Deployed Contracts

Here are the deployed contracts on each network supporting croncat:

## Manager

| Network | Contract Account | Live |
|----|----|----|
| Mainnet | [manager_v1.croncat.near](https://explorer.near.org/accounts/manager_v1.croncat.near) | [x] |
| Testnet | [manager_v1.croncat.testnet](https://explorer.testnet.near.org/accounts/manager_v1.croncat.testnet) | [x] |
| Guildnet | [manager_v1.croncat.guildnet](https://explorer.guildnet.near.org/accounts/manager_v1.croncat.guildnet) | [x] |
| Betanet | [manager_v1.croncat.betanet](https://explorer.betanet.near.org/accounts/manager_v1.croncat.betanet) | [ ] |

## Manager Contract ABI:

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


## Rewards

| Network | Contract Account | Live |
|----|----|----|
| Mainnet | [rewards.croncat.near](https://explorer.near.org/accounts/rewards.croncat.near) | [x] |
| Testnet | [rewards.cron.testnet](https://explorer.testnet.near.org/accounts/rewards.cron.testnet) | [x] |
| Guildnet | [rewards.croncat.guildnet](https://explorer.guildnet.near.org/accounts/rewards.croncat.guildnet) | [ ] |
| Betanet | [rewards.croncat.betanet](https://explorer.betanet.near.org/accounts/rewards.croncat.betanet) | [ ] |

## Rewards Contract ABI:

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
