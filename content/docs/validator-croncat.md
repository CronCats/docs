---
description: 'How to run validator & Croncat'
sidebar: 'docs'
---

# Validator + Croncat

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

Let's see how to do it manually. Installation of Croncat Agent is described at the link [Croncat Agent Install](https://docs.cron.cat/docs/agent-cli/) But we will make the launch of Croncat Agent more convenient - through service! This will allow you to conveniently view the logs, start and stop the croncat agent via systemctl.

Let's create a service file:

```bash
mkdir ~/.croncat
nano croncat.service
```

And add to the file:

```[Unit]
Description=CronCat Agent
After=multi-user.target

[Service]
Type=simple
Restart=always
RestartSec=60
ExecStart=/usr/bin/croncat go <ACCOUNT> 
StandardOutput=append:/var/log/croncat.log
StandardError=append:/var/log/croncaterror.log

[Install]
WantedBy=multi-user.target
```

<ACCOUNT> must be replaced with your wallet name (example: agent-007.testnet)

Let's add a new croncat.service to the service:
  
```bash 
sudo systemctl link ~/.croncat/croncat.service
sudo systemctl daemon-reload
```
  
And launch the Croncat Agent:
```bash
sudo systemctl start croncat.service
```
## Croncat Agents Logs  

Journal: 
```bash
journalctl -f -u croncat.service
```
  
Croncat Agent logs can be found here:

```bash
tail -f /var/log/croncat.log
```
  
The error logs can be found here:

  ```bash
tail -f /var/log/croncaterror.log
```
