import ApproveInstance2 from "../../instance/ApproveInstance2";

const addGovernmentOfficetoList = async (_officeName, _phoneNumber, _GID) => {
    const approveContract = ApproveInstance2();
    await approveContract.addGovernmentOfficetoList(_officeName, _phoneNumber, _GID);
};

const addHospitaltoList = async (_hospitalName, _phoneNumber, _HID) => {
    const approveContract = ApproveInstance2();
    await approveContract.addHospitaltoList(_hospitalName, _phoneNumber, _HID);
};

const addDoctortoList = async (_doctorName, _phoneNumber, _qualification, _photo, _dob, _HID, _DID, _department) => {
    const approveContract = ApproveInstance2();
    await approveContract.addDoctortoList(_doctorName, _phoneNumber, _qualification, _photo, _dob, _HID, _DID, _department);
};

const addPatienttoList = async (_details, _PID) => {
    const approveContract = ApproveInstance2();
    await approveContract.addPatienttoList(_details, _PID);
};



const getPatientDetails = async (_instanceAddress) => {
    const approveContract = ApproveInstance2();
    const details = await approveContract.getPatientDetails(_instanceAddress);
    return details;
};

const getDoctorDetails = async (_instanceAddress) => {
    const approveContract = ApproveInstance2();
    const details = await approveContract.getDoctorDetails(_instanceAddress);
    return details;
};

const getDoctorH = async (DID) => {
    const contract = ApproveInstance2();
    return await contract.getDoctorH(DID);
};

const getHospitalDetails = async (_instanceAddress) => {
    const approveContract = ApproveInstance2();
    const details = await approveContract.getHospitalDetails(_instanceAddress);
    return details;
};
const getGovernmentDetails = async (_instanceAddress) => {
    const approveContract = ApproveInstance2();
    const details = await approveContract.getGovernmentDetails(_instanceAddress);
    return details;
};

export {
    getPatientDetails,
    getGovernmentDetails,
    getHospitalDetails,
    getDoctorDetails,
    getDoctorH,
    addGovernmentOfficetoList,
    addHospitaltoList,
    addDoctortoList,
    addPatienttoList,
}