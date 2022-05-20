import abi from "../utils/storage.json";
import { ethers } from "ethers";

// RBACContract add: 0x8824F120DB505CF94E0E8C11754Ac0569057f009
// DHRMSContract add: 0x0ADbc3BFaD791733620Ab2FDc28e9eca3ff5f2c8
// DHRMS_GOV_Contract add: 0xC4d38287d958815B7BCAD2498b86AB85E7f3f940
// DHRMS_HOS_Contract add: 0xA95eA4e9673F052F08f769231c517c2909BCC845
// DHRMS_DOC_Contract add: 0xC975def2d43f0E04d883332EA33BbEad0A255783
// DHRMS_PAT_Contract add: 0xf24d996E24b534Cf06eE9e296141Cb2f747d58dc
// approveContract1 add: 0xca95E6AB3a6FAF0BB376763157075038cb60BbFe
// approveContract2 add: 0xc3a742fd552EAe85b84DA955a1B244dd3BA1E204


const contractAddress = "0x0ADbc3BFaD791733620Ab2FDc28e9eca3ff5f2c8";
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
