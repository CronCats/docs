---
description: 'Croncat Agent Changelog'
sidebar: 'docs'
prev: '/docs/pre-reqs-agent/'
next: '/docs/agent-cli/'
---

# Agent Changelog

## 1.6.4. Daemon Helper, Process Updates

Updates:
Daemon now reports the CLI commands for finishing install
Added more process exits to allow better handling of auto-restart

[Release](https://github.com/Cron-Near/croncat/releases/tag/1.6.4)

## 1.6.3. CLI Features & Config

Updates:
- Added new CLI command croncat daemon, see README.md for details
- Added configurations for RPCs, see README.md for details
- Fixed slack provider for .env variables

[Release](https://github.com/Cron-Near/croncat/releases/tag/1.6.3)

## 1.6.1. RPC Error Handling

Issues with RPC connections on testnet and guildnet continue, covering more cases for errors happening.

[Release](https://github.com/Cron-Near/croncat/releases/tag/1.6.1)

## 1.6.0. Stability, Typos & UX

### Patch Release

Bugs:
- #24 Which caused crashing on intermittent RPC data
- #17 RPC Issues

Cleanup
- #23 Added more details to status, thank you @bentleybm
- #21 typo
- #20 typo
- #18 Optional params for when .env is used

[Release](https://github.com/Cron-Near/croncat/releases/tag/1.6.0)

## 1.5.2. Croncat CLI

Added the following Features:

- Configuration updates in .env file! You can now specify to allow Beta Features (more on that soon), failover RPCs, and more.
- Logging Update: Added Network information so you know which network the agent is actually on.
