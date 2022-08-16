import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Student from '../student/Student'
import Institute from '../insititution/Institute'
import Manager from '../manager/Manager'
import Login from '../auth/Login'
const Navigator = () => {
  return (
    <div>
         <Router>
        <Routes>
          <Route path="/" exact element={ <Login />} />{" "}
          <Route path="/institute" exact element={ <Institute />} />{" "}
          <Route path="/manager" exact element={ <Manager />} />{" "}
        </Routes>
      </Router>{" "}
    </div>
  )
}

export default Navigator