---
description: 'Examples of contracts setup with croncat'
sidebar: 'docs'
# prev: '/docs/'
next: '/docs/example-counter'
---

# Examples

Learning how to setup example contracts that get triggered externally with croncat! The following examples are simple code, not meant for production (the contracts themselves), but the cron task parameters and cron tasks are all ready for production.

## Example 1: Counter

Increase or decrease an integer every 30 minutes with croncat! This example shows how a task can have recurring execution and you can view state that is changing over time (the count increases!).

[Start Example](/docs/example-counter)

## Example 2: Multi-Transfer "Charity"

Trigger a one time transaction in the future (4 hours later). This example shows how to setup a multi-send transfer to multiple recipients, which is useful when a doing transfers that span tens-to-thousands of transfers immediately. The example doesnt use pagination, but it is intended to show the bare setup of a multi-transfer contract.

[Start Example](/docs/example-charity)