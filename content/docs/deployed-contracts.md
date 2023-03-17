---
description: 'Actively maintained contracts by network'
sidebar: 'docs'
prev: '/docs/values-vision/'
---

# Deployed Contracts

Here are the deployed contracts on each network supporting CronCat:

## Neutron

#### Factory

| Network | Contract address                                                     |
|----|----------------------------------------------------------------------|
| Mainnet | Soon™                                                                |
| Testnet | `neutron1wr6vc3g4caz9aclgjacxewr0pjlre9wl2uhq73rp8mawwmqaczsq5smp3h` |

#### Query latest contracts

Testnet 

    neutrond q wasm contract-state smart neutron1wr6vc3g4caz9aclgjacxewr0pjlre9wl2uhq73rp8mawwmqaczsq5smp3h '{"latest_contracts":{}}' --node https://rpc.baryon.ntrn.info:443 --chain-id baryon-1

## Juno

#### Factory

| Network | Contract address                                                  |
|----|-------------------------------------------------------------------|
| Mainnet | Soon™                                                             |
| Testnet | `juno16ze0ve5q5z0wd4n5yp2kayeqn5el0tzklpafj7zjjchfh93x4wfsa8fxur` |

#### Query latest contracts

Testnet

    junod q wasm contract-state smart juno16ze0ve5q5z0wd4n5yp2kayeqn5el0tzklpafj7zjjchfh93x4wfsa8fxur '{"latest_contracts":{}}' --node https://rpc.uni.junonetwork.io:443 --chain-id uni-6

## Osmosis

#### Factory

| Network | Contract address |
|----|------------------|
| Mainnet | Soon™            |
| Testnet | Needs and update |

**Note**: at the time of this writing, the latest contracts are not on Osmosis testnet yet, as we wait for a deployment of [`chain-registry`](https://www.npmjs.com/package/chain-registry). Will be up soon!

<!--

When chain-registry is up to date, we can uncomment this block

#### Query latest contracts

Testnet

    osmosisd q wasm contract-state smart osmo1newaddress '{"latest_contracts":{}}' --node https://rpc.testnet.osmosis.zone:443 --chain-id osmo-test-4

-->

## Stargaze

#### Factory

| Network | Contract address                                                                                                     |
|----|----------------------------------------------------------------------------------------------------------------------|
| Mainnet | Soon™                                                                                                                |
| Testnet | `stars1pv0kwa05gmnydwy45dvngxvasea0cz603whhcuufqgrlrgclx9eq535p5f` |

#### Query latest contracts

Testnet

    starsd q wasm contract-state smart stars1pv0kwa05gmnydwy45dvngxvasea0cz603whhcuufqgrlrgclx9eq535p5f '{"latest_contracts":{}}' --node https://rpc.elgafar-1.stargaze-apis.com:443 --chain-id elgafar-1

## Archway

#### Factory

| Network | Contract address                                                                                    |
|----|-----------------------------------------------------------------------------------------------------|
| Mainnet | Soon™ |
| Testnet | `archway1g8s22s8mkgtu8p7zpy3lrmjl09jj76wkgl8c0xmt4hm7jc9vwq9qhk6u3t` |

#### Query latest contracts

Testnet

    archwayd q wasm contract-state smart archway1g8s22s8mkgtu8p7zpy3lrmjl09jj76wkgl8c0xmt4hm7jc9vwq9qhk6u3t '{"latest_contracts":{}}' --node https://rpc.constantine-1.archway.tech:443 --chain-id constantine-1
