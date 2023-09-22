import { ethers } from "ethers";
import { javonICOAddress, javonICOAbi } from "./constants";
import { toast } from "react-toastify";

async function loadContract(signer, chainId, setContract, address) {
  if (chainId !== 11155111) {
    toast.error(
      "Please Change your network to Sepolia Network for Buying Tokens"
    );
    return;
  }
  const _javICOContract = new ethers.Contract(
    javonICOAddress,
    javonICOAbi,
    signer
  );

  setContract({
    javICO: _javICOContract,
  });

  //Read From Contract

  const tokensAvailable = ethers.utils.formatEther(
    await _javICOContract.getICOTokenBalance()
  );

  const investorBalance = ethers.utils.formatEther(
    await _javICOContract.investorBalanceOf(address)
  );

  return {
    tokensAvailable,
    investorBalance,
  };
}

export default loadContract;
