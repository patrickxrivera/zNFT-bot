# zNFT Bot

Building a bot that tweets when a zNFT is minted.

Here are some technical details for you nerds.

Block processing system

- every 5 seconds, a job runs that queries the DB to determine the last block we've processed
- it processes blocks up until the latest mined block
- once a block is processed it's persisted in the DB as a pointer to determine which block to process next

How are blocks processed?

- we use the getLogs method in the Etherscan API to check whether the passed in block contains a Transfer event emitted by Zora's Media contract
- to make this efficient, Etherscan checks the bloom filter in the block header to do an O(1) look up on whether this block has the event we're looking for
- if the block does have this event, we parse the log and persist the owner's address, tokenId, and transaction hash in the DB

Currently working on:

- integrating the Zora subgraph to query for the zNFT's metadata
- updating the zora.gallery app to include pages for specific media which can be linked to in the tweet
- integrating the Twitter API so we can tweet whenever a zNFT is minted
