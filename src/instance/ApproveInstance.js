import abi from '../utils/approve.json'
import { ethers } from "ethers";

const contractAddress = "0x224eDD48B484Ae02e605c7073eCfC92D21A17C5b";
const contractABI = abi.abi;

const ApproveInstance = () => {
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

export default ApproveInstance;