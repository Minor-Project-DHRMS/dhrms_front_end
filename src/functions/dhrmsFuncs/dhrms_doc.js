import Dhrms_Doc_Instance from "../../instance/Dhrms_Doc_Instance";
import { getHospitalDetails } from "./dhrms_hos";
import { getPatientDetails } from "./dhrms_pat";

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
  const data = await contract.getDoctorDetails(DID);
  const hosAdd = await contract.getDoctorH(DID);
  const hosDetails = await getHospitalDetails(hosAdd);
  const url = `https://ipfs.infura.io/ipfs/${data[3]}`;
  let details = {
    doctorName: data[0],
    phoneNumber: data[1],
    qualification: data[2],
    photo: url,
    dob: data[4],
    department: data[5],
    DID: DID,
    hosDetails: {
        hospitalName: hosDetails[0],
        phoneNumber: hosDetails[1],
        HID: hosAdd
    },
  };

  return details;
};

const getPatientList = async (DID) => {
  const contract = Dhrms_Doc_Instance();
  console.log(contract);
  const list = await contract.getPatientListOfDoc(DID);
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
  addDoctor,
};
