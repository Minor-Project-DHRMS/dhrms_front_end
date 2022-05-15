import abi from '../utils/approve.json'
import { ethers } from "ethers";

const contractAddress = "0x0a51A1dAC6a77F03441477457CB5c0f5256B2DDe";
const contractABI = abi.abi;

const DhrmsIntance = (window) => {
    try {
        const { ethereum } = window;

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
        }
        
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const dhrmsContract = new ethers.Contract(contractAddress, contractABI, signer);
        return dhrmsContract;

    } catch (error) {
        console.log(error)
    }
}

export default DhrmsIntance;