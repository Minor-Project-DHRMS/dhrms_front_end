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
  await contract.getUploadQueue();
};

const reportUploaded = async (PID, record, CID) => {
  const contract = Dhrms_Hos_Instance();
  await contract.reportUploaded(PID, record, CID);
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
    finalList.push({
      doctorName: data[0],
      phoneNumber: data[1],
      qualification: data[2],
      photo: data[3],
      dob: data[4],
      department: data[5],
    });
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
