import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Government from "./Pages/government/Government";
import Hospital from "./Pages/hospital/Hospital";
import Login from "./Pages/login/Login";
import Patient from "./Pages/patient/Patient";
import PatientReg from "./Pages/PatientRegistration/PatientReg";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Patient />} />
          <Route path="/gov" element={<Government />} />
        </Routes>
        {/* <PatientReg/> */}
      </div>
    </Router>
  );
};

export default App;
