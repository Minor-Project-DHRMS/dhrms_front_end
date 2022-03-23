import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Login from "./components/login/Login";
import Government from "./components/government/Government";

import { createBrowserHistory } from "history";
import Patient from "./components/patient/Patient";
export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Patient />
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gov" element={<Government />} />
        </Routes> */}
      </div>
    </Router>
  );
};

export default App;
