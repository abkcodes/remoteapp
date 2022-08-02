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
import AdminHomePage from '../AdminPages/AdminHomePage';
import AdminPrivateRoute from '../LoginAndSignupPages/AdminPrivate';

export default function AdminRouting() {
  const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
     
        <Routes>
        <Route path="/" element={<AdminPrivateRoute/>}>
       
        <Route path="/admin/adminhome" exact element={<AdminHomePage value1={value1} />} />
      </ Route>
        
        </Routes>
      </Router>
      
    </div>
  )
}