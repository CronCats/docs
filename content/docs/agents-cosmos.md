---
description: 'Cosmos Agents launch'
sidebar: 'docs'
next: '/docs/pre-reqs-agent/'
---

# Cosmos Agents

The agent codebase is a Rust daemon located here:

https://github.com/CronCats/croncat-rs

The application is lightweight enough to run on a small device such as a modern Raspberry Pi. The application has a basic CLI that will be used for setting up an agent, but after that, the application is meant to stay running. Once an agent has registered and been let into the set of "active" agents, it will automatically query the CronCat contracts and fulfill tasks at the appropriate time.

## Launch plan

The CronCat architecture has been built to be fully decentralized on the agents side. For the Cosmos launch, the agents will begin using an internal whitelist held in the [Agents smart contract](https://github.com/CronCats/cw-croncat/blob/211b829b3c719c3e7bbfef30c7d637e2ba8ccfaa/contracts/croncat-agents/src/state.rs#L24). After the launch, as the number of tasks grow, the CronCat DAO — who is the sole owner of the CronCat [Factory contract](https://github.com/CronCats/cw-croncat/tree/211b829b3c719c3e7bbfef30c7d637e2ba8ccfaa/contracts/croncat-factory) — will submit a DAO proposal enabling public registration of agents. If the proposal passes, a "one-way" boolean will flip, the agent whitelist will be cleared, and the public will be able to register, as long as they fulfill basic requirements checked on chain.

CronCat is excited to put the team and contributors' full focus on ushering in the advent of blockchain automation. It's a major milestone for everyone in web3, and we know end users, DAOs, and other dApps are excited to begin creating tasks and improving their workflows and user experience.
