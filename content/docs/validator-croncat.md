---
description: 'How to run validator & Croncat'
sidebar: 'docs'
---

# Validator + Croncat

Benefits of CronCat

Fault tolerant: Our agents scale to never go down
Decentralized: Covering many hosting providers, so you never miss a ping
Cost efficient: Less what your active validator makes in 1 epoch


## How to run validator & Croncat

Croncat is a great helper for NEAR validators too! Such a necessary and simple action as "ping" can be performed on the blockchain using Croncat ;)

### Server Requirements

|          | CHUNK ONLY PRODUCER |  |  | BLOCK PRODUCER |
| -------- | ------------------- | -- | --- | -------------- |
| CPU | 4-Core CPU with AVX support |  | CPU | 8-Core (16-Thread) Intel i7/Xeon or equivalent with AVX support |
| RAM | 8GB DDR4 | | RAM | 16GB DDR4 |
| Storage | 500GB SSD | | Storage | 500GB SSD (HDD will be enough for localnet only) |

## Mainnet

To start installing the Mainnet node, you need to install nearcore.

You can find the complete process of installing and running a node on the official website docs.near.org [Compile and Run without Container](https://docs.near.org/docs/develop/node/validator/compile-and-run-a-node)

## Testnet & Guildnet

You can use the nearup tools to install and run Testnet & Guildnet nodes. The installation process is described on the official NEAR Github [Nearup Setup](https://github.com/near/nearup)

You can also use Bootcamp, where you will find a complete guide to installing Mainnet, Testnet and Guildnet nodes [NEAR OSA Bootcamp](https://bootcamp.openshards.io/)

## Creating a Ping Task via the Web

The easiest way to create a Ping Task is via the Web version [here](https://cron.cat/create-ping). You only need to enter the pool name of your validator.

## Ping Script

After installing, configuring and running the node, you need to configure the "ping". What is it for? In order to submit stake proposals to be an active validator. You can use the ping installation script [Ping Tool](https://github.com/grodstrike/NEAR-Validator-Tools/blob/main/ping_install.sh)

### Ping Script Install

Let's install Ping Tool:

```bash
wget https://raw.githubusercontent.com/grodstrike/NEAR-Validator-Tools/main/ping_install.sh && chmod +x ping_install.sh 
```
And run: 
```bash
./ping_install.sh 
```

During the installation process, you will need to enter the name of the pool (example: jacksonPool) and the name of the account, that is, the wallet (example: jackson) and choose how the ping will be launched: via Crontab (locally) or via CronCat (via blockchain).

### Ping Manual

Let's see how to start ping manually. Ping can call by the command via NEAR Cli:

```bash
near call <POOL> ping '{}' --accountId <ACCOUNT> --gas=300000000000000
```

Example: 

```bash
near call jakson.pool.f863973.m0 ping '{}' --accountId jackson.testnet --gas=300000000000000
```

And this is how the ping task is installed in Croncat (on the Testnet network):

```bash
near call manager_v1.cron.testnet create_task '{"contract_id": "<POOL>","function_id": "ping","cadence": "0 0 * * * *","recurring": true,"deposit": "0","gas": 9000000000000}' --accountId "<ACCOUNT>" --amount 10
```
Example:

```bash
near call manager_v1.cron.testnet create_task '{"contract_id": "jakson.pool.f863973.m0","function_id": "ping","cadence": "0 0 * * * *","recurring": true,"deposit": "0","gas": 9000000000000}' --accountId "jakson.testnet" --amount 10
```

## Croncat Agent + Validator

Using the ping setup script you can also install the Croncat Agent to support decentralization and get rewards! You just need to agree with the Ping Tool suggestion during the installation process.
