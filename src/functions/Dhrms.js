import DhrmsIntance from "../instance/DhrmsIntance";

const addGovernmentOffice = async (officeName, phoneNumber, GID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.addGovernmentOffice(officeName, phoneNumber, GID);
};

const addHospital = async (hospitalName, phoneNumber, HID) => {
  const dhrmsContract = DhrmsIntance();
  return await dhrmsContract.addHospital(hospitalName, phoneNumber, HID);
};

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
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.addDoctor(
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

const addPatient = async (details, PID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.addPatient(details, PID);
};

const giveReadAccess = async (DID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.giveReadAccess(DID);
};

const giveWriteAccess = async (HID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.giveWriteAccess(HID);
};

const removeReadAccess = async (DID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.removeReadAccess(DID);
};

const removeWriteAccess = async (HID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.removeWriteAccess(HID);
};

const sendRecordsForUpload = async (file, PID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.sendRecordsForUpload(file, PID);
};

const sendRecordsForUploadH = async (file, PID, HID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.sendRecordsForUploadH(file, PID, HID);
};

const reportUploaded = async (PID, CID) => {
  const dhrmsContract = DhrmsIntance();
  await dhrmsContract.reportUploaded(PID, CID);
};

const getDoctorsList = async (PID) => {
  const dhrmsContract = DhrmsIntance();
  const list = await dhrmsContract.getDoctorsList(PID);
  let finalList = [];
  list.forEach(async address => {
      const data = await getDoctorDetails(address);
      finalList.push({
              doctorName: data[0],
              phoneNumber: data[1],
              qualification: data[2],
              photo: data[3],
              dob: data[4],
              department: data[5]
      })
  });
  return finalList;
};

const getHospitalsList = async (PID) => {
  const dhrmsContract = DhrmsIntance();
  const list = await dhrmsContract.getHospitalsList(PID);
    let finalList = [];
    list.forEach(async address => {
        const data = await getHospitalDetails(address);
        finalList.push({
                hospitalName: data[0],
                phoneNumber: data[1]
        })
    });
    return finalList;
};

const getRecordsHistory = async (PID) => {
  const dhrmsContract = DhrmsIntance();
  return await dhrmsContract.getRecordsHistory(PID);
};

const getPatientDetails = async (PID) => {
  const dhrmsContract = DhrmsIntance();
  return await dhrmsContract.getPatientDetails(PID);
};

const getPatientDetailsForGov = async (PID) => {
  const dhrmsContract = DhrmsIntance();
  return await dhrmsContract.getPatientDetailsForGov(PID);
};

const getDoctorDetails = async (DID) => {
  const dhrmsContract = DhrmsIntance();
  return await dhrmsContract.getDoctorDetails(DID);
};

const getPatientList = async (DID) => {
  const dhrmsContract = DhrmsIntance();
  const list = await dhrmsContract.getPatientList(DID);
    let finalList = [];
    list.forEach(async address => {
        const details = await getPatientDetails(address);
        finalList.push(
            JSON.parse(details)
        )
    });
    return finalList;
};

const getDoctorH = async (DID) => {
  const dhrmsContract = DhrmsIntance();
  return await dhrmsContract.getDoctorH(DID);
};

const getHospitalDetails = async (HID) => {
  const dhrmsContract = DhrmsIntance();
  return await dhrmsContract.getHospitalDetails(HID);
};

const getHospitalDoctorList = async (HID) => {
  const dhrmsContract = DhrmsIntance();
  const list = await dhrmsContract.getHospitalDoctorList(HID);
  let finalList = [];
  list.forEach(async address => {
      const data = await getDoctorDetails(address);
      finalList.push({
              doctorName: data[0],
              phoneNumber: data[1],
              qualification: data[2],
              photo: data[3],
              dob: data[4],
              department: data[5]
      })
  });
  return finalList;

};

const getHospitalPatientList = async (HID) => {
  const dhrmsContract = DhrmsIntance();
  const list = await dhrmsContract.getHospitalPatientList(HID);
    let finalList = [];
    list.forEach(async address => {
        const details = await getPatientDetails(address);
        finalList.push(
            JSON.parse(details)
        )
    });
    return finalList;
};

const getGovernmentDetails = async (GID) => {
  const dhrmsContract = DhrmsIntance();
  return await dhrmsContract.getGovernmentDetails(GID);
};

export {
  addGovernmentOffice,
  addHospital,
  addDoctor,
  addPatient,
  giveReadAccess,
  giveWriteAccess,
  removeReadAccess,
  removeWriteAccess,
  sendRecordsForUpload,
  sendRecordsForUploadH,
  reportUploaded,
  getDoctorsList,
  getHospitalsList,
  getRecordsHistory,
  getPatientDetails,
  getPatientDetailsForGov,
  getDoctorDetails,
  getPatientList,
  getDoctorH,
  getHospitalDetails,
  getHospitalDoctorList,
  getHospitalPatientList,
  getGovernmentDetails,
};
