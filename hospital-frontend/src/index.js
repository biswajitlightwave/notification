import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Adddoctor from './Adddoctor';
import Adddepartment from './Adddepartment';
import Patientregister from './Patientregister';
import Patientbooking from './Patientbooking';
import Login from './Login';
import Appointmentlisting from './Appointmentlisting';
import Home from './Home';
import Admin from './Admin';
import Patient from './Patients';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/Adddoctor' element={<Adddoctor></Adddoctor>} />
      <Route path='/Adddepartment' element={<Adddepartment></Adddepartment>} />
      <Route
        path='/Patientregister'
        element={<Patientregister></Patientregister>}
      />
      <Route path='/Login' element={<Login></Login>} />
      <Route
        path='/Patientbooking'
        element={<Patientbooking></Patientbooking>}
      />
      <Route
        path='/Appointmentlisting'
        element={<Appointmentlisting></Appointmentlisting>}
      />
      <Route path='/Admin' element={<Admin></Admin>} />
      <Route path='/Patient' element={<Patient></Patient>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
