# Voting Dapp
Blockchain-based voting system to be used with polls/petitions related to the FCT Nova activities.
Only those whitelisted can participate and it's implied that only students who are currently enrolled in a program are whitelisted.
The system is supposed to facilitate a multi-directional communication between students and university administration
(like this: `students <-> students <-> teachers`, instead of classic `teachers -> students`).
### What's a Dapp?
Decentralized APPlication. Rather than using Front-end with Back-end, Dapp consists of Front-end with Blockchain, which means there's no centralized server
in which data could be altered or censored. Everything is transparent and written once and forever.
### Smart contract location
Voting smart contract is deployed & verified in the Goerli testnet: https://goerli.etherscan.io/address/0x5c88b30f14e639718d06c167c25df86d72fd219c#readContract
### Smart contract functionality
- Anyone whitelisted can create & vote in polls
- Admins can add & remove from whitelist
- Admins can add new admins
- Polls automatically close after a week passes (it's no longer possible to vote)
- All vital information is stored in the blockchain: poll name & description, creation date, author, votes for & against
- In order to prevent admins from abusing system by creating fake accounts, each whitelisted address should correspond to a student number
- Basic test coverage
### FAQ
Q: Very little students will participate if they have to pay for each action.

A: It's a problem indeed, but it could be solved by using Paymasters which are actively developed (https://eips.ethereum.org/EIPS/eip-4337)

#

Hackathon project of "Promin" team:

Yelyzaveta Skorokhid & Oleksii Haponiuk.
