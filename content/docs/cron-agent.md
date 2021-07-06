---
description: ''
sidebar: 'docs'
prev: '/docs/deploying/'
next: '/docs/cron-cli/'
---

# Cron Agent
If you have a reliable server and ready to run a docker instance with less than 0.1% downtime, you are eligible for earning revenue by executing Cron tasks. As a task runner, you can provide Cron with a reliable ongoing triggering mechanism by registering your server as an official Cron agent.

## Setup

The recommended and easiest way to get setup running your Cron Agent is to use Docker. The following installation guide assumes you have Docker installed and running.

#### Login
Before running your agent make sure you are logged in with Near:

```bash
near login
```

This should create the following directory (if it doesn't exist already):

```bash
ls ~/.near-credentials
default testnet
```

#### Start Cron Agent
The following command will pull and run the Cron Agent. Make sure to replace `your_agent.testnet` with account that will be executing the tasks.
```bash
docker run --rm -d \
--env AGENT_ACCOUNT_ID=your_agent.testnet \ 
-v ~/.near-credentials:/root/.near-credentials croncat/agent
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
