import abi from "../utils/dhrms_doc.json";
import { ethers } from "ethers";

// const contractAddress = "0x96428b6b621D4A3CA50E2Ee6bE9Fc5fE06367B6C";
const contractAddress = "0x6A9F51581a1c6442571Ea1C091e199802BbaADA3";
const contractABI = abi.abi;

const Dhrms_Doc_Instance = () => {
    try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const Dhrms_Doc_Contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
        return Dhrms_Doc_Contract;
    } catch (error) {
        console.log(error);
    }
};

export default Dhrms_Doc_Instance;