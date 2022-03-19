import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';


import Login from "./components/login/Login";

const App = () => {
  return (
    <Router>
        <div className="container">
            <Login/>
        </div>
    </Router>
  )
}

export default App