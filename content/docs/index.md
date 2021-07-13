---
description: ''
sidebar: 'docs'
next: '/docs/use-cases/'
---

# Summary
[summary]: #summary

Core goal of Cron is to provide a general access, fully autonomous contracts that enable scheduled function calls for blockchain contract execution. Today, there are many use cases that could benefit from recurring or scheduled jobs that are triggered to execute in a trustless manner. 

With Near Cron, we aim to allow any contract to be able to schedule some logic to get executed in the future, once or many times, triggered by an approved party or directly via protocol, in an economically stable format.

Cron.Near is not a new concept, it is an implementation of blockchain executable functionality based on the popular module [Cron](https://en.wikipedia.org/wiki/Cron) available in many programming languages.

# Motivation
[motivation]: #motivation

Many contract functionalities need an extra execution step to enable the completion of some action or state finalization. Without a cron-style execution, contracts on chain must rely on externally provided state & function changes via transactions sent by chain participants. This is a critical logic piece that is innefficient and sometimes expensive for the participant. Such execution could be paid for by the contract (if desired) or made to execute with less logic (cheaper) by not needing to alter large amounts of chain storage.

> Cron is the missing functionality required for contracts to operate as a fully autonomous entity.

# For Developers

If you want to utilize croncat in your dApp or project:

[Start Here](/docs/task-creation)

# For Agents

If you want to run croncat agent and earn rewards:

[Start Here](/docs/agent-cli)