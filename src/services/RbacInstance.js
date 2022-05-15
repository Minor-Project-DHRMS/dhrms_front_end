import abi from '../utils/rbac.json'
import { ethers } from "ethers";

const contractAddress = "0xBd892507B87dCAF2d8ea780550D3D1b8fa8342FF";
const contractABI = abi.abi;

const RbacInstance = (window) => {
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