---
description: 'Croncat Agent FAQ'
sidebar: 'docs'
prev: '/docs/agent-cli/'
#next: '/docs/agent-docker/'
---

# Croncat Agent FAQ

Didn't find information about the questions of interest? Welcome to the FAQ!

## How to run multiple agents in one machine


After [installing Croncat Agent](/docs/agent-cli/) and registering accounts, you can run multiple agents on your machine. To do this, you need to do `near login` for all accounts on which you want to run the agent. Next, you need to start a `screen` session for each agent. For example, you have 3 accounts: agent-1.testnet, agent-2.testnet, agent-3.testnet

Start a new session:

```bash
screen -S croncat-1
```

Start the croncat agent:

```bash
croncat go agent-1.testnet > log-1 2>&1
```

Exit the session:

```bash
Ctrl+A D
```

Watch session logs:

```bash
tail -n 1000 -f log-1
```

The same should be done for agent-2.testnet and agent-3.testnet. But you need to change `screen -S croncat-1` to `screen -S croncat-2`, `log-1` to `log-2`, etc.


## Find out the status of Croncat Agent


### Croncat status

Through the command `croncat status <accountId>`, you can find out the status of the agent.

Example:

```bash
croncat status jakson.testnet
```

Output: 

```bash
status: Pending
payable account id: jakson.testnet
balance: 0.00226
total tasks executed: 0
last missed slot: 0
```

#### status

The status indicates the activity of the agent. The "Pending" status means that the agent is not active right now, because there are more agents than tasks.


#### payable account id

Account where rewards will be credited.

#### balance

Rewards you earn over time doing tasks.


#### total tasks executed

The total number of tasks performed by the agent.


#### last missed slot

Last missed slots by agent.


### Croncat run

Now let's look at the agent start command:

```bash
croncat go jakson.testnet
```

And output:

```
    Agent Account: jakson.testnet
    Agent Balance: 97.691579091241996764082673
  
Registered Agent: jakson.testnet
2021-11-21T10:03:31.895Z Available Tasks: 0, Current Slot: 1637488980000000000
Agent Status: Pending
```

#### Agent Account

Launched agent account.

#### Agent Balance

The balance on the agent's wallet. You must have at least 0.5N on your account.
