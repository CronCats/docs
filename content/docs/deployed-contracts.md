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
| Mainnet | `juno10dtfwf3gtspz9ts0rpqslf4yx65rdr8j3wk33y87h92m43a5pt8qmfusxx` |
| Testnet | `juno1mc4wfy9unvy2mwx7dskjqhh6v7qta3vqsxmkayclg4c2jude76es0jcp38` |

#### Query latest contracts

Mainnet

    junod q wasm contract-state smart juno10dtfwf3gtspz9ts0rpqslf4yx65rdr8j3wk33y87h92m43a5pt8qmfusxx '{"latest_contracts":{}}' --node https://juno-rpc.polkachu.com:443 --chain-id juno-1

Testnet

    junod q wasm contract-state smart juno1mc4wfy9unvy2mwx7dskjqhh6v7qta3vqsxmkayclg4c2jude76es0jcp38 '{"latest_contracts":{}}' --node https://uni-rpc.reece.sh:443 --chain-id uni-6

## Neutron

#### Factory

| Network          | Contract address                                                     |
|------------------|----------------------------------------------------------------------|
| Mainnet          | Soon™                                                                |
| Testnet (pion-1) | `neutron1qdmeqpzlha2lgw7w90up895fu3a8p3g0gnfvd9yj04ks9z9p305qtpkxdt` |

#### Query latest contracts

Testnet 

    neutrond q wasm contract-state smart neutron1qdmeqpzlha2lgw7w90up895fu3a8p3g0gnfvd9yj04ks9z9p305qtpkxdt '{"latest_contracts":{}}' --node https://rpc-palvus.pion-1.ntrn.tech:443 --chain-id pion-1

## Osmosis

#### Factory

| Network     | Contract address |
|-------------|------------------|
| Mainnet     | `osmo14yjyt057saxauzc7scc5e0qce7c2dmeuzuhgsul0lnyy25xtz7ksxfzf07`            |
| Testnet (osmo-test-5) | `osmo105qu7ajcf9y5wgpj7kcqj2rmj6zn6d9ernw99efua7834xprvwkq3hfhaz` |

**Note**: at the time of this writing, the latest contracts are not on Osmosis testnet yet, as we wait for a deployment of [`chain-registry`](https://www.npmjs.com/package/chain-registry). Will be up soon!

#### Query latest contracts

Mainnet

    osmosisd q wasm contract-state smart osmo14yjyt057saxauzc7scc5e0qce7c2dmeuzuhgsul0lnyy25xtz7ksxfzf07 '{"latest_contracts":{}}' --node https://rpc.osmosis.zone:443 --chain-id osmosis-1

Testnet

    osmosisd q wasm contract-state smart osmo105qu7ajcf9y5wgpj7kcqj2rmj6zn6d9ernw99efua7834xprvwkq3hfhaz '{"latest_contracts":{}}' --node https://rpc.osmotest5.osmosis.zone:443 --chain-id osmo-test-5

## Stargaze

#### Factory

| Network | Contract address                                                                                                     |
|----|----------------------------------------------------------------------------------------------------------------------|
| Mainnet | `stars10sgfde78kwhs4y45fh3w72qjt3f8tak0pck0hntm89wrmd223prsegggcg` |
| Testnet | `stars1vxd9a2w4taqlv5cfjnqpqhwtl9va8k0jgs5u35s3g4cxhy44zv5q3upvx5` |

#### Query latest contracts

Mainnet

    starsd q wasm contract-state smart stars10sgfde78kwhs4y45fh3w72qjt3f8tak0pck0hntm89wrmd223prsegggcg '{"latest_contracts":{}}' --node https://rpc.stargaze-apis.com:443 --chain-id stargaze-1

Testnet

    starsd q wasm contract-state smart stars1vxd9a2w4taqlv5cfjnqpqhwtl9va8k0jgs5u35s3g4cxhy44zv5q3upvx5 '{"latest_contracts":{}}' --node https://rpc.elgafar-1.stargaze-apis.com:443 --chain-id elgafar-1

<!--
## Archway

#### Factory

| Network    | Contract address                                                                                    |
|------------|-----------------------------------------------------------------------------------------------------|
| Mainnet    | Soon™ |
| Testnet (constantine-2) | `archway1fz8wlm2sygmf5zzg47xeznsmljyz0pkxefuugr44lyt58l2uertqnh87ts` |

#### Query latest contracts

Testnet

    archwayd q wasm contract-state smart archway1fz8wlm2sygmf5zzg47xeznsmljyz0pkxefuugr44lyt58l2uertqnh87ts '{"latest_contracts":{}}' --node https://rpc.constantine-2.archway.tech:443 --chain-id constantine-2
-->
