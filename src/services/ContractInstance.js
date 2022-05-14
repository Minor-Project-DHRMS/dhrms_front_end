import abi from '../utils/approve.json'
import { ethers } from "ethers";

const contractAddress = "0x231f7228D5dE0d614757394A907D5b1Ee7471858";
const contractABI = abi.abi;

const ContractInstance = (window) => {
    try {
        const { ethereum } = window;

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
        }
        
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const approveContract = new ethers.Contract(contractAddress, contractABI, signer);
        return approveContract;

    } catch (error) {
        console.log(error)
    }
}

export default ContractInstance;