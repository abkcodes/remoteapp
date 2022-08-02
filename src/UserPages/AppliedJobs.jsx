import React, { useEffect, useState } from 'react'
import CardJob from '../Components/UserComponents/CardJob'
import Header from '../Components/UserComponents/Header'
import SearchBar from '../Components/UserComponents/SearchBar'
import Button from "@mui/material/Button";
import "./UserHomePage.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";


function AppliedJobs() {
  

  const [data,setData]=useState([]);

  useEffect(()=>{
   getadmission();
  },[]);
  function getadmission(){
    fetch("http://localhost:8096/")
    .then((response)=>response.json())
    .then((p) => setData(p)
         
    );
  }





  return (
    
    <div>
<Header />
<table className=" zindex table table-striped table-bordered">
        <thead>
          <tr>
            <th>EmployeeEmail</th>
            <th>JobId</th>
            <th>Resume</th>
            <th>Actions</th>
            
            
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr 
            key={datas.jobid}
            >
              <td>
                {datas.email}
               
                </td>
              
              <td>{datas.jobid}</td>
              <td>{datas.jobdesc}</td>
              
              
              
              <td>
                
                {/* <a
                  onClick={() => {
                    console.log("datas before passs :");
                    console.log(datas.admissionId);
                    addid(datas.admissionId);
                  }}
                > */}
                  <button
                    className="zindex"
                   
                    variant="contained"
                    style={{
                      margin: "5px",
                      backgroundColor: "blue",
                      color: "white",
                      zIndex: -1,
                    }}
                    endIcon={<Edit />}
                    color="primary"
                  >
                    Status{" "}
                  </button>

                  <button
                    className="zindex"
                   
                    variant="contained"
                    style={{
                      margin: "5px",
                      backgroundColor: "blue",
                      color: "white",
                      zIndex: -1,
                    }}
                    endIcon={<Delete />}
                    color="primary"
                  >
                    Delete{" "}
                  </button>


                {/* </a> */}
              

                
              </td>
            </tr>

         ))} 

         

       

       

          
        </tbody>
      </table>
      <div className="btnadd">
        {/* <Link
          to="/admin/AddUser"
          style={{ color: "white", textDecoration: "none" }}
        > */}
       
        {/* </Link> */}
      </div>
      {/* <Outlet /> */}

    </div>
  )
}

export default AppliedJobs