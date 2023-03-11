// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Voting {
    uint public constant TIME_LIMIT = 7 days;

    struct Poll {
        uint dateCreated;
        string name;
        string description;
        uint voteYes;
        uint voteNo;
        mapping(address => bool) voted;
    }

    mapping(uint => Poll) polls;

    // Polls size. Last poll id is pollCounter - 1
    uint public pollCounter;

    mapping(address => bool) whitelisted;

    mapping(address => bool) admins;

    // EVENTS

    event PollCreated(
        uint indexed pollId,
        uint indexed dateCreated,
        string indexed name,
        string description
    );

    event voted(uint indexed pollId, address indexed addr, bool indexed yes);

    event addedToWhitelist(uint indexed studentNumber, address indexed addr);

    event addedToAdmins(address indexed addr);

    // FUNCTIONS

    constructor() {
        admins[msg.sender] = true;
    }

    function isWhitelisted(address addr) public view returns (bool) {
        return whitelisted[addr];
    }

    function isAdmin(address addr) public view returns (bool) {
        return admins[addr];
    }

    function haveVoted(uint pollId, address addr) public view returns (bool) {
        return polls[pollId].voted[addr];
    }

    function pollIsActive(uint pollId) public view returns (bool) {
        return block.timestamp < polls[pollId].dateCreated + TIME_LIMIT;
    }

    function getName(uint pollId) external view returns (string memory) {
        return polls[pollId].name;
    }

    function getDescription(uint pollId) external view returns (string memory) {
        return polls[pollId].description;
    }

    function getVoteYes(uint pollId) external view returns (uint) {
        return polls[pollId].voteYes;
    }

    function getVoteNo(uint pollId) external view returns (uint) {
        return polls[pollId].voteNo;
    }

    function getTotalVotes(uint pollId) external view returns (uint) {
        return polls[pollId].voteYes + polls[pollId].voteNo;
    }

    function createPoll(string memory name, string memory description) external {
        require(isWhitelisted(msg.sender), "Not whitelisted");

        uint now = block.timestamp;
        uint pollId = pollCounter;
        polls[pollId].dateCreated = now;
        polls[pollId].name = name;
        polls[pollId].description = description;

        pollCounter++;

        emit PollCreated(pollId, now, name, description);
    }

    function vote(uint pollId, bool yes) external {
        require(isWhitelisted(msg.sender), "Not whitelisted");
        require(pollIsActive(pollId), "Poll isn't active");
        require(!haveVoted(pollId, msg.sender), "Can't vote twice");

        if (yes) {
            polls[pollId].voteYes++;
        } else {
            polls[pollId].voteNo++;
        }
        polls[pollId].voted[msg.sender] = true;

        emit voted(pollId, msg.sender, yes);
    }

    function addToWhitelist(uint studentNumber, address addr) external {
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
