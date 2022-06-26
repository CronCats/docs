---
description: 'Run croncat inside a docker image'
sidebar: 'docs'
prev: '/docs/agent-faq/'
next: '/docs/env-file/'
---

# Agent Docker

Welcome friend! If you are here, you're likely interested in setting up a cron agent, to help decentralized the cron tasks & earn rewards! This guide is dedicated to getting you setup, all the way from nothing to getting tasks running. Please note, you will need some NEAR funds to be able to trigger transactions. Don't worry, all of the funds needed to sign transactions will be awarded back to you, in addition to rewards you will earn.

As a task runner, you can provide Cron with a reliable ongoing triggering mechanism by registering your server as an official Cron agent. This will take a few steps, so let's get started! 

It's important that you have the NEAR CLI installed, you can [click here to get it setup first](https://github.com/near/near-cli/).

The recommended and easiest way to get setup running your Cron Agent is to use Docker. The following installation guide assumes you have Docker installed and running.

## 1. Setup

### Install

Pull and build the croncat image:

```bash
docker build -t croncat .
```

### Login

Before running the image make sure you are logged in with near:

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

## 2. Test out Croncat

Run docker in detached mode and set the agent account id:

```bash
docker run --rm -d --env AGENT_ACCOUNT_ID=your_agent.testnet -v ~/.near-credentials:/root/.near-credentials croncat tasks
```

**Command breakdown:**
- `-rm` : Tells the Docker Daemon to clean up the container and remove the file system after the container exits.
- `-d` : Starts the container in "detached" mode &mdash; it won't output logs to stdin. Use `docker ps` to show running containers.
- `-v ~/.near-credentials:/root/.near-credentials` : Mounts your Near credentials directory into the container.

**Configuring Network**

By default the Cron Agent will run on the NEAR testnet. In order to change which network you agent will run on, you must pass `NODE_ENV=<network-name>` to the Docker container.

Example for running Cron Agent in production:
```bash
docker run --rm -d \
--env AGENT_ACCOUNT_ID=your_agent.near \
--env NODE_ENV=mainnet \
-v ~/.near-credentials:/root/.near-credentials croncat/agent
```

## 3. Create Alias

To make usage easier, setup a docker alias:

```bash
alias croncat="docker run --rm -it croncat ./croncat-cli"
```

## 4. Register Your Agent

To be able to earn rewards with croncat, the manager needs to know which account will be earning rewards. You can register by the following:

```bash
# croncat register <agent account> <rewards account>
croncat register agent-007.testnet your_main_account.testnet
```

Note, you if make your rewards account different than your agent account, you will need to setup a way to make sure the agent account stays funded, as it does need to pay for transaction executions.

## 5. Running in Production

Run the croncat agent and set the agent account id:

```bash
croncat go agent-007.testnet
```

----

# All CLI Commands

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
