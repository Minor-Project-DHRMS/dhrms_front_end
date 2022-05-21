import abi from "../utils/approve2.json";
import { ethers } from "ethers";

// const contractAddress = "0xB411641A967366282C6F47ae86604F5E7aBB9C97";
const contractAddress = "0x51db36BE132cA2a81f948F41AD5B7788e8002AAd";
const contractABI = abi.abi;

const ApproveInstance2 = () => {
    try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const approveContract2 = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
        return approveContract2;
    } catch (error) {
        console.log(error);
    }
};

export default ApproveInstance2;
