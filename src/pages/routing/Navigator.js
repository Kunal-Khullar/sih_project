import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Institute from '../insititution/Institute'
import GoogleStorageFileUploader from '../insititution/Test'
import Manager from '../manager/Manager'
import Login from '../auth/Login'
const Navigator = () => {
  return (
    <div>
         <Router>
        <Routes>
          <Route path="/" exact element={ <Login />} />{" "}
          <Route path="/institute" exact element={ <GoogleStorageFileUploader />} />{" "}
          <Route path="/manager" exact element={ <Manager />} />{" "}
        </Routes>
      </Router>{" "}
    </div>
  )
}

export default Navigator