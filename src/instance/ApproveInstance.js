import abi from "../utils/approve.json";
import { ethers } from "ethers";

// const contractAddress = "0xB411641A967366282C6F47ae86604F5E7aBB9C97";
const contractAddress = "0xFdA1f0DC447c099d94E98D9fAf9afED13616fDda";
const contractABI = abi.abi;

const ApproveInstance = () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const approveContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    return approveContract;
  } catch (error) {
    console.log(error);
  }
};

export default ApproveInstance;
