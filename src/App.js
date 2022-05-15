import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          //approval pages
          <Route exact path="/approveDoc" element={<Docregs />} />
          <Route exact path="/approveGov" element={<Govtregdet />} />
          <Route exact path="/approveHos" element={<Hospreg />} />
          <Route exact path="/approvePat" element={<Patientregs />} />
          //Aprroval Lists
          <Route exact path="/hospApprovlist" element={<Hospitalapprov />} />
          <Route exact path="/govapprovlist" element={<Govapprov />} />
          <Route exact path="/docapprovlist" element={<Docapprov />} />
          <Route
            exact
            path="/paitentsapprovlist"
            element={<Paitentsapprov />}
          />
          //Medical Report pages
          <Route exact path="/medicalrepupload" element={<Body />} />
          <Route exact path="/medicalReport" element={<PatientDetails />} />
          <Route exact path="/viewScan" element={<ViewScan />} />
          <Route exact path="/viewReport" element={<ViewReport />} />
          <Route exact path="/listScan" element={<ListScan />} />
          <Route exact path="/listReport" element={<ListReport />} />
          //login
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/ipfs" element={<IPFS />} />
          //Dash Boards
          <Route exact path="/govDash" element={<Government />} />
          <Route exact path="/PatientDash" element={<Patient />} />
          <Route exact path="/moreDetails" element={<MoreDetails />} />
          <Route path="moreDetails/qrscan" element={<QRScanner />} />
          <Route path="/docdash" element={<DocDash />} />
          <Route
            path="/PatientDash/moredetails"
            element={
              <QRCodeGen />
            }
          />
          <Route exact path="/HospitalDash" element={<Hospital />} />
          <Route
            path="/HospitalDash/QRCode"
            element={
              <QRCodeGen />
            }
          />
          //Regsitration Pages
          <Route exact path="/docreg" element={<DoctorReg />} />
          <Route exact path="/hosreg" element={<HospitalReg />} />
          <Route exact path="/govReg" element={<GovernmentReg />} />
          <Route exact path="/PatientReg" element={<PatientReg />} />
          
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
