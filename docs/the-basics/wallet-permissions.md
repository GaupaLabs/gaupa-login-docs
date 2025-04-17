---
sidebar_position: 2
---

# Wallet Permissions

Each project can set custom permissions based on their needs.
It's strongly recommended to use Functions in addition to the Permissions for increased security.

## Permission Types

### Data Permission

Allows the project to do non-transfer transactions on behalf of the user. 
For example claiming XP, storing game decisions, data etc...

### EGLD Permission

Allows the project to transfer EGLD on behalf of the user. 

### ESDT Permission

Allows the project to transfer ESDTs on behalf of the user.
The project should specify which ESDTs and limit to the ones used on the platform.
Not specifying means asking permission for all ESDTs which isn't recommended.

### NFT/SFT Permission

Allows the project to transfer NFTs and SFTs on behalf of the user. 
The project should specify which NFT/SFT collections and limit to the ones used on the platform.
Not specifying means asking permission for all NFT/SFT which isn't recommended.

## Permission Changes

A project can change their permissions at any given time.
If a project makes permission changes they won't be valid until the user connects again and approves the new permissions. 
Transactions requiring the new permissions will fail until approved by the user.

## Revoking Permissions

A user can revoke project permissions from the Gaupa Login Dashboard. If they do they won't be able to connect to the project's platform until they've re-approved the permissions.



