import Dhrms_Gov_Instance from "../../instance/Dhrms_Gov_instance";


const getGovernmentDetails = async (GID) => {
    const contract = Dhrms_Gov_Instance();
    return await contract.getGovernmentDetails(GID);
};

const addGovernmentOffice = async (officeName, phoneNumber, GID) => {
    const contract = Dhrms_Gov_Instance();
    await contract.addGovernmentOffice(officeName, phoneNumber, GID);
};

export {
    getGovernmentDetails,
    addGovernmentOffice
};
