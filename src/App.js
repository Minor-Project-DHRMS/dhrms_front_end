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
import { QRCodeGen } from "./components/QRPage/QRCodeGen";
import { QRScanner } from "./components/QRScanner/QRScanner";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
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
