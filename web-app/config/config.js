const config = {
  contractAddress: "0x5C88B30f14E639718D06C167C25DF86d72Fd219C",

  contractABI: {
    ABI: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "dateCreated",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            indexed: false,
            internalType: "string",
            name: "description",
            type: "string",
          },
        ],
        name: "PollCreated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "addedToAdmins",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "studentNumber",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "addedToWhitelist",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "removedFromWhitelist",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
          {
            indexed: true,
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            indexed: true,
            internalType: "bool",
            name: "yes",
            type: "bool",
          },
        ],
        name: "voted",
        type: "event",
      },
      {
        inputs: [],
        name: "TIME_LIMIT",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "addToAdmins",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "studentNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "addToWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
        ],
        name: "createPoll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        name: "getAuthor",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        name: "getDateCreated",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        name: "getDescription",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        name: "getName",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        name: "getTotalVotes",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        name: "getVoteNo",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        name: "getVoteYes",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "haveVoted",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "isAdmin",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "isWhitelisted",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "pollCounter",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        name: "pollIsActive",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
        ],
        name: "removeFromWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "yes",
            type: "bool",
          },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
};
