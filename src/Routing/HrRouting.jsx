import React from 'react'
import Signup from '../LoginAndSignupPages/Signup'
import Login from '../LoginAndSignupPages/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
  Navigate,
} from "react-router-dom";
import Header from '../Components/UserComponents/Header';
import UserHomePage from '../UserPages/UserHomePage';
import AppliedJobs from '../UserPages/AppliedJobs';
import Apply from '../UserPages/Apply';
import Profile from '../UserPages/Profile';
import DisplayJob from '../HRPages/DisplayJob';
import Updatejob from '../HRPages/Updatejob';
import AddJobs from '../HRPages/AddJobs';
import HrPrivateRoute from '../LoginAndSignupPages/HrPrivate';

export default function HrRouting() {
  const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
     
        <Routes>
        <Route path="/" element={<HrPrivateRoute/>}>
        <Route path="/hr/hrhome" exact element={<DisplayJob value1={value1} />} />
        <Route path="/hr/addjob" exact element={<AddJobs value1={value1} />} />
        <Route path="/hr/updatejob" exact element={<Updatejob value1={value1} />} />
       
        </Route>
        </Routes>
      </Router>
      
    </div>
  )
}