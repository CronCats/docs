---
description: 'The definitive guide to fundamentals, use cases, values & vision'
sidebar: 'docs'
prev: '/docs/use-cases/'
---

# Values & Vision

### Forward:
We owe the utmost respect to Paul Vixie for implementing the version of crontab that CronCat is based on, without his early pioneering we would not have such a simple solution for common system tasks. [Source](https://en.wikipedia.org/wiki/Cron#Modern_versions)

## What is the Core Value Proposition of CronCat? 

**CronCat aims to bring decentralized automation to every decentralized application.**

Without CronCat, applications must utilize user-invoked transactions at the time of execution or run a trusted server that signs transactions on behalf of the users in a centralized manner. CronCat utilizes a network of users to execute transactions at the specific time needed in a sandboxed proxy setup. This opens up a layer of extra capabilities and freedom to application developers that previously relied on user interactions to trigger core functionality.

### Key Benefits:
* Decentralized automation
* End-to-end blockchain execution
* Economically sustainable

## CronCat Economics

### CronCat DAO

**The underlying ethos of the CronCat crypto-economic design is to** create a utility service that enables an autonomous business built around micropayments during task execution. In the near future, CronCat will launch a marketplace where end users can create "recipes" which are useful task strategies. Individuals who may be less technically savvy can then purchase a recipe (one-time) and use it whenever they wish. When the marketplace is launched, the CronCat DAO will take a small percentage, just the like the recipe creator. A full overview of the CronCat economics will be published in a separate document.

### Agent network
* Agents will accrue rewards for running tasks, the balance being maintained and held within the CronCat [manager contract](https://github.com/CronCats/cw-croncat/tree/211b829b3c719c3e7bbfef30c7d637e2ba8ccfaa/contracts/croncat-manager) until the agent withdraws rewards earned.
* Agents will maintain enough balance to pay for transaction execution, making reward withdrawals when it is most efficient for their needs. (There is also a setting to auto-withdraw once the balance reaches a threshold.)

## Long Term Vision & Future Development Plans

CronCat will achieve self-sustainability by a balance of both agents running tasks and task creators utilizing CronCat with an increasing number of dApps and contracts. By design, this allows task creators the freedom to utilize automation with minimal additional cost. This however, also provides a problem for the agents, as there must be enough tasks to warrant running the agent daemon. This problem is addressed by establishing phases of growth so the agent / task ratio maintains a semi-lucrative baseline.

This agent/task ratio is [set in configuration](https://github.com/CronCats/cw-croncat/blob/211b829b3c719c3e7bbfef30c7d637e2ba8ccfaa/packages/croncat-sdk-agents/src/types.rs#L77) on the agents contract, and can be updated only by the CronCat DAO. This allows CronCat to be nimble and adaptive as tasks and agents increase.

Such tiers of growth — and the timing of opening up new slots for future agents — will be managed by the CronCat DAO, which lives on Juno network on DAO DAO. A brief overview of the main three phases is explained below: 

**Phase 1**: In the very first phase, CronCat's first steps includes integration with dApps like [DAO DAO](https://daodao.zone/), [Vectis DAO](https://www.vectis.space), [Abstract OS](https://abstract.money), and numerous DeFi platforms. (And you! Please visit the examples section, or DM us on Twitter [@croncats](https://twitter.com/croncats).)

Progressive decentralization will be the approach for agents. You can read more about that [here](/docs/agents-cosmos).

**Phase 2**: The second phase will open up the agent registration to the public, incentivizing the onboarding new agents. As mentioned above, agents will be allowed to onboard as the amount of tasks increases. Agents will be responsible for holding enough tokens to pay for the execution of tasks. As they fulfill tasks, their performance metrics are updated. If agents stop fulfilling tasks for a given period, they will be removed from the active set, and a registered agent in the pending queue will be allowed in.

**Phase 3+**: CronCat has many avenues of growth including running a validator with special incentives, incorporating notification systems, MEV partnerships with protocols like [Skip](https://skip.money), and pushing interchain accounts (ICA) forward through deep integration.
