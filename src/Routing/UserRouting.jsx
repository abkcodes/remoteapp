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
import PrivateRoute from '../LoginAndSignupPages/Private';

export default function UserRouting() {
  const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
     
        <Routes>
        <Route path="/" element={<PrivateRoute />}>
       
        <Route path="/user/userhome" exact element={<UserHomePage value1={value1} />} />
        <Route path="/user/appliedjobs" exact element={<AppliedJobs value1={value1} />} />
        <Route path="/user/applyform" exact element={<Apply value1={value1} />} />
        <Route path="/user/profile" exact element={<Profile value1={value1} />} />
        </Route >
        </Routes>
      </Router>
      
    </div>
  )
}