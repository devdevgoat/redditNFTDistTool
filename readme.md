# Reddit / Wallet Linker

### Authors Note
Now before some NFT elitist tells me the architecutre described below is trash and 'centralized' let me tell you that I am far to illiterate to implement a [zk proof](https://github.com/enricobottazzi/ZKverse) capable of deploying a [trustless airdrop](https://github.com/enricobottazzi/Zeko)... If someone wants to help me build this (because it is the correct way to do it!) lmk. 

### It's kind of a pain to send nft's to reddit users

The current process is 

- Author makes a post offering nft
- Users post their address in the comments
- Author copies and paste their address into either a wallet or other transfer form
- Author replies to commenter that it was sent
- Repeat steps 3 and 4, 50 times :(

This is quite time consuming for the author, and I think it can be improved. Trustless/blind airdrop would be ideal, but hard to implement by myself. The next best thing is for reddit users to claim their address, then build a page that converts interest (comments) into one click send buttons. 

Even better would be to automate the process completely, but that would likely involve requiring the author either send all their nft's to a contract with enough gas to redistribute them. This is doable, but maybe in a future version. My concerns are calculating the necessary gas in advance, collecting it, and then refunding the remainder.

### Current design

Ok, so what do we have so far? Right now we have users signup by authenticating with both reddit and their wallet. We store these mappings in a database, and direct the user to comment on the post to confirm, then we show the author a dashboard of commenters and a direct link to each user for quick nft distribution.

![I know... I know...](https://c.tenor.com/yJCJVuRG5pkAAAAd/problematic-stressed.gif)

Yea, I know... it requires a database. BuT CeNtrAlizAtIon!? Well, lets look at the alternatives:

- People keep posting their address on reddit, allowing scrapers to collect mappings and store them in their own databases them without the users consent
- Decentralize via a smart contract or db's like GUN, but this has two cons:
    - User has to pay gas to store the mapping/sign up
    - The mapping is publicly avialble onn the blockchain, opening the user up to spam
- We could let users put their reddit user name in their gamestop profile, but currently GS doesn't require authenticatation with reddit, allowing users to impersonate accounts they don't own. If this gets solved on GS's, pinging their api is actually really easy and I would use this instead

So, that leaves me with... a centralized database that I control which owns the mappingns and each user individually consents to providing those mappings. I guess I need to make opting out/deleting the mapping a feature asap... uhg I hate centralization.

Anyway, that's where we're at. HMU if you want to contribute at [u/devdevgoat](https://reddit.com/u/devdevgoat) or [@devdevgoat](https://twitter.com/devdevgoat)!