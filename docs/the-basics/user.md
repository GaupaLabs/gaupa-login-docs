---
sidebar_position: 1
---

# User

Login in or Signing up to your platform using Gaupa Login only takes a few clicks. No Seed Phrase. No Web3 vocabulary. 

## Account Creation

### Existing Gaupa Login User

If the user has already used Gaupa Login in the past the login will be a single click.
In the background, a new wallet has been created with the permissions set by you, the project. 
This new wallet is proper to the user and the project. For each project the user logs into, a new wallet is created.

### New Gaupa Login User

In the case the user hasn't used Gaupa Login in the past an additional click is necessary (2 clicks, I know!). 
The user needs to approve the storage of a configuration file onto their Google Drive (Apple & iCloud coming soon).
Once completed their main Gaupa Wallet is created in addition to the one linked to the project.

## User Information

Upon login a JWT will be returned. 
When using the Gaupa Login SDK, the SDK automatically listens for the JWT, considers the user logged in if the JWT is valid and queries the user informmation.
Basic user information as well as the Main and Project wallet can be queried using tye `/me` endpoint with the Public Key and JWT passed.

[API Swagger](https://dev-auth.gaupa.xyz)

