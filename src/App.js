import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Login from './Pages/login/Login'
import PatientReg from "./Pages/PatientRegistration/PatientReg";

const App = () => {
  return (
    <Router>
        <div className="container">
          <Login />
          {/* <PatientReg/> */}
        </div>
    </Router>
  )
}

export default App