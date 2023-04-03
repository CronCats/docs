---
description: 'Examples of contracts setup with CronCat'
sidebar: 'docs'
# prev: '/docs/'
next: '/docs/example-counter/'
---

# Boolean contract caller

## Overview

Learning how to set up example contracts that get triggered externally with CronCat! The following examples are toy examples, but help demonstrate how the automation layer works and can be leveraged by end users and invoked by other smart contracts.

The best resource for CronCat examples are in this repository:
https://github.com/CronCats/cw-purrbox

## Create task from CosmWasm

Let's talk about this simple demonstration and it's components.

1. Boolean smart contract — this is one of the simplest CosmWasm smart contracts, where it contains a single state variable that holds a boolean. Anyone can call this contract and set the boolean. There is a `toggle` method that flips the boolean from false to true and vice versa.
2. Boolean contract caller — this contract schedules a CronCat task that occurs every block, whose action is to call the `toggle` method on an external boolean contract. 

Following the README in the **boolean contract caller** example, you can deploy and experiment with an existing boolean contract on Juno testnet, utilizing the CronCat contracts and agents live on that network. When instantiating the example contract, you'll provide two arguments, `croncat_factory_address` and `boolean_address`, which are the addresses to those contract.

CronCat uses a factory architecture built to handle future contract migrations and version upgrades. This means that dApps integrating with CronCat to utilize automation will simply call the Factory contract, asking for the latest version of the contract they wish to call. Practically speaking, this typically means querying the Factory, asking for the address to the latest tasks contract, which is where we'll be creating a new CronCat task.

CronCat tasks are quite powerful, having granular options to help specify the exact needs of the creator. Pay attention to the `TaskRequest` object created in the boolean contract caller example. You'll note that there are several unused fields, like the ones with a value of `None`.

```rust
let croncat_task = TaskRequest {
    interval: Interval::Block(1),
    boundary: None,
    stop_on_fail: true,
    actions: vec![Action {
        msg: Wasm(Execute { // Execute a smart contract method…
            // …that lives at this address…
            contract_addr: boolean_address.clone().to_string(),
            // …sending this message (and any parameters)
            msg: to_binary(&BooleanContractExecuteMsg::Toggle {})?,
            // No need to attach funds for "toggle" method
            funds: vec![],
        }),
        // You may fine tune gas here
        gas_limit: Some(550_000),
    }],
    queries: None, 
    transforms: None,
    cw20: None, 
};
```

### Task fields

Going over each field for this example task:

- `interval` — "Do this every 1 block, please."
- `boundary` — There's no beginning or ending boundaries, but you can define a valid window if you wish. These can be defined by block heights or by timestamps.
- `stop_on_fail` — If the contract I call fails, consider this task done, returning remaining balance to the owner.
- `actions` — We can provide multiple Actions (Cosmos messages) but only have one in the example above. For security purposes, not every Cosmos message is allowed, with new messages being added after careful scrutiny. At the time of this writing, the two Cosmos messages that are allowed are Wasm Execute and Bank messages. (See `validate_msg_calculate_usage` where this is enforced, and where updates will occur.)
- `queries` — For event-based tasks, you may provide any query and even capture the value and use it elsewhere in the task.
- `transforms` — Like queries, transforms dictate how a query value is injected into an Action or subsequent queries.
- `cw20` — Optional cw20's included in this task.

**Note**: see the [Anatomy of a Task section](/docs/task-anatomy/) for further details on these fields.

## Create task from the CLI

When we refer to the CLI, we mean the daemon for a particular network, [like `junod`](https://github.com/CosmosContracts/juno).

If you have added a key and funded the account with testnet tokens (typically using the Discord faucet bot) you may create a simple task with a CLI command. We'll demonstrate a trivial task that sends 6 testnet JUNO to a contract.

The parameters we'll send will be JSON, with this readable format:

```json
{
  "create_task": {
    "task": {
      "interval": {
        "block": 1
      },
      "boundary": null,
      "stop_on_fail": false,
      "actions": [
        {
          "msg": {
            "bank": {
              "send": {
                "to_address": "juno1yhqft6d2msmzpugdjtawsgdlwvgq3samrm5wrw",
                "amount": [
                  {
                    "amount": "6000000",
                    "denom": "ujunox"
                  }
                ]
              }
            }
          },
          "gas_limit": 75000
        }
      ],
      "queries": null,
      "transforms": null,
      "cw20": null
    }
  }
}
```

For our CLI command, we'll put the JSON onto one line, placing it after the contract address in the `tx wasm execute` command.

    junod tx wasm execute juno1p7vhw54rwd7enscj47l4e087463zwmdmh6knyw560z98q66l32pqmmunyz {"create_task":{"task":{"interval":{"block":1},"boundary":null,"stop_on_fail":false,"actions":[{"msg":{"bank":{"send":{"to_address":"juno1wu78f47qzyllz3f5a0g3443pxzq8qknqvqtr8fuumvv9d7mcfn8syl69l8","amount":[{"amount":"6000000","denom":"ujunox"}]}}},"gas_limit":75000}],"queries":null,"transforms":null,"cw20":null}}} --amount 7000000ujunox --node https://uni-rpc.reece.sh:443 --chain-id uni-6 --gas-prices 0.025ujunox --gas auto --gas-adjustment 1.3 -b block --from mike -o json -y
