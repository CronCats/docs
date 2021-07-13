---
description: 'A demo of how to setup a cron task for the multi-transaction charity example'
sidebar: 'docs'
prev: '/docs/examples'
next: '/docs/example-charity'
---

# Example: Multi-Transfer "Charity"

[View Full Source](https://github.com/Cron-Near/contracts/tree/main/examples/charity)

Trigger a one time transaction in the future (4 hours later). This example shows how to setup a multi-send transfer to multiple recipients, which is useful when a doing transfers that span tens-to-thousands of transfers immediately. The example doesnt use pagination, but it is intended to show the bare setup of a multi-transfer contract.

## Contract Source Example

Here's a non-exhaustive view of the contract we will be using:

```rust
pub enum StorageKeys {
    Accounts,
}

pub struct Donations {
    beneficiaries: UnorderedSet<AccountId>,
    total: u128,
    paid: u128,
}

#[near_bindgen]
impl Donations {
    #[init]
    pub fn new() -> Self {
        Donations {
            beneficiaries: UnorderedSet::new(StorageKeys::Accounts),
            total: 0,
            paid: 0,
        }
    }

    pub fn add_account(&mut self, account_id: AccountId) {
        self.beneficiaries.insert(&account_id);
    }

    pub fn remove_account(&mut self, account_id: AccountId) {
        self.beneficiaries.remove(&account_id);
    }

    #[payable]
    pub fn donate(&mut self) {
        assert!(self.beneficiaries.len() > 0, "No beneficiaries");
        assert!(
            env::attached_deposit() > 0,
            "Must include amount to be paid to all beneficiaries"
        );
        assert!(
            env::attached_deposit() / u128::from(self.beneficiaries.len()) > 1_000_000_000,
            "Minimum amount not met to cover transfers"
        );
        let donation = env::attached_deposit() / u128::from(self.beneficiaries.len());

        // update stats
        self.paid += env::attached_deposit();

        // loop and transfer funds to each account
        for acct in self.beneficiaries.iter() {
            Promise::new(acct).transfer(donation);
            self.total += 1;
        }
    }
}
```

As you can see, there are 2 main functions:

#### Increment

Increase the integer in storage by 1

#### Decrement

Decrease the integer in storage by 1

## Cron Task Creation

Using this example, we will assume that this contract is deployed at [counter.in.testnet](https://explorer.testnet.near.org/accounts/counter.in.testnet).

We can test that the contract works, but doing:

```bash
near view counter.in.testnet get_num
```

The response shows something like: 

```
View call: counter.in.testnet.get_num()
225
```

Okay, we know the starting point of our counter "225" (yours might be different), now we can configure a cron task that will execute every 5 minutes for ~10 times using the following command:

```bash
near call cron.in.testnet create_task '{"contract_id": "counter.in.testnet","function_id": "increment","cadence": "* */5 * * * *","recurring": true,"deposit": 0,"gas": 2400000000000}' --accountId YOUR_ACCOUNT.testnet --amount 2
```

You will notice three important things:
1. contract_id - the contract we want to call
2. function_id - the code we want to execute
3. cadence - the timing of the contract execution

TODO: FINISH!!!!!!!!!!!