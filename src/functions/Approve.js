import ApproveInstance from "../instance/ApproveInstance";
import {getDoctorH} from "./Dhrms";

const addGovernmentOfficetoList = async (_officeName, _phoneNumber, _GID) => {
    const approveContract = ApproveInstance();
    await approveContract.addGovernmentOfficetoList(_officeName, _phoneNumber, _GID);
};

const addHospitaltoList = async (_hospitalName, _phoneNumber, _HID) => {
    const approveContract = ApproveInstance();
    await approveContract.addHospitaltoList(_hospitalName, _phoneNumber, _HID);
};

const addDoctortoList = async (_doctorName, _phoneNumber, _qualification, _photo, _dob, _HID, _DID, _department) => {
    const approveContract = ApproveInstance();
    await approveContract.addDoctortoList(_doctorName, _phoneNumber, _qualification, _photo, _dob, _HID, _DID, _department);
};

const addPatienttoList = async (_details, _PID) => {
    const approveContract = ApproveInstance();
    await approveContract.addPatienttoList(_details, _PID);
};

const approve = async (_userAdd) => {
    const approveContract = ApproveInstance();
    await approveContract.approve(_userAdd);
};





const disApprove = async (_userAdd) => {
    const approveContract = ApproveInstance();
    await approveContract.disApprove(_userAdd);
};

const getPatientDetails = async (_instanceAddress) => {
    const approveContract = ApproveInstance();
    const details = await approveContract.getPatientDetails(_instanceAddress);
    return details;
};

const getDoctorDetails = async (_instanceAddress) => {
    const approveContract = ApproveInstance();
    const details = await approveContract.getDoctorDetails(_instanceAddress);
    return details;
};
const getHospitalDetails = async (_instanceAddress) => {
    const approveContract = ApproveInstance();
    const details = await approveContract.getHospitalDetails(_instanceAddress);
    return details;
};
const getGovernmentDetails = async (_instanceAddress) => {
    const approveContract = ApproveInstance();
    const details = await approveContract.getGovernmentDetails(_instanceAddress);
    return details;
};


const getApproveList = async () => {
    const approveContract = ApproveInstance();
    const list = await approveContract.getApproveList();

    let cleanedList = [];
    list.forEach(item => {
        cleanedList.push(
            {
                instanceAdd: item.instanceAdd,
                userAdd: item.userAdd,
                userType: item.userType,
                timestamp: new Date(item.timestamp * 1000),
            }
        )
    })

    return cleanedList;
};

const getDoctorApproveList = async () => {
    const list = await getApproveList();
    const patList = list.filter((item) => item.userType === "DOC");
    let finalList = [];
 
    for(const item of patList){
        const data = await getDoctorDetails(item.instanceAdd);
        // console.log(data);

        // const ids = await getDoctorH(item.userAdd);
        // console.log(ids);

        finalList.push({
            details: {
                doctorName: data[0],
                phoneNumber: data[1],
                qualification: data[2],
                photo: data[3],
                dob: data[4],
                department: data[5],
                // hid: ids[0],
                // did: ids[1],
            },
            address: item.userAdd,
            timestamp: new Date(item.timestamp * 1000),
        })
    }
   
    return finalList;
};
const getHospitalApproveList = async () => {
    const list = await getApproveList();
    const patList = list.filter((item) => item.userType === "HOS");
    let finalList = [];
    patList.forEach(async item => {
        const data = await getHospitalDetails(item.instanceAdd);
        finalList.push({
            details: {
                hospitalName: data[0],
                phoneNumber: data[1]
            },
            address: item.userAdd,
            timestamp: new Date(item.timestamp * 1000),
        })
    });
    return finalList;
};

const getGovApproveList =  async () => {
    const list = await getApproveList();
    const patList = list.filter((item) => item.userType === "GOV");
    let finalList = [];

    for(const item of patList){
        const data = await getGovernmentDetails(item.instanceAdd);
        finalList.push({
            details: {
                officeName: data[0],
                phoneNumber: data[1]
            },
            address: item.userAdd,
            timestamp: new Date(item.timestamp * 1000),
        })
    }

    return finalList;
};

const getPatientApproveList = async () => {
    const list = await getApproveList();
    const patList = list.filter((item) => item.userType === "PAT");
    let finalList = [];

    console.log(patList);
    
    for(const item of patList){
    const details = await getPatientDetails(item.instanceAdd);
    console.log(details);
        finalList.push({
            details: JSON.parse(details),
            address: item.userAdd,
            timestamp: new Date(item.timestamp * 1000),
        })
    }
    return finalList;
};


export {
    addGovernmentOfficetoList,
    addHospitaltoList,
    addDoctortoList,
    addPatienttoList,
    getApproveList,
    approve,
    disApprove,
    getDoctorApproveList,
    getGovApproveList,
    getHospitalApproveList,
    getPatientApproveList
};