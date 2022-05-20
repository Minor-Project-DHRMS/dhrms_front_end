import abi from "../utils/dhrms_gov.json";
import { ethers } from "ethers";

// const contractAddress = "0x96428b6b621D4A3CA50E2Ee6bE9Fc5fE06367B6C";
const contractAddress = "0xC4d38287d958815B7BCAD2498b86AB85E7f3f940";
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
