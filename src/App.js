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
          <Route exact path="/" element={<Login />} />
          <Route exact path="/govDash" element={<Government />} />
          <Route exact path="/PatientReg" element={<PatientReg />} />
          <Route exact path="/PatientDash" element={<Patient />} />
          <Route exact path="/HospitalDash" element={<Hospital />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
