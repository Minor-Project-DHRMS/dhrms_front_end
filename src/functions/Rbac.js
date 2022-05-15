import RbacInstance from "../instance/RbacInstance"

const isGovernment = async (address) => {
    const rbacContract = RbacInstance(window);
    return await rbacContract.isGovernment(address);
};

const isHospital = async (address) => {
    const rbacContract = RbacInstance(window);
    return await rbacContract.isHospital(address);
};

const isDoctor = async (address) => {
    const rbacContract = RbacInstance(window);
    return await rbacContract.isDoctor(address);
};

const isPatient = async (address) => {
    const rbacContract = RbacInstance(window);
    return await rbacContract.isPatient(address);
};

export { isGovernment, isHospital, isDoctor, isPatient };