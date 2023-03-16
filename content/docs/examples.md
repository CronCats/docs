---
description: 'Examples of contracts setup with CronCat'
sidebar: 'docs'
# prev: '/docs/'
next: '/docs/example-counter/'
---

# Examples

Learning how to set up example contracts that get triggered externally with CronCat! The following examples are simple code, not meant for production (the contracts themselves), but the cron task parameters and cron tasks are all ready for production.

**Note**: the examples listed below are for smart contracts on NEAR Protocol. This page will be updated with Cosmos examples as the codebase matures. Soon™.

## Example 1: Counter

Increase or decrease an integer every 30 minutes with CronCat! This example shows how a task can have recurring execution, and you can view state that is changing over time (the count increases!).

[Start Example](/docs/example-counter)

## Example 2: Multi-Transfer "Charity"

Trigger a one time transaction in the future (4 hours later). This example shows how to set up a multi-send transfer to multiple recipients, which is useful when doing transfers that span tens-to-thousands of transfers immediately. The example doesn't use pagination, but it is intended to show the bare setup of a multi-transfer contract.

[Start Example](/docs/example-charity)

## Example 3: On-Chain Indexer

This example shows how to set up a cross-contract implementation with CronCat. The demo functionality shows an on-chain indexing of balances in a time series format. This contract allows scheduling, updating, removing & checking status.

[Start Example](/docs/example-indexer)
