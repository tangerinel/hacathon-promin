// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Voting {
    struct Poll {
        uint256 voteYes;
        uint256 voteNo;
        mapping(address => bool) voted;
    }

    // MongoDB objectID to Poll
    mapping(bytes12 => Poll) polls;

    // Polls size
    uint256 pollCounter;

    mapping(address => bool) whitelisted;

    mapping(address => bool) admins;

    // EVENTS

    event PollCreated(bytes12 indexed pollId);

    event addedToWhitelist(uint256 indexed studentNumber, address indexed addr);

    event addedToAdmins(address indexed addr);

    event voted(bytes12 indexed pollId, address indexed addr, bool indexed yes);

    constructor() {
        admins[msg.sender] = true;
    }

    function isWhitelisted(address addr) public view returns (bool) {
        return whitelisted[addr];
    }

    function isAdmin(address addr) public view returns (bool) {
        return admins[addr];
    }

    function haveVoted(bytes12 pollId, address addr)
        public
        view
        returns (bool)
    {
        return polls[pollId].voted[addr];
    }

    function createPoll(bytes12 pollId) external {
        require(isWhitelisted(msg.sender), "Not whitelisted");

        emit PollCreated(pollId);
    }

    function vote(bytes12 pollId, bool yes) external {
        require(isWhitelisted(msg.sender), "Not whitelisted");
        require(!haveVoted(pollId, msg.sender), "Have voted");

        if (yes) {
            polls[pollId].voteYes++;
        } else {
            polls[pollId].voteNo++;
        }
        polls[pollId].voted[msg.sender] = true;

        emit voted(pollId, msg.sender, yes);
    }

    function addToWhitelist(uint256 studentNumber, address addr) external {
        require(isAdmin(msg.sender), "Not admin");

        whitelisted[addr] = true;

        emit addedToWhitelist(studentNumber, addr);
    }

    function addToAdmins(address addr) external {
        require(isAdmin(msg.sender), "Not admin");

        admins[msg.sender] = true;

        emit addedToAdmins(addr);
    }
}
