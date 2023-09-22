require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "KEY";
const SEPOLIA_PRIVATE_KEY = "da2bfb8fe98c73261034039853aee60ec517fd93bcad3a0d97c0564f5fb5c660";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks: {
    sepolia: {
      // url: "http://127.0.0.1:8545/",
      url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
      chainId: 11155111,
      accounts: ["da2bfb8fe98c73261034039853aee60ec517fd93bcad3a0d97c0564f5fb5c660"],
    },
  },
};
