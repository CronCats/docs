---
description: 'A demo of how to setup a cron task for the counter example'
sidebar: 'docs'
prev: '/docs/examples/'
next: '/docs/example-charity/'
---

# Example: Counter

[View Full Source](https://github.com/Cron-Near/contracts/tree/main/examples/counter)

Increase or decrease an integer every 30 minutes with croncat! This example shows how a task can have recurring execution and you can view state that is changing over time (the count increases!).

## Contract Source Example

Here's a non-exhaustive view of the contract we will be using:

```rust
pub struct Counter {
    val: i128
}

#[near_bindgen]
impl Counter {
    pub fn get_num(&self) -> i128 {
        return self.val;
    }

    pub fn increment(&mut self) {
        self.val += 1;
        let log_message = format!("Increased number to {}", self.val);
        env::log(log_message.as_bytes());
    }

    pub fn decrement(&mut self) {
        self.val -= 1;
        let log_message = format!("Decreased number to {}", self.val);
        env::log(log_message.as_bytes());
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

[View full task creation details here](/docs/task-creation)

Now that the task has been registered with the cron manager, the task will now be triggered/executed by the croncat agents at the scheduled time! 

**Hooray!**

At this point, you can manage your task by:

* [Monitoring](/docs/task-monitoring)
* [Update Task](/docs/task-creation)
