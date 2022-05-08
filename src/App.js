import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { DoctorReg } from "./Pages/doctorRegistration/DoctorReg";
import Government from "./Pages/government/Government";
import { GovernmentReg } from "./Pages/governmentRegistration/GovernmentReg";
import Hospital from "./Pages/hospital/Hospital";
import { HospitalReg } from "./Pages/hospitalRegistration/HospitalReg";
import { IPFS } from "./Pages/IPFS/IPFS";
import Login from "./Pages/login/Login";
import Patient from "./Pages/patient/Patient";
import PatientReg from "./Pages/PatientRegistration/PatientReg";
import PatientDetails from "./Pages/medicalReport/PatientDetails"
import ViewScan from "./Pages/viewScans/ViewScan"
import ListScan from "./Pages/listScans/ListScan"
import ViewReport from "./Pages/viewReport/viewReport"
import ListReport from "./Pages/listReport/ListReport"
import IPFS from "./Pages/ipfs/Ipfs"

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Government />} />
          <Route path="/gov" element={<Government />} />
          <Route path="/ipfs" element={<IPFS />} />
          <Route path="/medicalReport" element={<PatientDetails />} />
          <Route path="/viewScan" element={<ViewScan />} />
          <Route path="/viewReport" element={<ViewReport />} />
          <Route path="/listScan" element={<ListScan />} />
          <Route path="/listReport" element={<ListReport />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/govDash" element={<Government />} />
          <Route exact path="/PatientReg" element={<PatientReg />} />
          <Route exact path="/PatientDash" element={<Patient />} />
          <Route exact path="/HospitalDash" element={<Hospital />} />
          <Route path="/docreg" element={<DoctorReg />} />
          <Route path="/hosreg" element={<HospitalReg />} />
          <Route path="/govReg" element={<GovernmentReg />} />
          <Route
            path="/qr"
            element={
              <QRCodeGen text={"0x71C7656EC7ab88b098defB751B7401B5f6d8976F"} />
            }
          />
          <Route path="/" element={<Patient />} />
          <Route path="/scan" element={<QRScanner />} />
          <Route path="/gov" element={<Government />} />
          <Route path="/hos" element={<Hospital />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
