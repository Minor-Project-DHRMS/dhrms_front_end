import abi from "../utils/storage.json";
import { ethers } from "ethers";

// RBACContract add: 0x7dad8d884C4E0df7d3584C5d06E7849c473d9E26
// DHRMSContract add: 0x490bb844C4e4C337638508a68881b02886b299db
// DHRMS_GOV_Contract add: 0xAE773881A97380250322fc02D9fD44c098C5521C
// DHRMS_HOS_Contract add: 0x34d8e02b98f6c47814208BB9F68d588F28448Fc0
// DHRMS_DOC_Contract add: 0x6A9F51581a1c6442571Ea1C091e199802BbaADA3
// DHRMS_PAT_Contract add: 0xbBA6e467C08412E26F2438dD07Ece2CEFdaB669B
// approveContract1 add: 0xFdA1f0DC447c099d94E98D9fAf9afED13616fDda
// approveContract2 add: 0xDc0924F76074eF3e0BA7b856BFf55AcaE69b341C

const contractAddress = "0x2baF1A4753BDa7d5209A4b17d7fB70122FA8e720";
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
