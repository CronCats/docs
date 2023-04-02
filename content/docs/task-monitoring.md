---
description: 'Watch tasks in CronCat and access configuration'
sidebar: 'docs'
prev: '/docs/task-creation/'
next: '/docs/contract-integration/'
---

# Task Monitoring

There are two ways to view tasks:

* [CronCat Website](https://cron.cat/tasks)
* CLI for the network (daemons like like [`junod`](https://github.com/CosmosContracts/juno), [`starsd`](https://github.com/public-awesome/stargaze), [`osmosisd`](https://github.com/osmosis-labs/osmosis), [`neutrond`](https://github.com/neutron-org/neutron), etc.)

The website is the easiest for quickly viewing all active tasks and providing detailed information about it. You can also create tasks and get insights into the agent network.

Using the CLI, you can access a task directly, however it will require a hash of the task. You obtain the hash at the creation of each task (as noted in [task creation](/docs/task-creation)).

Once you have a task hash, and know the version of the Tasks contract you created, you can a command similar to this to retrieve the current status and other details:

```bash
junod q wasm contract-state smart juno1g4xg47yzytu79hslsw2wlw0r6sz5unpf4ln3jjjlg7rfy2nl9n7s9a52n7 '{"task":{"task_hash":"juno:564d9acab76c256659634415d14625812103bc8e87308c5c3c290045e17"}}'
```

It will return a [`TaskResponse`](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskResponse.html) with the primary field `task` which is the [struct `TaskInfo`](https://docs.rs/croncat-sdk-tasks/latest/croncat_sdk_tasks/types/struct.TaskInfo.html). The result contains these details about the task:

```json
{
  "data": {
    "task": {
      "task_hash": "juno:564d9acab76c256659634415d14625812103bc8e87308c5c3c290045e17",
      "owner_addr": "juno16alw9278y9pgl9uwwwp79vfrz5jk7raexgvmw9rfqyr8m894yulq99tqhn",
      "interval": {
        "block": 1
      },
      "boundary": {
        "height": {
          "start": null,
          "end": null
        }
      },
      "stop_on_fail": true,
      "amount_for_one_task": {
        "cw20": null,
        "coin": [
          null,
          null
        ],
        "gas": 850000,
        "agent_fee": 5,
        "treasury_fee": 5,
        "gas_price": {
          "numerator": 4,
          "denominator": 100,
          "gas_adjustment_numerator": 150
        }
      },
      "actions": [
        {
          "msg": {
            "wasm": {
              "execute": {
                "contract_addr": "juno1u54ndscjm8887h97sk8punnwfutg2auu759efc5568l6zt70selqfe3jc9",
                "msg": "eyJ0b2dnbGUiOnt9fQ==",
                "funds": []
              }
            }
          },
          "gas_limit": 550000
        }
      ],
      "queries": null,
      "transforms": [],
      "version": "0.1"
    }
  }
}
```
