import abi from "../utils/dhrms.json";
import { ethers } from "ethers";

// const contractAddress = "0x96428b6b621D4A3CA50E2Ee6bE9Fc5fE06367B6C";
const contractAddress = "0x21170F715D318831c2397f9E71fDF8fA0285a4DE";
const contractABI = abi.abi;

const DhrmsIntance = () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const dhrmsContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    return dhrmsContract;
  } catch (error) {
    console.log(error);
  }
};

export default DhrmsIntance;
