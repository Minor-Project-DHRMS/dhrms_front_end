import abi from "../utils/approve.json";
import { ethers } from "ethers";

// const contractAddress = "0xB411641A967366282C6F47ae86604F5E7aBB9C97";
const contractAddress = "0x24D17E87719516B55Ce5C6d5be0485E00644C8D0";
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
