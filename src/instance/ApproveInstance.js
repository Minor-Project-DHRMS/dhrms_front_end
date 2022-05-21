import abi from "../utils/approve.json";
import { ethers } from "ethers";

// const contractAddress = "0xB411641A967366282C6F47ae86604F5E7aBB9C97";
const contractAddress = "0x3Ec9bcCb9d93Af0b1dbD32D84c21D9A743a93699";
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
