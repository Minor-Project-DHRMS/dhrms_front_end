import abi from "../utils/dhrms_hos.json";
import { ethers } from "ethers";

// const contractAddress = "0x96428b6b621D4A3CA50E2Ee6bE9Fc5fE06367B6C";
const contractAddress = "0xA95eA4e9673F052F08f769231c517c2909BCC845";
const contractABI = abi.abi;

const Dhrms_Hos_Instance = () => {
    try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const Dhrms_Hos_Contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
        return Dhrms_Hos_Contract;
    } catch (error) {
        console.log(error);
    }
};

export default Dhrms_Hos_Instance;
