---
description: 'A general access, fully autonomous contract that enables scheduled function calls for blockchain contract execution'
sidebar: 'docs'
next: '/docs/use-cases/'
---

# Overview

### What is CronCat?
CronCat provides a general-purpose, fully autonomous network that enables scheduled function calls for blockchain contract execution. It allows any application to schedule logic to get executed in the future, once or many times, triggered by an approved "agent" in an economically stable way. CronCat is launching on Cosmos blockchains and NEAR Protocol.

> Time and block-based executions are the missing functionality required for contracts to operate as a fully autonomous entity, and adding "if-this-then-that" to blockchains is a major enhancement.

Cosmos CosmWasm repository: https://github.com/CronCats/cw-croncat

NEAR Protocol repository: https://github.com/CronCats/contracts

**Note**: the CosmWasm implementation is significantly ahead of the NEAR implementation. This documentation site will focus on CronCat for the Interchain.

If you would like to visit the NEAR-specific documentation, please visit: https://near.cron.cat

## How CronCat Works in a Nutshell

CronCat is a looping runtime that maintains a registry of tasks & agents. In the CronCat system, there are two fundamental "Stakeholders": 

* **Applications**: Blockchain contracts or dApps that schedule future tasks.
* **Agents**: Users that execute CronCat tasks and receive rewards.

Tasks that are scheduled by applications or contracts get put into future buckets which remain dormant until a bucket is active. A bucket becomes active when the block height has been reached or surpassed. Block and time-based (using the standard [cron spec](https://en.wikipedia.org/wiki/Cron#Overview)) buckets are separate. Agents are decentralized entities running a small Rust application that communicates with the CronCat contracts, watching for available tasks & sending transactions that will confirm and execute the tasks at the appropriate time. Agents earn a small reward every time they successfully execute a task.

Many contract functionalities need an extra execution step to enable the completion of some action or state finalization. Without a cron-style execution, contracts on-chain must rely on externally provided state & function changes via transactions sent by chain participants. This is a critical logic piece that is inefficient and sometimes expensive for the participant. Such execution could be paid for by the contract (if desired) or made to execute with less logic (cheaper) by not needing to alter large amounts of chain storage.

Importantly, once the CronCat architecture resides on a blockchain, it becomes a utility for end users and dApps to use. This documentation includes information about the CronCat DAO, which facilitates development, updates, deployments, migrations, etc. Since the agents are decentralized and the smart contracts live on public ledgers, this is a resilient system will not go down nor does it depend on the core CronCat team to "run it." The system is live as long as there is one person who needs it, and one agent who desires to capture the incentives available for fulfilling tasks.

You may find out more about the agent system and the progressive decentralization approach for the Cosmos [launch here](/docs/agents-cosmos).

[Learn more about Use Cases](/docs/use-cases)

## What is the Core Value Proposition of CronCat?

CronCat brings decentralized automation to every decentralized application or contract. Without CronCat, applications must utilize user-invoked transactions at the time of execution or run a trusted server that signs transactions on behalf of the users in a centralized manner. CronCat utilizes a network of agents to execute transactions at the specific time needed in a sandboxed proxy setup. This opens up a layer of extra capabilities and freedom to application developers that previously relied on user interactions to trigger core functionality.

**Key Benefits:**

* Decentralized Automation
* End-to-end Blockchain Execution
* Economically Sustainable
* Cost-Effective 

## For Developers
[developers]: #developers

If you want to utilize CronCat in your dApp or project: [Start Here](/docs/task-creation)

## For Agents
[agents]: #agents

If you want to run CronCat agent and earn rewards: [Start Here](/docs/agents-cosmos)
