import Dhrms_Pat_Instance from "../../instance/Dhrms_Pat_instance";
import { getDoctorDetails } from "./dhrms_doc"
import { getHospitalDetails } from "./dhrms_hos"


const addPatient = async (details, PID) => {
    const contract = Dhrms_Pat_Instance();
    await contract.addPatient(details, PID);
};

const giveReadAccess = async (DID) => {
    const contract = Dhrms_Pat_Instance();
    await contract.giveReadAccess(DID);
};

const giveWriteAccess = async (HID) => {
    const contract = Dhrms_Pat_Instance();
    await contract.giveWriteAccess(HID);
};



const removeReadAccess = async (DID) => {
    const contract = Dhrms_Pat_Instance();
    await contract.removeReadAccess(DID);
};


const removeWriteAccess = async (HID) => {
    const contract = Dhrms_Pat_Instance();
    await contract.removeWriteAccess(HID);
};

const getDoctorsList = async (PID) => {
    const contract = Dhrms_Pat_Instance();
    const list = await contract.getDoctorsList(PID);
    let finalList = [];
    for (const address of list) {
        const data = await getDoctorDetails(address);
        finalList.push(data);
    }
    return finalList;
};


const getHospitalsList = async (PID) => {
    const contract = Dhrms_Pat_Instance();
    const list = await contract.getHospitalsList(PID);
    let hospitalList = [];
    for (const address of list) {
        const data = await getHospitalDetails(address);
        hospitalList.push({
            HID : address,
            hospitalName: data[0],
            phoneNumber: data[1],
        });
    }
    return hospitalList;
};

const getRecordsHistory = async (PID) => {
    const contract = Dhrms_Pat_Instance();
    const list = await contract.getRecordsHistory(PID);
    let recordList = [];
    for (const cid of list) {
        fetch(`https://ipfs.infura.io/ipfs/${cid}`)
            .then((res) => res.json())
            .then( async (record) => {
                const doctorDetails = await getDoctorDetails(record.DID);
                recordList.push({
                    doctorDetails: doctorDetails,
                    recordDetails : record
                });
            });
    }
    return recordList;
};



const getPatientDetails = async (PID) => {
    const contract = Dhrms_Pat_Instance();
    return await contract.getPatientDetails(PID);
};


const getPatientDetailsForGov = async (PID) => {
    const contract = Dhrms_Pat_Instance();
    return await contract.getPatientDetailsForGov(PID);
};

export {
    getPatientDetailsForGov,
    getPatientDetails,
    getRecordsHistory,
    getHospitalsList,
    getDoctorsList,
    removeWriteAccess,
    removeReadAccess,
    giveWriteAccess,
    giveReadAccess,
    addPatient,
};


