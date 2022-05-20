import DhrmsIntance from "../instance/StorageInstance";
import client from "../services/FileUpload";

import {
  sendRecordsForUpload,
  getDoctorDetails,
  getPatientList,
  getDoctorH,
  addDoctor,
} from "../functions/dhrmsFuncs/dhrms_doc";
import {
  addHospital,
  sendRecordsForUploadH,
  getUploadQueue,
  reportUploaded,
  getHospitalDetails,
  getHospitalDoctorList,
  getHospitalPatientList,
} from "../functions/dhrmsFuncs/dhrms_hos";
import {
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
} from "../functions/dhrmsFuncs/dhrms_pat";
import {
  getGovernmentDetails,
  addGovernmentOffice,
} from "../functions/dhrmsFuncs/dhrms_gov";

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
  getUploadQueue,
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
