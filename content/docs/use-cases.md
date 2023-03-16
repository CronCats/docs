---
description: 'Sample use cases for how CronCat can be utilized'
sidebar: 'docs'
prev: '/docs/'
next: '/docs/values-vision/'
---

# Use Cases

## Contract Subscription Payments

Most SaaS business models rely on subscription based payments to provide a profitable service. Subscription models usually prompt the customer to accept terms where they will get charged some amount recurring over some time period. At the end of each period, the customer is charged the agreed upon amount based on a standard amount or based on usage.

**Example:**

SaaS Business **Beets Baskets** provides a monthly subscription to receive a digitally rare Beet vegetable and has a token **$ShruteBux** that users buy to be a part of this product. Each month, if the user has enough funds, they are sent a digitally unique Beet and some amount of **$ShruteBux** needs to be paid.

**Without CronCat**

SaaS business needs to notify each user to send a payment, similar to an invoice, before they receive that months product. This works only if the user follows through and submits the transaction. If the user forgets, the SaaS business loses future interactions & benefit from ongoing usage.

**With CronCat**

SaaS business sets up a function in their **DnaDwight** contract, that is called every month to compute active users that should be charged and change the users balance (or claim some amount of another token). This allows the SaaS business contract to enforce the subscription terms agreed upon when the user signed up to the service, and the user can then cancel at a future time.

## Auctions & Prediction Markets

To finalize on chain outcomes requires one or several parties to compute the final state of data. Without finalizing an auction, assets are locked until some action is completed. Without finalizing a prediction set, participants cannot claim any won rewards.

**Without CronCat**

Participants need to spend transaction fees to finalize the outcome of auctions/predictions, which can be costly depending on the outcome logic of the contract. This is especially not good for outcomes where the fees are more expensive than the outcome / rewards / assets.

**With CronCat**

In most cases, auctions & prediction markets have a deadline or finalization criteria. Cron can be used to trigger a "finalization" function which enables all participants to know the outcome upon deadline completion without any participant action required. An auction winner would receive assets, and auction losers would regain locked funds. Prediction market winners would receive all rewards without having to request via transaction.

## Rebasing tokens

Stable token economics are difficult to achieve. One way to create a "market stabilizing" effect, is to mint/burn token supply relative to the amount of circulating supply needed by demand. A live example is [Ampleforth](https://www.ampleforth.org/).

**Without CronCat**

The rebase token owner needs to total the supply needed each day based on demand and submit a transaction to mint or burn tokens to change total supply. In some cases, adjustments also need to be made for token holders. This update is submitted by an external party that has ownership over the contract -- which infers that any amount of tokens can be minted/burned to some extent outside of user expectations.

**With CronCat**

Token rebase can occur every block, epoch, day, month -- the contract can update supply autonomously, trustlessly, based on contract logic alone. This allows the contract itself to be autonomous, without ownership, so all economic adjustments can meet user expectations.

## Voting & Governance

Decentralized Autonomous Organizations (DAOs) are becoming well known for their ability to coordinate community incentivized activity. A few good examples are: [MakerDao](https://makerdao.com/en/), [Aragon](https://aragon.org/), [MetaCartel](https://www.metacartel.org/ecosystem), [DAO Stack](https://daostack.io/).

**Without CronCat**

Finalizing vote outcomes and governance proposals requires a DAO admin to send a transaction to execute the update. This inherently requires the entire DAO community to trust a single or few individuals to finalize outcomes. Depending on the DAO structure & economics, this could be related to a large amount of assets allocation & usage.

**With CronCat**

Voting and governance outcomes can be finalized upon the ending of a deadline; tallying the votes and storing final totals in contract storage, acknoledging proposal participation and allocating any resources needed by proposal submission requirements approved/denied by DAO community.

## Triggers & IFTTT Style Contracts

Decentralized Finance has been compared to Legos, where contracts can be built upon other contract's features, creating a larger functionality with less duplication. The great thing is when contract functionality can be triggered autonomously when something changes on-chain in another contract. [Gelato.network](https://gelato.network/) and [EPNS](https://epns.io/) are good examples.

**With CronCat**

A user can create a contract with periodic checks on other contracts/logic. Developers could also create contracts with general purpose functionality users can subscribe to get triggered with Cron, based on their own custom timing requirements. Cron is flexible enough to handle many triggering parameters.

## Contract Storage Reclaiming/Garbage Collection

Near blockchain has a unique mechanism for allowing contracts to remove state and reclaim valuable storage, which in turn is cheaper for the contract to cover ongoing storage cost.

**With CronCat**

Contracts could utilize Cron to schedule regular cleanup state tasks, that help the contract stay economically stable. More state is more expensive, putting the users at risk for carrying this burden over time. Cron gives contracts the ability to maintain the amount of state it can afford.

## Rewards & Staking

Near blockchain staking contracts and many DeFi token platforms (Uniswap, Aave, etc) utilize staking tokens to help encourage economic stability and growth. In most cases, the user is responsible to taking the action to remove, update, or manage their staked tokens. For each interaction the user is required to pay a transaction fee to do simple things like re-staking. This does not encourage more usage, and could be done by the contract for all active users.

**With CronCat**

The contract could automatically compute active stake amounts, distribute rewards, enable compounding functionality to balances, reward small-time stakers by handling the transaction fees during a bulk re-compute event.

## State Channel Watchtower

Similar to voting, Dispute / Resolution features of a state channel require an external party to validate submitted data against a set of rules. State channel rules can live within a contract that is used by state channel participants.

**With CronCat**

Upon each state channel chain update (snapshot or close), the state & transaction rollup gets added to the chain. Cron could be used to periodically confirm state channel updates, run rules to test for disputes and run resolution logic.

## Further Possibilities

The use cases seem endless for cron, when there is some functionality that needs execution beyond the context of a single transactions maximum execution threshold (which is limited econmically by gas). We would love to see what you can come up with that utilizes Near Cron!

