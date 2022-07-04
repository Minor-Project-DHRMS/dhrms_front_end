import abi from "../utils/storage.json";
import { ethers } from "ethers";

// RBACContract add: 0x0f204B87361c8Acd93ebce7dFE7c069e91557C96
// DHRMSContract add: 0xc782d94020ace0e393fA3d03166AC254731fe2A0
// DHRMS_GOV_Contract add: 0x0233D05979A53CA602f6dB1CD8Ce4D01b7CF5660
// DHRMS_HOS_Contract add: 0xe6D107500370Ef9Ab98836e8cC68b5c77151C682
// DHRMS_DOC_Contract add: 0xbA2D2217d52485703fE77d3f76498bd0ca830d98
// DHRMS_PAT_Contract add: 0x1C51b930F53e20c8190d178163560c68e03d0d4A
// approveContract1 add: 0x50f881fE9B2192D75DA278be084C9d4338bb1Fdb
// approveContract2 add: 0x4A97c8602118164eB92FC7f88494EA5320ceDF03

const contractAddress = "0xc782d94020ace0e393fA3d03166AC254731fe2A0";
const contractABI = abi.abi;

const StorageInstance = () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const StorageContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    return StorageContract;
  } catch (error) {
    console.log(error);
  }
};

export default StorageInstance;
