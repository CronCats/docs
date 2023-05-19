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
| Testnet | `juno17dlsh3wx4n0j87pw3nt87745t4vz2rxuyxlfnn4qy46k8yatvd7qzs788d` |

#### Query latest contracts

Testnet

    junod q wasm contract-state smart juno17dlsh3wx4n0j87pw3nt87745t4vz2rxuyxlfnn4qy46k8yatvd7qzs788d '{"latest_contracts":{}}' --node https://uni-rpc.reece.sh:443 --chain-id uni-6

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
| Testnet (osmo-test-5) | `osmo12r3fm9rdhae5v68pn6dju39y4tp3qd5mwaqcku9een8fnm2pjv0sa0n4gm` |

**Note**: at the time of this writing, the latest contracts are not on Osmosis testnet yet, as we wait for a deployment of [`chain-registry`](https://www.npmjs.com/package/chain-registry). Will be up soon!

#### Query latest contracts

Testnet

    osmosisd q wasm contract-state smart osmo12r3fm9rdhae5v68pn6dju39y4tp3qd5mwaqcku9een8fnm2pjv0sa0n4gm '{"latest_contracts":{}}' --node https://rpc.osmotest5.osmosis.zone:443 --chain-id osmo-test-5

## Stargaze

#### Factory

| Network | Contract address                                                                                                     |
|----|----------------------------------------------------------------------------------------------------------------------|
| Mainnet | Soon™                                                                                                                |
| Testnet | `stars1vxd9a2w4taqlv5cfjnqpqhwtl9va8k0jgs5u35s3g4cxhy44zv5q3upvx5` |

#### Query latest contracts

Testnet

    starsd q wasm contract-state smart stars1vxd9a2w4taqlv5cfjnqpqhwtl9va8k0jgs5u35s3g4cxhy44zv5q3upvx5 '{"latest_contracts":{}}' --node https://rpc.elgafar-1.stargaze-apis.com:443 --chain-id elgafar-1

## Archway

#### Factory

| Network    | Contract address                                                                                    |
|------------|-----------------------------------------------------------------------------------------------------|
| Mainnet    | Soon™ |
| Testnet (constantine-2) | `archway1fz8wlm2sygmf5zzg47xeznsmljyz0pkxefuugr44lyt58l2uertqnh87ts` |

#### Query latest contracts

Testnet

    archwayd q wasm contract-state smart archway1fz8wlm2sygmf5zzg47xeznsmljyz0pkxefuugr44lyt58l2uertqnh87ts '{"latest_contracts":{}}' --node https://rpc.constantine-2.archway.tech:443 --chain-id constantine-2
