---
description: 'Pre-requirements for running Croncat Agent'
sidebar: 'docs'
next: '/docs/agent-cli/'
---

# Pre-requirements for Croncat Agent 

Before you start [installing the Croncat Agent Cli](/docs/agent-cli.md) you need to prepare your computer/server/vps.

## NEAR Cli

Before you start, you might want to ensure your system is up to date.

```bash
sudo apt update && sudo apt upgrade -y
```

Install Nodes.js and NPM:

```bash
curl -sL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt install build-essential nodejs
PATH="$PATH"
```

Check Node.js and npm version:

```bash
node -v
```
 >>> response: v17.x.x

```bash
npm -v
```
 >>> response: 8.x.x

And install NEAR-Cli:

```bash
sudo npm install -g near-cli
```


## NEAR Account



If you do not have a NEAR Account yet, please create one [Mainnet](https://wallet.near.org/), [Testnet](https://wallet.testnet.near.org/), [Guildnet](https://wallet.openshards.io/). 

### Environment

The environment will need to be set each time a new shell is launched to select the correct network.


```bash
export NEAR_ENV=<network>
```

Where <networks>:
- `mainnet`
- `testnet`
- `guildnet`
 
 Example:

```bash
export NEAR_ENV=mainnet
```

And add to the ~ / .bashrc file so that you don't have to enter the command every time you log in



```bash
echo 'export NEAR_ENV=<network>' >> ~/.bashrc
```

### NEAR Login


And now you can make a login:

```bash
near login
```

This command launches a web browser allowing for the authorization of a full access key to be copied locally

