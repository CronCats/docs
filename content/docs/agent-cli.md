---
description: ''
sidebar: 'docs'
prev: '/docs/deploying/'
next: '/docs/contract-integration/'
---

# Agent CLI
As a task runner, you can provide Cron with a reliable ongoing triggering mechanism by registering your server as an official Cron agent.

## Setup

### Install

Pull and build the image
```bash
docker build -t croncat .
```

### Login
Before running the image make sure you are logged in with near:

```bash
near login
```

This should create the following directory (if it doesn't exist already):

```bash
ls ~/.near-credentials
default testnet
```

### Start Task Runner
Run docker in detached mode and set the agent account id:
```bash
docker run --rm -d --env AGENT_ACCOUNT_ID=your_agent.testnet -v ~/.near-credentials:/root/.near-credentials croncat
```

### Create Alias

```bash
alias croncat="docker run --rm -it croncat ./croncat-cli"
```



## Registration

 I expect to create a special wallet my server can utilize to sign transactions for the NEAR blockchain. I expect to keep my server 100% accessible to the internet and to NEAR blockchain. I expect to register my server as a participant in the Cron service by submitting my server wallet account ID, account public key, reward account id and possibly a graffiti tag for friendly runner leaderboards. I expect the registration process to take some small window of block times, and potentially need to stake some NEAR tokens to help secure my place as a Cron agent. I also expect to incur fees or total stake loss upon acting maliciously toward the Cron protocol.

## Unregistration

## Rewards
