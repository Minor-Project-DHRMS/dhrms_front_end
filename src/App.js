import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Government from "./Pages/government/Government";
import Hospital from "./Pages/hospital/Hospital";
import Login from "./Pages/login/Login";
import Patient from "./Pages/patient/Patient";
import PatientReg from "./Pages/PatientRegistration/PatientReg";
import DocDash from "./Pages/DoctorDash/DocDash"
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

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
        <Route path="/" element={<Docregs/>} />
        <Route path="/govtregdet" element={<Govtregdet/>} />
        <Route path="/hospreg" element={<Hospreg/>} />
        <Route path="/patientregs" element={<Patientregs/>} />
        <Route path="/docdash" element={<DocDash/>} />
          <Route path="/medicalrepupload" element={<Body/>} />
          <Route path="/hospApprov" element={<Hospitalapprov/>}/>
          <Route path="/govapprov" element={<Govapprov/>}/>
          <Route path="/docapprov" element={<Docapprov/>}/>
          <Route path="/paitentsapprov" element={<Paitentsapprov/>}/>
          <Route path="/gov" element={<Government />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
