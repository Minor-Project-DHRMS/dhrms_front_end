import {Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { DoctorReg } from "./Pages/doctorRegistration/DoctorReg";
import Government from "./Pages/government/Government";
import { GovernmentReg } from "./Pages/governmentRegistration/GovernmentReg";
import Hospital from "./Pages/hospital/Hospital";
import { HospitalReg } from "./Pages/hospitalRegistration/HospitalReg";
// import { IPFS } from "./Pages/IPFS/IPFS";
import Login from "./Pages/login/Login";
import Patient from "./Pages/patient/Patient";
import MoreDetails from "./Pages/patient/MoreDetails";
import PatientReg from "./Pages/PatientRegistration/PatientReg";
import DocDash from "./Pages/DoctorDash/DocDash";
import UploadRepo from "./Pages/MedicRepoView/body";
import Paitentsapprov from "./Pages/Approval/paitent-approve";
import Docapprov from "./Pages/Approval/doctor-approval";
import Govapprov from "./Pages/Approval/govApproval";
import Hospitalapprov from "./Pages/Approval/hospitalApprov";
import Body from "./Pages/MedicRepoView/body";
import Patientregs from "./Pages/Approval/RegDetails/paitentreg";
import Hospreg from "./Pages/Approval/RegDetails/hospreg";
import Govtregdet from "./Pages/Approval/RegDetails/govreg";
import Docregs from "./Pages/Approval/RegDetails/docreg";
import PatientDetails from "./Pages/medicalReport/PatientDetails";
import ViewScan from "./Pages/viewScans/ViewScan";
import ListScan from "./Pages/listScans/ListScan";
import ViewReport from "./Pages/viewReport/viewReport";
import ListReport from "./Pages/listReport/ListReport";
import { QRCodeGen } from "./components/QRPage/QRCodeGen";
import { QRScanner } from "./components/QRScanner/QRScanner";
import Register from "./Pages/login/Register";
import PatientDetailsView from "./Pages/GovMedicalRepoView/PatientDetailsView"
import Test from "./test/test";
import ViewPatientDetails from "./components/ViewPatientDetails/ViewPatientDetails";
import Prescriptions from "./Pages/patient/Prescriptions";

const App = () => {
  return (
      <div className="container">
        <Routes>
          //General pages
          <Route  exact path="/"  element={<Login />} />

          <Route  path="/viewPatDetails" element={<ViewPatientDetails />} />

          //approval pages
          <Route  path="/approveDoc" element={<Docregs />} />
          <Route  path="/approveGov" element={<Govtregdet />} />
          <Route  path="/approveHos" element={<Hospreg />} />
          <Route  path="/approvePat" element={<Patientregs />} />
          //Aprroval Lists
          <Route  path="/hospApprovlist" element={<Hospitalapprov />} />
          <Route  path="/govapprovlist" element={<Govapprov />} />
          <Route  path="/docapprovlist" element={<Docapprov />} />
          <Route
            
            path="/paitentsapprovlist"
            element={<Paitentsapprov />}
          />
          //Medical Report pages
          <Route  path="/medicalrepupload" element={<Body />} />
          <Route  path="/medicalReport" element={<PatientDetails />} />
          <Route  path="/medicalReportview" element={<PatientDetailsView />} />
          <Route  path="/viewScan" element={<ViewScan />} />
          <Route  path="/viewReport" element={<ViewReport />} />
          <Route  path="/listScan" element={<ListScan />} />
          <Route  path="/listReport" element={<ListReport />} />
          //login
          <Route  path="/register" element={<Register />} />
          <Route  path="/test" element={<Test />} />
          //Dash Boards
          <Route  path="/govDash" element={<Government />} />
          <Route  path="/PatientDash" element={<Patient />} />
          <Route  path="/moreDetails" element={<MoreDetails />} />
          <Route path="/qrscan" element={<QRScanner />} />
          <Route path="/prescription" element={<Prescriptions />} />
          <Route path="/docdash" element={<DocDash />} />
          <Route  path="/HospitalDash" element={<Hospital />} />
          <Route
            path="/QRCode"
            element={
              <QRCodeGen />
            }
          />
          //Regsitration Pages
          <Route  path="/docreg" element={<DoctorReg />} />
          <Route  path="/hosreg" element={<HospitalReg />} />
          <Route  path="/govReg" element={<GovernmentReg />} />
          <Route  path="/PatientReg" element={<PatientReg />} />
          
          
        </Routes>
      </div>
  );
};

export default App;
