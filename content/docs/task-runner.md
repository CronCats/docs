---
description: ''
sidebar: 'docs'
prev: '/docs/deploying/'
next: '/docs/smart-contract-integration/'
---

# Task Runner
If you have a reliable server and ready to run a docker instance with less than 0.1% downtime, you are eligible for earning revenue by executing Cron tasks. As a task runner, you can provide Cron with a reliable ongoing triggering mechanism by registering your server as an official Cron agent.

## Setup

#### Install

Pull and build the image
```bash
docker build -t croncat .
```

#### Login
Before running the image make sure you are logged in with near:

```bash
near login
```

This should create the following directory (if it doesn't exist already):

```bash
ls ~/.near-credentials
default testnet
```

#### Start Task Runner
Run docker in detached mode and set the agent account id:
```bash
docker run --rm -d --env AGENT_ACCOUNT_ID=your_agent.testnet -v ~/.near-credentials:/root/.near-credentials croncat
```

#### Optional: Create an Alias

```bash
alias croncat="docker run --rm -it croncat ./croncat-cli"
```



## Registration

 I expect to create a special wallet my server can utilize to sign transactions for the NEAR blockchain. I expect to keep my server 100% accessible to the internet and to NEAR blockchain. I expect to register my server as a participant in the Cron service by submitting my server wallet account ID, account public key, reward account id and possibly a graffiti tag for friendly runner leaderboards. I expect the registration process to take some small window of block times, and potentially need to stake some NEAR tokens to help secure my place as a Cron agent. I also expect to incur fees or total stake loss upon acting maliciously toward the Cron protocol.

Add your agent to Cron known agents
```bash
croncat register <accountId> <payableAccountId>
```

Example:
```bash
croncat register cron-agent.testnet cron-agent-wallet.testnet
```


## Unregistration

As a task runner, I want to remove my agent from running any further cron tasks. I expect to cancel any upcoming tasks that may have been pre-assigned, but do not expect any tasks that are pending / submitted to be cancelled. For a successful unregister, I expect to withdraw any / all rewards accrued by my agent for running tasks. I expect to not be able to withdraw some or all rewards in the event my agent was deemed malicious. I expect that I can re-register at a future date if my account is deemed acceptable again in the future.

## Rewards
