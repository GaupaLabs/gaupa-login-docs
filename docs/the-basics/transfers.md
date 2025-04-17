---
sidebar_position: 3
---

# Transfers

Transfers allow to trigger different types of transactions on the user's behalf.

## Transfer Types

There are 4 types of transfers, similar to permissions. 

- EGLD (egld) for EGLD transfers.
- ESDT (esdt) for ESDT transfers.
- NFT (nft) for NFT and SFT transfers.
- Data (data) for non-token-transfer transactions.

## Only Allow Functions

For production we strongly recommend not using transfers and use Functions instead.

## Trigger a Transfer

A function allows to prefill values and only leave certain fields open to be filled or modified.
The formating of a function varies depending on the type./

Each function has a name which needs to be unique as it's used to be triggered.

### Params types
To facilitate your experience we're automatically converting the different parameters for you.
Here are the different types:
- Function (function): The function you wish to call (also works with ESDT and NFT transfers)
- String (string): Text passed as data.
- Number (number): Number passed as data.
- Address (address): A erd address passed as data.


### EGLD Transfer

Making an EGLD transfer on behalf of the user. EGLD Permission needs to be set as `true`.

`userId` The User Id of the user.\
`amount` The amount of EGLD to be sent.\
`params` (Optional) The parameters to pass as data in addition to the transfer.\
`address` The address to which send the EGLD to.\
`gasLimit` The gas limit to be set, can vary depending on transaction content.\
`gasPrice` The price per gas unit to be paid. Defaults to base price if not specified.

### ESDT Transfer

Making an ESDT on behalf of the user. ESDT Permission needs to be set as `true` and token ticker specified.

`userId` The User Id of the user.\
`token` The token ticker of the token to be sent.\
`amount` The amount of ESDT to be sent.\
`params` (Optional) The parameters to pass as data in addition to the transfer.\
`address` The address to which send the ESDT to.\
`gasLimit` The gas limit to be set, can vary depending on transaction content.\
`gasPrice` The price per gas unit to be paid. Defaults to base price if not specified.

### NFT/SFT Transfer

Making an NFT or SFT transfer on behalf of the user. NFT Permission needs to be set as `true` and collection ticker specified.

`userId` The User Id of the user.\
`token` The token ticker of the token to be sent.\
`nonce` The nonce of the NFT/SFT to be sent.\
`amount` Defaults to 1. Only for SFTs. The amount of an SFT to be sent.
`params` (Optional) The parameters to pass as data in addition to the transfer.\
`address` The address to which send the NFT/SFT to.\
`gasLimit` The gas limit to be set, can vary depending on transaction content.\
`gasPrice` The price per gas unit to be paid. Defaults to base price if not specified.

### Data Transfer

Making a transfer which only contains data on behalf of the user. No token transfer.

`userId` The User Id of the user.\
`params` (Optional) The parameters to pass as data in addition to the transfer.\
`address` The address to which send the data to.\
`gasLimit` The gas limit to be set, can vary depending on transaction content.\
`gasPrice` The price per gas unit to be paid. Defaults to base price if not specified.

## Transfer API Endpoints

To trigger a transfer you'll need:
- **API Key**
- **Public Key**

<iframe
  src="https://dev-auth.gaupa.xyz/?filter=Manage#/Manage/manageTransferEGLDUser"
  width="100%"
  height="800px"
  style={{ border: 0 }}
  allowFullScreen
/>
<a href="https://dev-auth.gaupa.xyz/?filter=Manage#/Manage/manageTransferEGLDUser" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>