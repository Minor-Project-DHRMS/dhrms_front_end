import abi from '../utils/rbac.json'
import { ethers } from "ethers";
// 0x0281e430ab81D59F85a6ecb66BD9f894e17354B1
// const contractAddress = "0x1089b53481BD2932D7BAf2E9DBb406B8B62150F6";
const contractAddress = "0x0f204B87361c8Acd93ebce7dFE7c069e91557C96";
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