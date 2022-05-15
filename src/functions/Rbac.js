import RbacInstance from "../services/RbacInstance"

const isGovernment = async (address) => {
    const rbacContract = RbacInstance(window);
    return rbacContract.isGovernment(address);
};

const isHospital = async (address) => {
    const rbacContract = RbacInstance(window);
    return rbacContract.isHospital(address);
};

const isDoctor = async (address) => {
    const rbacContract = RbacInstance(window);
    return rbacContract.isDoctor(address);
};

const isPatient = async (address) => {
    const rbacContract = RbacInstance(window);
    return rbacContract.isPatient(address);
};

export { isGovernment, isHospital, isDoctor, isPatient };