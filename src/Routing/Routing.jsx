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
import SearchBar from '../Components/UserComponents/SearchBar';

export default function Routing() {
  const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
        
        <Routes>
        <Route path="/Register" exact element={<Signup value1={value1} />} />
        <Route path="/" exact element={<Login value1={value1} />} />
        </Routes>
      </Router>
      
    </div>
  )
}
