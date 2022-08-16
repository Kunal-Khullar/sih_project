import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Manager from '../manager/Manager'
import Login from '../auth/Login'
import PanelDashboard from '../insititution/PanelDashboard';
const Navigator = () => {
  return (
    <div>
         <Router>
        <Routes>
          <Route path="/" exact element={ <Login />} />{" "}
          <Route path="/institute" exact element={ <PanelDashboard />} />{" "}
          <Route path="/manager" exact element={ <Manager />} />{" "}
        </Routes>
      </Router>{" "}
    </div>
  )
}

export default Navigator