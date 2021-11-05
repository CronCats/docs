---
description: 'A demo of how to setup a cron task for the multi-transaction charity example'
sidebar: 'docs'
prev: '/docs/examples/'
next: '/docs/example-indexer/'
---

# Example: Multi-Transfer "Charity"

[View Full Source](https://github.com/Cron-Near/contracts/tree/main/examples/charity)

This example shows how to setup a multi-send transfer to multiple recipients, which is useful when a doing transfers that span tens-to-thousands of transfers immediately. The example doesnt use pagination, but it is intended to show the bare setup of a multi-transfer contract.

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

As you can see, there are 3 main functions:

#### Add / Remove Account

Update a list of accounts to split payments across.

#### Donate

Transfer funds equally to all accounts within a beneficiary list

## Cron Task Creation

Using this example, we will assume that this contract is deployed at [charity.in.testnet](https://explorer.testnet.near.org/accounts/charity.in.testnet).

We can configure a cron task that will execute every 1 minutes for ~50 times using the following command:

```bash
near call cron.in.testnet create_task '{"contract_id": "charity.in.testnet","function_id": "donate","cadence": "* */1 * * * *","recurring": true,"deposit": 2,"gas": 2400000000000}' --accountId YOUR_ACCOUNT.testnet --amount 200
```

You will notice three important things:
1. contract_id - the contract we want to call
2. function_id - the code we want to execute
3. cadence - the timing of the contract execution

[View full task creation details here](/docs/task-creation)

Now that the task has been registered with the cron manager, the task will now be triggered/executed by the croncat agents at the scheduled time! 

**Hooray!**

At this point, you can manage your task by:

* [Monitoring](/docs/task-monitoring)
* [Update Task](/docs/task-creation)
