import Dhrms_Hos_Instance from "../../instance/Dhrms_Hos_instance";
import { getPatientDetails } from "./dhrms_pat"
import { getDoctorDetails } from "./dhrms_doc"


const addHospital = async (hospitalName, phoneNumber, HID) => {
    const contract = Dhrms_Hos_Instance();
    return await contract.addHospital(hospitalName, phoneNumber, HID);
};
  
const sendRecordsForUploadH = async (record) => {
  const contract = Dhrms_Hos_Instance();
  await contract.sendRecordsForUploadH(record);
};

const getUploadQueue = async () => {
  const contract = Dhrms_Hos_Instance();
  const records = await contract.getUploadQueue();
  let recordList = [];
  for (const record of records) {
    const recordDetails = JSON.parse(record);
    const patientDetails = JSON.parse(await getPatientDetails(recordDetails.PID));
    recordList.push({
        patientDetails: patientDetails,
        recordDetails : recordDetails
    });
  }
  return recordList;
};

const reportUploaded = async (PID, CID, record) => {
  const contract = Dhrms_Hos_Instance();
  await contract.reportUploaded(PID, CID, JSON.stringify(record));
};

const getHospitalDetails = async (HID) => {
  const contract = Dhrms_Hos_Instance();
  return await contract.getHospitalDetails(HID);
};

const getHospitalDoctorList = async (HID) => {
  const contract = Dhrms_Hos_Instance();
  const list = await contract.getHospitalDoctorList(HID);
  let finalList = [];
  for (const address of list) {
    const data = await getDoctorDetails(address);
    finalList.push(data);
  }
  return finalList;
};

const getHospitalPatientList = async (HID) => {
  const contract = Dhrms_Hos_Instance();
  const list = await contract.getHospitalPatientList(HID);
  let finalList = [];
  for (const address of list) {
    const details = await getPatientDetails(address);
    finalList.push(JSON.parse(details));
  }
  return finalList;
};

export {
  addHospital,
  sendRecordsForUploadH,
  getUploadQueue,
  reportUploaded,
  getHospitalDetails,
  getHospitalDoctorList,
  getHospitalPatientList,
};
