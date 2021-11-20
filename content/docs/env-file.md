---
description: 'How to setup .env file'
sidebar: 'docs'
---

# ENV File

## What is .env file?

Development has been much easier since the invention of the `.env` file. You can easily set your environment variables and values with the syntax ENV_VARIABLE = VALUE and boom!

Env file allows you to customize individual variables for your environment. `.env` files are line delimitated text files, meaning that each new line represents a single variable. By convention .env variable names are uppercase words separated by underscores. Variable names are followed directly by an = which, in turn is followed directly by the value.

## .env setup

After installing Croncat Cli [How to install Agent Cli](https://docs.cron.cat/docs/agent-cli/) you want to run Croncat with notifications and uptime monitoring, or configure the different settings. To do this, you need to run the following command:

```bash
cp /lib/node_modules/croncat/.env.example .env
```

You can then configure the following:

```bash
nano /lib/node_modules/croncat/.env
```

```
NODE_ENV=production
NEAR_ENV=mainnet
LOG_LEVEL=info

AGENT_ACCOUNT_ID=YOUR_ACCOUNT.near
AGENT_MIN_TASK_BALANCE=1
AGENT_AUTO_REFILL=true

WAIT_INTERVAL_MS=450000

SLACK_TOKEN=YOUR_WEBHOOK_TOKEN
SLACK_CHANNEL=general


HEARTBEAT=false
HEARTBEAT_URL=GET_REQUEST_URL_FOR_STATUS_SERVICE
```
## Croncat .env variables

Let's take a look at each variable:

### NEAR_ENV

This is the network environment variable (mainnet, testnet, guildnet) that the commands refer to when run from the command line.

### LOG_LEVEL

Here you can specify what level of logs will be displayed.

### AGENT_ACCOUNT_ID

The account registered as an agent. Example: agent-007.near

### AGENT_MIN_TASK_BALANCE

The NEAR amount to trigger a notification

### AGENT_AUTO_REFILL

When balance is empty, will auto-withdraw rewards to cover signing txns, withdraws the payout account.

### WAIT_INTERVAL_MS

The interval to wait between checking for tasks. Good intervals are below 60 seconds and above 10 seconds.


### SLACK_TOKEN, SLACK_CHANNEL

Notify slack when events happen

### HEARTBEAT, HEARTBEAT_URL

 If you have an external heartbeat service that just needs a ping (GET request)
