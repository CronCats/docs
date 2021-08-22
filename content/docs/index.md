---
description: 'A general access, fully autonomous contract that enables scheduled function calls for blockchain contract execution'
sidebar: 'docs'
next: '/docs/use-cases/'
---

# Overview

### What is Croncat?
Croncat provides a general purpose, fully autonomous network that enables scheduled function calls for blockchain contract execution. It allows any application to schedule logic to get executed in the future, once or many times, triggered by an approved “agent,” in an economically stable format. Croncat is launching on NEAR Protocol and will initially schedule function calls in $NEAR Token. Future integrations with other NEP-141 tokens are planned. 

> Cron is the missing functionality required for contracts to operate as a fully autonomous entity.

## How Croncat Works In A Nutshell

Croncat is a looping runtime that maintains a registry of tasks & agents. In the Croncat system, there are two fundamental ‘Stakeholders’: 

* Applications: Blockchain contracts or dApps that schedule future tasks.
* Agents: Users that execute cron tasks and receive rewards

Tasks that are scheduled by applications or contracts, get put into future buckets which remain dormant until a bucket is active. A bucket becomes active when the block height has been reached or surpassed. Agents communicate with the cron contracts, watching for available tasks & signing transactions that are ready to execute. Agents earn a small reward every time they successfully execute a task.

Many contract functionalities need an extra execution step to enable the completion of some action or state finalization. Without a cron-style execution, contracts on chain must rely on externally provided state & function changes via transactions sent by chain participants. This is a critical logic piece that is innefficient and sometimes expensive for the participant. Such execution could be paid for by the contract (if desired) or made to execute with less logic (cheaper) by not needing to alter large amounts of chain storage.

[Learn more about Use Cases](/docs/use-cases)

## What Is The Core Value Proposition Of Croncat? 
Croncat aims to bring decentralized automation to every decentralized application or contract. Without Croncat, applications must utilize user-invoked transactions at the time of execution or run a trusted server that signs transactions on behalf of the users in a centralized manner. Croncat utilizes a network of users to execute transactions at the specific time needed in a sandboxed proxy setup. This opens up a layer of extra capabilities and freedom to application developers that previously relied on user interactions to trigger core functionality.

### Key Benefits:
* Decentralized Automation
* End-to-end Blockchain Execution
* Economically Sustainable
* Cost-Effective 

# For Developers
[developers]: #developers

If you want to utilize croncat in your dApp or project: [Start Here](/docs/task-creation)

If you want your deployed contract to directly schedule cron tasks: [Read More](/docs/contract-integration)

# For Agents
[agents]: #agents

If you want to run croncat agent and earn rewards: [Start Here](/docs/agent-cli)