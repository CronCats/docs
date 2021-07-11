---
description: ''
sidebar: 'docss'
# prev: '/docs/cron-agent'
# next: '/docs/contract-integration'
---

# Cron CLI

Use the Cron CLI to interact with Cron App.

## Setup

You can use the Docker image to run the Cron CLI. To do so execute the following:

```bash
docker run --rm -it croncat/agent ./croncat-cli <command>
```

#### Optional: Create an Alias
Add the following to your `.bash_profile` or `.bashrc` (or `.zshrc` for Z-shell):
```bash
alias croncat="docker run --rm -it croncat/agent ./croncat-cli"
```

Then you run the Cron CLI like so:

```bash
croncat <command>
```

## Register
 In order to run Cron tasks and receive rewards you need to register your server as a participant in the Cron service by submitting your server wallet account ID and reward account id (`payableAccountId`).

Add your agent to Cron known agents:
```bash
croncat register <accountId> <payableAccountId>
```

Example:
```bash
croncat register cron-agent.testnet cron-agent-wallet.testnet
```

#### Update Cron accounts
If you need to change your Cron Agent account or the rewards account run the following:

```bash
croncat register <accountId> <payableAccountId>
```

Example:
```bash
croncat update new-cron-agent.testnet new-cron-agent-wallet.testnet
```


## Unregister
At any time you may choose to unregister your Cron Agent and stop it from running any further Cron tasks. Note that this will cancel any upcoming tasks that may have been pre-assigned, but it will not cancel any tasks that are pending / submitted. You may re-register your agent at anytime.

Remove your agent from list of known Cron agents:
```bash
croncat unregister <accountId>
```

Example:
```bash
croncat unregister cron-agent.testnet
```

## Rewards
Rewards will be automatically paid out directly to your configured beneficiary account ID at time of execution or in batches.

Withdraw all rewards earned for this account:
```bash
croncat withdraw <accountId>
```

Example:
```bash
croncat withdraw cron-agent.testnet
```

## Tasks
At any time you may view all tasks that your agent can run. In most cases, this list will be how your agent knows if it should be signing a transaction or maintaining an idle but active status. To view the list execute the following:

```bash
croncat tasks
```
