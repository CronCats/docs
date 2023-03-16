---
description: 'Watch tasks in croncat and access configuration'
sidebar: 'docs'
prev: '/docs/task-creation/'
next: '/docs/contract-integration/'
---

# Task Monitoring

There are two ways to view tasks:

* [CronCat Website](https://cron.cat/tasks)
* CronCat CLI

The website is the easiest for quickly viewing all active tasks, however not as helpful for understanding your task directly.

Using the CLI, you can access a task directly, however it will require a hash of the task. You obtain the hash at the creation of each task (as noted in [task creation](/docs/task-creation)).

Once you have a task hash, you can use the following command to retrieve the current status and other configurations:

```bash
croncat task r2JvrGPvDkFUuqdF4x1+L93aYKGmgp4GqXT4UAK3AE4=
```

This is just a shortcut for the method available using NEAR CLI as well:

```bash
near view manager_v1.croncat.testnet get_task '{"task_hash": "r2JvrGPvDkFUuqdF4x1+L93aYKGmgp4GqXT4UAK3AE4="}'
```
