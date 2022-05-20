import Dhrms_Doc_Instance from "../../instance/Dhrms_Doc_Instance";
import {getPatientDetails} from "./dhrms_pat"


const addDoctor = async (
    doctorName,
    phoneNumber,
    qualification,
    photo,
    dob,
    HID,
    DID,
    department
) => {
    const contract = Dhrms_Doc_Instance();
    await contract.addDoctor(
        doctorName,
        phoneNumber,
        qualification,
        photo,
        dob,
        HID,
        DID,
        department
    );
};
const sendRecordsForUpload = async (record) => {
    const contract = Dhrms_Doc_Instance();
    await contract.sendRecordsForUpload(record);
};

const getDoctorDetails = async (DID) => {
    const contract = Dhrms_Doc_Instance();
    return await contract.getDoctorDetails(DID);
};

const getPatientList = async (DID) => {
    const contract = Dhrms_Doc_Instance();
    const list = await contract.getPatientList(DID);
    let finalList = [];
    for (const address of list) {
        const details = await getPatientDetails(address);
        finalList.push(JSON.parse(details));
    }
    return finalList;
};

const getDoctorH = async (DID) => {
    const contract = Dhrms_Doc_Instance();
    return await contract.getDoctorH(DID);
};

export {
    sendRecordsForUpload,
    getDoctorDetails,
    getPatientList,
    getDoctorH,
    addDoctor
};