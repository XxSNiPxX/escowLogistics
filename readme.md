# logisticsbeta

**logisticsbeta** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## What Problem Does This Idea Solve?


The idea solves the problem of food aggregators charging exorbitant prices from the restaurant (vendor) and customer (purchaser) while taking a cut from the delivery riders (transporter), by providing an architecture, enabled by IBC, that introduces effective dispute resolution and incentivizes cooperation.

## Target Audience & Benefits

This is a **B2C** product aimed at reducing overall costs for customers in the food delivery industry by minimizing the role of intermediaries (food aggregators). It utilizes escrow-based mechanisms that release funds when predefined conditions are met, ensuring fair payments for all stakeholders. 

A **dispute management platform** is also introduced to resolve conflicts among customers, restaurants, and delivery agents. Additionally, location-sharing mechanisms ensure a similar level of service as traditional Web2 competitors.

### Inspiration from ONDC

The current landscape of the food delivery industry includes initiatives like **ONDC** (Open Network for Digital Commerce), which decentralizes transactions among multiple sellers, buyers, logistics providers, and payment gateways. While ONDC has its own challenges, **logisticsbeta** aims to standardize its philosophy via **IBC (Inter-Blockchain Communication).**

## Architecture

![Flow_1729535702606_1](https://github.com/user-attachments/assets/1879fd5d-d955-406c-8716-065a59626373)

The system consists of **four main blockchain networks** built on the **Cosmos SDK**:

1. **Purchaser Chain** (Customer)
2. **Vendor Chain** (Restaurant)
3. **Transporter Chain** (Delivery Rider)
4. **Trade Chain** (Transaction Processing & State Management)

Each chain maintains its own data, including customer profiles, vendor listings, and delivery rider details. **NFTs** for menus, food ordering achievements, and other features can be transferred among chains via IBC.

- Customers interact with the **Purchaser Chain** to create profiles, mint NFTs, and transfer coins.
- Restaurants and delivery riders interact with **Vendor and Transporter Chains**, each having unique data structures.

## Core Logic

1. **Restaurant Menu Creation:**
   - A restaurant creates an **on-chain menu**.
   - Customers can query this data and initiate an order (trade) by sending a message to the **Trade Chain**, including the required payment tokens.

2. **Order Processing:**
   - The **Trade Chain** escrows the tokens, generates an **OTP**, and sends the details to the **Vendor Chain**.
   - The restaurant accepts the order, triggering a state transition that connects delivery riders on the **Transporter Chain**.

3. **Delivery Rider Pickup:**
   - The rider reaches the restaurant and provides an **OTP**.
   - The **Vendor Chain** sends this OTP to the **Trade Chain**, releasing payment to the restaurant.

4. **Final Delivery:**
   - Upon food delivery, the customer provides another **OTP** to the delivery rider.
   - The **Transporter Chain** submits this OTP to the **Trade Chain**, releasing the payment to the rider.

5. **Dispute Management:**
   - An **off-chain customer support** system handles disputes and ensures fairness in case of order issues.

> “Innovation distinguishes between a leader and a follower.” - **Steve Jobs**

## Get Started

```sh
ignite chain serve
```

The `serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Additionally, Ignite CLI offers both Vue and React options for frontend scaffolding:

- For a Vue frontend, use: `ignite scaffold vue`
- For a React frontend, use: `ignite scaffold react`

These commands can be run within your scaffolded blockchain project.

For more information, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release

To release a new version of your blockchain, create and push a new tag with the `v` prefix. A new draft release with the configured targets will be created.

```sh
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install

To install the latest version of your blockchain node's binary, execute the following command on your machine:

```sh
curl https://get.ignite.com/XxSNiPxX/logisticsBeta@latest! | sudo bash
```

`XxSNiPxX/logisticsBeta` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).


## Learn More

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI Docs](https://docs.ignite.com)
- [Cosmos SDK Docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)

