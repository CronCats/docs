---
description: 'Actively maintained contracts by network'
sidebar: 'docs'
---

# Deployed Contracts

Here are the deployed contracts on each network supporting CronCat:

<!-- This section intentionally commented out until we resolve an FFI error currently under investigation by the Neutron team.
## Neutron

#### Factory

| Network | Contract address                                                     |
|----|----------------------------------------------------------------------|
| Mainnet | Soon™                                                                |
| Testnet | `neutron1wr6vc3g4caz9aclgjacxewr0pjlre9wl2uhq73rp8mawwmqaczsq5smp3h` |

#### Query latest contracts

Testnet 

    neutrond q wasm contract-state smart neutron1wr6vc3g4caz9aclgjacxewr0pjlre9wl2uhq73rp8mawwmqaczsq5smp3h '{"latest_contracts":{}}' --node https://rpc.baryon.ntrn.info:443 --chain-id baryon-1

-->

## Juno

#### Factory

| Network | Contract address                                                  |
|----|-------------------------------------------------------------------|
| Mainnet | Soon™                                                             |
| Testnet | `juno1qzkcegjce9ezy5afs043r8kdf50lkugcgdxqgp4a902mayefssws5n5ydu` |

#### Query latest contracts

Testnet

    junod q wasm contract-state smart juno1qzkcegjce9ezy5afs043r8kdf50lkugcgdxqgp4a902mayefssws5n5ydu '{"latest_contracts":{}}' --node https://uni-rpc.reece.sh:443 --chain-id uni-6

## Osmosis

#### Factory

| Network | Contract address |
|----|------------------|
| Mainnet | Soon™            |
| Testnet | `osmo1lg4yl42z56g8fw7j33ep29x5rmh5qyaeu03kyhvjtj4scyz8tvwsdtju04` |

**Note**: at the time of this writing, the latest contracts are not on Osmosis testnet yet, as we wait for a deployment of [`chain-registry`](https://www.npmjs.com/package/chain-registry). Will be up soon!

#### Query latest contracts

Testnet

    osmosisd q wasm contract-state smart osmo1lg4yl42z56g8fw7j33ep29x5rmh5qyaeu03kyhvjtj4scyz8tvwsdtju04 '{"latest_contracts":{}}' --node https://rpc.testnet.osmosis.zone:443 --chain-id osmo-test-4

## Stargaze

#### Factory

| Network | Contract address                                                                                                     |
|----|----------------------------------------------------------------------------------------------------------------------|
| Mainnet | Soon™                                                                                                                |
| Testnet | `stars1ahejlx0g8cz90a4jzcd8znmtrzncfrt0ckexrhtztmfcqm3nk4tsmunwn7` |

#### Query latest contracts

Testnet

    starsd q wasm contract-state smart stars1ahejlx0g8cz90a4jzcd8znmtrzncfrt0ckexrhtztmfcqm3nk4tsmunwn7 '{"latest_contracts":{}}' --node https://rpc.elgafar-1.stargaze-apis.com:443 --chain-id elgafar-1

<!-- There's currently an issue using the deploy scripts with Archway, tracked here:
https://github.com/CronCats/cw-croncat/issues/393

Once this is resolved we can uncomment this section and these contextual notes.

## Archway

#### Factory

| Network | Contract address                                                                                    |
|----|-----------------------------------------------------------------------------------------------------|
| Mainnet | Soon™ |
| Testnet | `archway1g8s22s8mkgtu8p7zpy3lrmjl09jj76wkgl8c0xmt4hm7jc9vwq9qhk6u3t` |

#### Query latest contracts

Testnet

    archwayd q wasm contract-state smart archway1g8s22s8mkgtu8p7zpy3lrmjl09jj76wkgl8c0xmt4hm7jc9vwq9qhk6u3t '{"latest_contracts":{}}' --node https://rpc.constantine-1.archway.tech:443 --chain-id constantine-1

-->
