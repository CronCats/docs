---
description: 'Actively maintained contracts by network'
sidebar: 'docs'
---

# Deployed Contracts

Here are the deployed contracts on each network supporting CronCat:

## Juno

#### Factory

| Network | Contract address                                                  |
|----|-------------------------------------------------------------------|
| Mainnet | `juno16tzc6krytqxd7350ja4xqvzy522r3737fyaqm5xxn9n5damncx9qt884hn` |
| Testnet | `juno1n7gsa2zf2qsa0rl526pqc6v2ljq45qw5df9tfm26fdm76tupv0fq38xpan` |

#### Query latest contracts

Testnet

    junod q wasm contract-state smart juno124vcmqsukhmuy6psm45a2tdg5354rnemdetqhjt72ynju666gf0qpxmlxz '{"latest_contracts":{}}' --node https://uni-rpc.reece.sh:443 --chain-id uni-6

## Neutron

#### Factory

| Network          | Contract address                                                     |
|------------------|----------------------------------------------------------------------|
| Mainnet          | Soon™                                                                |
| Testnet (pion-1) | `neutron1sc3r0m8zxw34jfg5xtym8tuxg38n2efuazap8nzmcgrjfampc0vqp0lg55` |

#### Query latest contracts

Testnet 

    neutrond q wasm contract-state smart neutron1sc3r0m8zxw34jfg5xtym8tuxg38n2efuazap8nzmcgrjfampc0vqp0lg55 '{"latest_contracts":{}}' --node https://rpc-palvus.pion-1.ntrn.tech:443 --chain-id pion-1

## Osmosis

#### Factory

| Network     | Contract address |
|-------------|------------------|
| Mainnet     | Soon™            |
| Testnet (osmo-test-5) | `osmo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvlx82r` |

**Note**: at the time of this writing, the latest contracts are not on Osmosis testnet yet, as we wait for a deployment of [`chain-registry`](https://www.npmjs.com/package/chain-registry). Will be up soon!

#### Query latest contracts

Testnet

    osmosisd q wasm contract-state smart osmo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvlx82r '{"latest_contracts":{}}' --node https://rpc.osmotest5.osmosis.zone:443 --chain-id osmo-test-5

## Stargaze

#### Factory

| Network | Contract address                                                                                                     |
|----|----------------------------------------------------------------------------------------------------------------------|
| Mainnet | Soon™                                                                                                                |
| Testnet | `stars1kauk24v3wkyy64kc7jn0r3ys0zqy9dxqvmy6ul76z7405ur2y9lq90yd8d` |

#### Query latest contracts

Testnet

    starsd q wasm contract-state smart stars1kauk24v3wkyy64kc7jn0r3ys0zqy9dxqvmy6ul76z7405ur2y9lq90yd8d '{"latest_contracts":{}}' --node https://rpc.elgafar-1.stargaze-apis.com:443 --chain-id elgafar-1

## Archway

#### Factory

| Network    | Contract address                                                                                    |
|------------|-----------------------------------------------------------------------------------------------------|
| Mainnet    | Soon™ |
| Testnet (constantine-2) | `archway1fz8wlm2sygmf5zzg47xeznsmljyz0pkxefuugr44lyt58l2uertqnh87ts` |

#### Query latest contracts

Testnet

    archwayd q wasm contract-state smart archway1fz8wlm2sygmf5zzg47xeznsmljyz0pkxefuugr44lyt58l2uertqnh87ts '{"latest_contracts":{}}' --node https://rpc.constantine-2.archway.tech:443 --chain-id constantine-2
