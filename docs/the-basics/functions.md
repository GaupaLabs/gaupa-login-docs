---
sidebar_position: 4
---

# Functions

Functions allows the project to create tailored transactions based on their needs.

## Function Types

There are 4 types of functions, similar to permissions. 

- EGLD (egld) for EGLD transfers.
- ESDT (esdt) for ESDT transfers.
- NFT (nft) for NFT and SFT transfers.
- Data (data) for non-token-transfer transactions.

## Only Allow Functions

We recommend enabling "Functions Only" once setup to ensure that the API Key can only trigger functions and not any type of transaction.

## Creating a Function

A function allows to prefill values and only leave certain fields open to be filled or modified.
The formating of a function varies depending on the type./

Each function has a name which needs to be unique as it's used to be triggered.

### Wildcards

Wildcards `{"$wildcard": true}` are the values the project wants to pass as variable. As example the User ID (uuid) is in most cases a wildcard.
If no default is provided, the function will fail.\
To have a default value: `{"$wildcard": true, "default": 10000000}`

### Params types
To facilitate your experience we're automatically converting the different parameters for you.
Here are the different types:
- Function (function): The function you wish to call (also works with ESDT and NFT transfers)
- String (string): Text passed as data.
- Number (number): Number passed as data.
- Address (address): A erd address passed as data.

### ABI to Functions
Coming soon!


### Create EGLD Function

Creating a function to send EGLD on behalf of the user. EGLD Permission needs to be set as `true`.

`userId` The User Id of the user.\
`amount` The amount of EGLD to be sent.\
`params` (Optional) The parameters to pass as data in addition to the transfer.\
`address` The address to which send the EGLD to.\
`gasLimit` The gas limit to be set, can vary depending on transaction content.\
`gasPrice` The price per gas unit to be paid. Defaults to base price if not specified.

#### Example:

```
{
  "userId": {
    "$wildcard": true
  },
  "amount": {
    "$wildcard": true
  },
  "params": [
    {
      "type": "function",
      "value": "wrapEgld"
    }
  ],
  "address": "erd1qqqqqqqqqqqqqpgqpv09kfzry5y4sj05udcngesat07umyj70n4sa2c0rp",
  "gasLimit": {
                "$wildcard": true, 
                "default": 10000000
              },
  "gasPrice": {
                "$wildcard": true, 
                "default": 1000000000
              }
}
```

### Create ESDT Function

Creating a function to send ESDT on behalf of the user. ESDT Permission needs to be set as `true` and token ticker specified.

`userId` The User Id of the user.\
`token` The token ticker of the token to be sent.\
`amount` The amount of ESDT to be sent.\
`params` (Optional) The parameters to pass as data in addition to the transfer.\
`address` The address to which send the ESDT to.\
`gasLimit` The gas limit to be set, can vary depending on transaction content.\
`gasPrice` The price per gas unit to be paid. Defaults to base price if not specified.

#### Example:

```
{
  "userId": {"$wildcard": true},
  "token": "WEGLD-a28c59", 
  "amount": {"$wildcard": true}, 
  "params": [
    {
      "type": "function", 
      "value": "unwrapEgld"
    }
  ],  
  "address": "erd1qqqqqqqqqqqqqpgqpv09kfzry5y4sj05udcngesat07umyj70n4sa2c0rp", 
  "gasLimit": 10000000, 
  "gasPrice": 1000000000
}
```

### Create NFT/SFT Function

Creating a function to send NFT or SFT on behalf of the user. NFT Permission needs to be set as `true` and collection ticker specified.

`userId` The User Id of the user.\
`token` The token ticker of the token to be sent.\
`nonce` The nonce of the NFT/SFT to be sent.\
`amount` Defaults to 1. Only for SFTs. The amount of an SFT to be sent.
`params` (Optional) The parameters to pass as data in addition to the transfer.\
`address` The address to which send the NFT/SFT to.\
`gasLimit` The gas limit to be set, can vary depending on transaction content.\
`gasPrice` The price per gas unit to be paid. Defaults to base price if not specified.

#### Example:

```
{
  "userId": {"$wildcard": true},  
  "token": "ROGUEITEMS-868439",
  "nonce": {"$wildcard": true},
  "amount": {"$wildcard": true}, 
  "params": [{"type": "function", "value": "consume"}], 
  "address": "erd1y49kz9lzu9dtzjzhs7p0f6cs3239khq4sc5gmgrcrqx5nvhp84tsnxapnn", 
  "gasLimit": 10000000, 
  "gasPrice": 1000000000
}
```

### Create Data Function

Creating a function which only contains data. No token transfer.

`userId` The User Id of the user.\
`params` (Optional) The parameters to pass as data in addition to the transfer.\
`address` The address to which send the data to.\
`gasLimit` The gas limit to be set, can vary depending on transaction content.\
`gasPrice` The price per gas unit to be paid. Defaults to base price if not specified.

#### Example:

```
{
  "userId": {"$wildcard": true},  
  "params": [
    {
      "type": "function", "value": "claimXP"
    }, 
    {
      "type": "string", "name": "someData", "value": {"$wildcard": true}
      }
  ], 
  "address": "erd1qqqqqqqqqqqqqpgqpv09kfzry5y4sj05udcngesat07umyj70n4sa2c0rp", 
  "gasLimit": 10000000, 
  "gasPrice": 1000000000
}
```
## Triggering a Function

To trigger a function you'll need:
- **API Key**
- **Public Key**
- **Function Name**

The body will vary depending on the function definition. 

<iframe
  src="https://dev-auth.gaupa.xyz/?filter=Function#/Function/manageFunctionUser"
  width="100%"
  height="800px"
  style={{ border: 0 }}
  allowFullScreen
/>
<a href="https://dev-auth.gaupa.xyz/?filter=Function#/Function/manageFunctionUser" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>