const { ethers } = require("ethers");

const ADDR = "0x5416c4cAFe4b9ba471c2e6EA9B2D57Df1afB5B5C";   // your contract address
 // your contract ABI
const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "walletAddress",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "tokenAddresses",
          "type": "address[]"
        }
      ],
      "name": "getBalances",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct RetrieveBalances.TokenAmount[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

const ADDRESS = "0x000095E79eAC4d76aab57cB2c1f091d553b36ca0"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x68b8e71a2043c036a8705721b617cbbec4bdcde3",
	"0xBC9d70CD91E3D97FA73B136A08bD2A6d72A74AA7",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
// const provider = ethers.providers.getDefaultProvider()
const provider = new ethers.providers.AlchemyProvider(
	(network = "goerli"), 
	"HcFdQioRaRHD8nBXpAYd-XBLrV29ScnL");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

	const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);