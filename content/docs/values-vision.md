---
description: 'The definitive guide to fundamentals, use cases, values & vision'
sidebar: 'docs'
prev: '/docs/use-cases/'
next: '/docs/croncat-dao/'
---

# Values & Vision

### Forward:
We owe the utmost respect to paul vixie for implementing the version of crontab that croncat is based on, without his early pioneering we would not have such a simple solution for common system tasks. [Source](https://en.wikipedia.org/wiki/Cron#Modern_versions)

## What Is The Core Value Proposition Of Croncat? 
Croncat aims to bring decentralized automation to every decentralized application. Without croncat, applications must utilize user-invoked transactions at the time of execution or run a trusted server that signs transactions on behalf of the users in a centralized manner. Croncat utilizes a network of users to execute transactions at the specific time needed in a sandboxed proxy setup. This opens up a layer of extra capabilities and freedom to application developers that previously relied on user interactions to trigger core functionality.

### Key Benefits:
* Decentralized Automation
* End-to-end Blockchain Execution
* Economically Sustainable

# #Croncat Economics: A Simple Snapshot
**The underlying ethos of the Croncat crypto-economic design is to** create a utility service that enables an autonomous business built around (1) micropayments for runtime and (2) earned interest as a basis for operational costs.

The economics of Croncat are aimed at achieving the above ethos by self-maintaining collateral movements (i.e. the Cron DAO will manage locked $NEAR scheduled on a contract), and by DAO approved settings (i.e. DAO vote on how the interest from this $NEAR will be utilized to enhance and improve Croncat). Importantly, Croncat is not focussed on becoming extremely profitable, but rather a stable building block for decentralized applications to utilize for core runtime logic. A full overview of the Croncat economics will be published in a separate document.

In general, Cron economics follows three core models

### 1. Application Model
* Applications will deposit some amount of collateral at task creation time.
* Application will pay a small fee on top of the regular transaction gas fee.

### 2. Agent Model
* Agents will accrue rewards for running tasks, the balance being maintained and held within the cron core contract until the agent withdraws rewards earned.
* Agents will maintain enough balance to pay for transaction execution, making reward withdrawals when it is most efficient for their needs.

### 3. Cron Core Model
* Cron will maintain an escrow-style contract that acts as a treasury for deposited task balances.
* Treasury balances will be broken up into buckets of immediate use, interest earning collateral and DAO holdings. 
* Cron will maintain an on-going treasury task for rebalancing each bucket holdings based on upcoming task execution needs.

# Long Term Vision & Future Development Plans
## 1. Long term viability
Cron aims to achieve self-sustainability by a balance of both agents running tasks and task creators utilizing Cron with an increasing number of dApps and contracts. By design, cron allows task creators the freedom to utilize cron with a minimal additional cost. This however, also provides a problem for the agents, as there must be enough tasks to warrant running the cron agent scripts. This problem is addressed by establishing phases of growth so the agent / task ratio remains in a semi lucrative baseline. Such tiers of growth - and the timing of opening up new slots for future agents - will be managed by the Cron DAO. A brief overview of the main three phases is explained below: 

**Phase 1**: In the very first phase, Croncat will incentivize new task creators, by allowing them to set up tasks with free fees or cron-matched budgets. The task threshold goal will be to achieve a minimum of 100 tasks per agent per day. This allows the cron service to maintain a steady availability of new agent seats as well as non-competing task execution. Task creators will receive a specific permission level within the cron DAO, to align the task execution costs with the needs of the community.

**Phase 2**: The second phase incentivizes the onboarding of Cron task agents. As mentioned above, agents will be allowed to onboard as the amount of tasks increases. Agents will be responsible for holding enough Near token to pay for the execution of tasks, and withdrawing their rewards to recoup the costs. Early agents will be incentivized by receiving rare NFTs and swag, in a first come first serve fashion. Agents will also receive a specific permission level within the cron DAO, to align the agents needs/wants with the community as a whole. Notably, agents should not expect to gain large sums for task execution, but rather a small profit on leaving a raspberry pi running for a year.

**Phase 3**: The third phase will incentivize community growth via the Cron dao. Cron believes in a diversified decentralized runtime, which will be maintained using only DAO based actions. The DAO governs the settings of Cron, maintains the development and most importantly provides community incentives for growth. Growth can happen by community members owning task onboarding, agent onboarding, developer tutorials & examples, publishing social marketing materials and more. The DAO will not issue a token, but rather grant participants higher levels of access in the governance process. This mitigates the issues with collateral creating friction early on, and gives believers in the project the power to make it more sustainable.

## 2. Staking Profits
Cron intentionally does not incur any task fees, as a way to make task execution cost cheaper. This means that the cron DAO and ongoing development needs to be funded by philanthropy or volunteers unless there is a different business model. Each task requires some amount of deposited collateral, which will sit unused until the task execution time slot.

Cron will utilize the bulk of deposited funds for earning staked interest. Cron will maintain staked and available collateral by utilizing a cron task that calculates the forward looking needs of task executions and re-allocating or removing staked balance. The interest earned by staked balances, will be moved into a DAO controlled escrow / treasury which will be used for furthering the cron service. Staking is currently not implemented, and will require the Cron DAO to make the necessary budget to develop this feature.

## 3. Future Payments & Token Integrations
Today, Cron only accepts the native $NEAR for task creation and agent rewards. Cron believes that the growing DeFi and token space will continue to evolve and maintain coveted tokens that are in themselves of value to agents and cron. By enabling tasks to be created by any token that has native or high liquidity profile currency backing, tasks have the flexibility to be maintained by an applications native token. The token exchange rate must be provided by a DAO whitelisted DEX.

> Hey we want to support Ref.Finance → Stable swap rate for accepting and paying for tasks. Avoid fake token listings. 

Tokens backing task runtime will be used by cron potentially for earning interest in LP positions, token farming or other means of interest bearing holdings. Cron DAO will be allowed to maintain a list of tokens it will accept as reward for task execution. Token support is currently not implemented, and will require DAO to make the necessary budget to develop this feature.

