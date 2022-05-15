import abi from '../utils/rbac.json'
import { ethers } from "ethers";

const contractAddress = "0x1089b53481BD2932D7BAf2E9DBb406B8B62150F6";
const contractABI = abi.abi;

const RbacInstance = () => {
    try {
        const { ethereum } = window;

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
        }
        
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const rbacContract = new ethers.Contract(contractAddress, contractABI, signer);
        return rbacContract;

    } catch (error) {
        console.log(error)
    }
}

export default RbacInstance;