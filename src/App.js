import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Government from "./Pages/government/Government";
import Hospital from "./Pages/hospital/Hospital";
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
        </Routes>
        {/* <PatientReg/> */}
      </div>
    </Router>
  );
};

export default App;
