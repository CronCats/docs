---
description: 'A demo of how to setup a cron task for the multi-transaction airdrop example'
sidebar: 'docs'
prev: '/docs/examples/'
next: '/docs/example-indexer/'
---

# Example: Airdrops

[View Full Source](https://github.com/Cron-Near/contracts/tree/main/examples/airdrop)

This example shows how to setup a contract with Airdrop capabilities. In short, an "airdrop" is any piece of code that can iterate through a list of accounts and do some action. This example shows how to make a function that can be called many times to paginate through a list of accounts and make transfers of different types. 

While this airdrop example shows the possibilities of unlimited list sizes, it should be noted that there are real costs with making transfers on chain. This example is to show how to make large sets of tasks happen with a trustless setup.

### Who needs to Airdrop?

Here's a few examples of why you would want to airdrop:

1. You just launched an NFT collection and want to distribute 1000 NFT copies to your loyal followers.
2. You created a token "$RAD" and want to distribute some amount of $RAD to your community based on their help.
3. You want to gift $NEAR to your friends and family on a weekly basis, because thats how nice you are.

In all of these scenarios, you need CronCat to help airdrop! CronCat will take care of making the transactions happen, so you do not need to script tons of calls to the blockchain.

## Contract Source Example

Here's a non-exhaustive view of the contract we will be using:

```rust
pub enum StorageKeys {
    Accounts,
}

pub struct Airdrop {
    accounts: UnorderedSet<AccountId>,
    index: u128,
    page_size: u128,

    // FT & NFT:
    ft_account: AccountId,
    nft_account: AccountId,
}

#[near_bindgen]
impl Airdrop {
    #[init]
    pub fn new(
        ft_account_id: Option<ValidAccountId>,
        nft_account_id: Option<ValidAccountId>,
    ) -> Self {
        let default_ft_account =
            ValidAccountId::try_from(env::current_account_id().as_str()).unwrap();
        let default_nft_account =
            ValidAccountId::try_from(env::current_account_id().as_str()).unwrap();
        Airdrop {
            accounts: UnorderedSet::new(StorageKeys::Accounts),
            index: 0,
            page_size: PAGINATION_SIZE,
            ft_account: ft_account_id.unwrap_or(default_ft_account).into(),
            nft_account: nft_account_id.unwrap_or(default_nft_account).into(),
        }
    }

    pub fn add_account(&mut self, account_id: AccountId) {
        self.accounts.insert(&account_id);
    }

    pub fn remove_account(&mut self, account_id: AccountId) {
        self.accounts.remove(&account_id);
    }

    #[payable]
    pub fn multisend(&mut self, transfer_type: TransferType, amount: Option<U128>) {
        assert!(self.accounts.len() > 0, "No accounts");
        let token_amount = amount.unwrap_or(U128::from(0));
        assert!(token_amount.0 > 0, "Nothing to send");

        let start = self.index;
        let end_index = u128::max(self.index.saturating_add(self.page_size), 0);
        let end = u128::min(end_index, self.accounts.len() as u128);
        log!(
            "start {:?}, end {:?} -- index {:?}, total {:?}",
            &start,
            &end,
            self.index,
            self.accounts.len()
        );

        // Check current index
        // Stop if index has run out of accounts
        // Get max index and see if we exceeded
        assert_ne!(start, end, "No items to paginate");
        assert!(self.index < end, "Index has reached end");

        // Return all tasks within range
        // loop and transfer funds to each account
        let keys = self.accounts.as_vector();
        for i in start..end {
            if let Some(acct) = keys.get(i as u64) {
                match transfer_type {
                    TransferType::Near => {
                        Promise::new(acct).transfer(token_amount.into());
                    }
                    TransferType::FungibleToken => {
                        ext_ft::ft_transfer(
                            acct,
                            token_amount,
                            &self.ft_account,
                            ONE_YOCTO,
                            GAS_FOR_FT_TRANSFER,
                        );
                    }
                    TransferType::NonFungibleToken => {
                        ext_nft::nft_transfer(
                            acct,
                            token_amount,
                            // TODO: Could support approval_id & memo
                            None,
                            None,
                            &self.nft_account,
                            ONE_YOCTO,
                            GAS_FOR_NFT_TRANSFER,
                        );
                    }
                }
            }
        }

        // increment index upon completion
        self.index = self.index.saturating_add(self.page_size);
    }
}
```

As you can see, there are 3 main functions:

#### Add / Remove Account

Update a list of accounts that will receive transfers. This isn't a requirement, just a way to show how it could be done for this example.

#### Multisend

Transfer equally to all accounts within the accounts list. This can be extended to anything you need to do, likely you'll want to make the amounts different based on the account. Customize to your needs!

The logic above ("multisend" function) is built to show a simple pagination, which uses the contract storage to keep track of current index, and distribute funds of a specific type to all accounts.

## Cron Task Creation

Using this example, we will assume that this contract is deployed at [airdrop.in.testnet](https://explorer.testnet.near.org/accounts/airdrop.in.testnet).

We can configure a cron task that will execute immediately after current slot until the list is complete, using the following command:

```bash
near call manager_v1.croncat.testnet create_task '{"contract_id": "airdrop.in.testnet","function_id": "multisend","cadence": "1 * * * * *","recurring": true,"deposit": "10000000000000000000000000","gas": 200000000000000,"arguments": "eyJ0cmFuc2Zlcl90eXBlIjogIk5lYXIiLCAiYW1vdW50IjogIjUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCJ9"}' --accountId YOUR_ACCOUNT.testnet --amount 20
```

You will notice three important things:
1. contract_id - the contract we want to call, the airdrop contract
2. function_id - the code we want to execute, the multisend
3. cadence - the timing of the contract execution, configured for immediate execution until task complete
4. arguments - the Base64 encoded JSON of '{"transfer_type": "Near", "amount": "500000000000000000000000"}'

[View full task creation details here](/docs/task-creation)

Now that the task has been registered with the cron manager, the task will now be triggered/executed by the CronCat agents at the scheduled time! 

**Hooray!**

At this point, you can manage your task by:

* [Monitoring](/docs/task-monitoring)
* [Update Task](/docs/task-creation)
