import { ethers } from "ethers";

const swthTokenContract: string = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/")

const abi: string[] = [
    "function balanceOf(address owner) view returns (uint256)"
];

const erc20: ethers.Contract = new ethers.Contract(swthTokenContract, abi, provider);

const addresses: string[] = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
];

const print = async (address: string) : Promise<void> => {
    const balance = await erc20.balanceOf(address);
    const amount = ethers.utils.formatUnits(balance, 8);
    console.log(`${address} ${amount}`);
};

addresses.map(print);