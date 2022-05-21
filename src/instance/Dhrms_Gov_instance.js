import abi from "../utils/dhrms_gov.json";
import { ethers } from "ethers";

// const contractAddress = "0x96428b6b621D4A3CA50E2Ee6bE9Fc5fE06367B6C";
const contractAddress = "0xAE773881A97380250322fc02D9fD44c098C5521C";
const contractABI = abi.abi;

const Dhrms_Gov_Instance = () => {
    try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const Dhrms_Gov_Contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
        return Dhrms_Gov_Contract;
    } catch (error) {
        console.log(error);
    }
};

export default Dhrms_Gov_Instance;
