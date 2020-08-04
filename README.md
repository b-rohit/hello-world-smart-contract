# Hello-World Ethereum Smart Contract

The repository contains a very simple Ethereum smart contract named MyStatus written in the Solidity. It is a perfect stop to start learning about the smart contracts. It also contains the information to develop, test, deploy and interact with the smart contract.

# Prerequisite

## Node

Install Node js version 12.18.1. I installed it using [nvm](https://github.com/nvm-sh/nvm)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 12.18.1
```

## Truffle

[Truffle](https://github.com/trufflesuite/truffle) is a development environment, testing framework and asset pipeline for Ethereum.

`npm install -g truffle`

## Ganache cli

[Ganache](https://github.com/trufflesuite/ganache-cli) will be used to create personal blockchain for Ethereum development.
`npm install -g ganache-cli`

# Usage

## Develop

You can find the contract in the contract directory. It contains 2 contracts name Migrations and MyStatus. The Migrations contract is utilized to deploy the MyStatus contract. The MyStatus contract is our main contract. It is consist of one variable named status and two functions namely getStatus and setStatus to get and change status respectively. It is a good starting point for the beginners. Once you understand the basic format for the contract, you can make changes and adapt it your needs and use case.

## Compilation

You can use truffle to compile the smart contracts present in the contracts directory. Use the following command.

```
truffle compile
```

The command will compile and store the bytecode and metadata of the smart contracts in the build directory in json files.

## Test

The truffle suit also facilitates testing of the contract. Use the following command.

```
truffle test
```

The tests are stored in the test folder. It will be picked automatically by the test command. Here, the tests are written in the Solidity but the Javascript can also be utilized for the same.

## Blockchain Network

There are multiple tools to spawn a personal blockchain network quickly for development purposes. Both truffle and ganache-cli can be used to create such a network. The command is following with ganache

```
ganache-cli
```

It will setup 10 account and load them with 100 ETH each. It will also create and expose HTTP RPC server on port 8545. The truffle goes a bit further. It creates the blockchain network and open a console to execute other truffle commands to manage the contract. The network configurations such as, host, port, network_id etc. are stored in truffle.js. The command is following:

```
truffle develop
```

Keep one thing on mind it exposes the HTTP RPC server on port 9545.

## Deployment

Use the following command to deploy the smart contract when you have started the blockchain network with ganache-cli

```
truffle migrate
```

If you started with truffle develop then execute only migrate command in the console.

```
truffle(develop)> migrate
```

## Interaction

Start the truffle console using the following command.

```
truffle console
```

It is required only if you have created the blockchain network using the ganache-cli. The truffle develop command will start it automatically. Use the following commands to execute the functions defined in the smart contract.

```
let instance = await MyStatus.deployed()
await instance.getStatus()
await instance.setStatus("Available")
```
