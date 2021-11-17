---
description: 'Run croncat directly via CLI'
sidebar: 'docs'
# prev: '/docs/'
next: '/docs/agent-docker/'
---

# Agent CLI

Welcome friend! If you are here, you're likely interested in setting up a cron agent, to help decentralized the cron tasks & earn rewards! This guide is dedicated to getting you setup, all the way from nothing to getting tasks running. Please note, you will need some NEAR funds to be able to trigger transactions. Don't worry, all of the funds needed to sign transactions will be awarded back to you, in addition to rewards you will earn.

As a task runner, you can provide Cron with a reliable ongoing triggering mechanism by registering your server as an official Cron agent. This will take a few steps, so let's get started! 

## 1. Setup

### Install

```bash
npm i -g croncat near-cli
```

### Login

Before running the agent make sure you are logged in with near:

```bash
near login
```

Being logged in allows your cron agent to have a funded account. If you do not have a near account with 1 NEAR or more, you can setup one here: [Setup NEAR Wallet](https://wallet.near.org/)

Alternatively, you can create a new set of keys just for croncat agent:

```bash
near generate-key agent-007.testnet
```

This should create the following directory (if it doesn't exist already):

```bash
ls ~/.near-credentials
default testnet
```

Once generated, copy the public key (which will be used to add as a signer for a funded account), then do the following command with the funded account you own:

```bash
near add-key your_account.testnet ed25519:EkiM...
```

## 2. Test out the CLI

Run docker in detached mode and set the agent account id:
```bash
croncat tasks
```

## 3. Register Your Agent

To be able to earn rewards with croncat, the manager needs to know which account will be earning rewards. You can register by the following:

```bash
# croncat register <agent account> <rewards account>
croncat register agent-007.testnet your_main_account.testnet
```

Note, you if make your rewards account different than your agent account, you will need to setup a way to make sure the agent account stays funded, as it does need to pay for transaction executions.

## 4. Testing Task Runner

Run the croncat agent and set the agent account id:

```bash
croncat go agent-007.testnet
```

## 5. Running in Production

Once you've run all the above commands, its time to move into something much more stable. If you are only using the CLI as your agent, you can setup a screen session so the runtime persists even when you are not active in the shell runtime. You can also checkout the "Agent Docker" setup for another way to persist agent runtime.

```bash
# Start a new session
screen -S croncat

# Start the croncat agent
croncat go agent-007.testnet > log 2>&1

# Exit the session
Ctrl+a d

# Watch session logs
tail -n 1000 -f log

# Resume session
screen -rD croncat

# Stop croncat
Ctrl+c
```

----

## All CLI Commands

For a list of up-to-date commands, run `croncat --help` in your terminal.

```bash
Usage: croncat <command> [options]

Commands:
  croncat register <accountId> <payableAccountId>  Add your agent to cron known agents
  croncat update <accountId> <payableAccountId>    Update your agent to cron known agents
  croncat unregister <accountId>                   Account to remove from list of active agents.
  croncat withdraw <accountId>                     Withdraw all rewards earned for this account
  croncat status <accountId>                       Check agent status and balance for this account
  croncat tasks                                    Check how many tasks are available
  croncat go <accountId>                           Run tasks that are available, if agent is registered and has balance
```

----

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

## Update Agent
If you need to change your Cron Agent account or the rewards account run the following:

Example:
```bash
croncat update cron-agent.testnet new-cron-agent-wallet.testnet
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
## Notes
The installation process on RPI is identical to the above and runs without errors.
