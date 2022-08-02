import React from 'react'
import "./DisplayJob.jsx";
import { useState } from 'react';
import { useEffect } from 'react';
import{BrowserRouter as Router, Routes,Route,Link,Outlet, Navigate, useNavigate,} from "react-router-dom";
import HrHeader from '../Components/HrComponents/HrHeader.jsx';
import { Add, Edit } from '@mui/icons-material';
import { Button } from '@mui/material';

const heading={
    color: "#a40865",fontStyle: "bold", fontWeight: "bold",fontSize: "larger"
}
function DisplayJob() {

  const [data,setData]=useState([]);
  const navigate= useNavigate();
  useEffect(()=>{
   getadmission();
  },[]);
  function getadmission(){
    fetch("http://localhost:8096/hr/getalljobs")
    .then((response)=>response.json())
    .then((p) => setData(p)
         
    );
  }

  function deleteadmission(jobid)
{
  // alert(id)
  fetch("http://localhost:8096/hr/delete/"+`${jobid}`,{
    method:'DELETE'
  }).then((response)=>{
    response.json().then((resp)=>{
      console.warn()
      console.log("deleted")
    })
     
  
  })
}




function addid(adm_id) {
  console.log("inside addid user adm_id is:");
  console.log(adm_id);
  const toEditUser = () => {
    console.log(adm_id);
    navigate("/hr/updatejob", {
      state: { admid: { adm_id } },
    });
  };
  toEditUser();
}
  return (
    <div>
      <HrHeader />
        <center> <h1 style={heading}> JOBS </h1> <br></br></center>
        <table className = " zindex table table-striped table-bordered">

    <thead>
       <tr>
      
           <th>JobId</th>
           <th>JobTitle</th>
           <th>JobLocation</th>
           <th>JobType</th>
           <th>Job Description</th>
           <th>Salary</th>
           <th>Delete</th>
           <th>Update</th>
           
   
       </tr>
    </thead>
    <tbody>
 


    {data.map(datas=>(

<tr key={datas.jobid}>


  {/* <td>{datas.userId}</td> */}
  <td>{datas.jobid}</td>
  <td>{datas.jobtitle}</td>
  <td>{datas.joblocation}</td>
  <td>{datas.jobtype}</td>
  <td>{datas.jobdesc}</td>
  <td>{datas.salary}</td>
  <td>
  <button 
  onClick={()=>deleteadmission(datas.jobid)}> Delete</button>
               <a
                  onClick={() => {
                    console.log("datas before passs :");
                    console.log(datas.jobid);
                    addid(datas.jobid);
                  }}
                >
                  <button
                    className="zindex"
                    // onClick={()=>selectUser(datas.id)}
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
                    Update/View{" "}
                  </button>
                </a>

    
  </td>
  <td>
  update
  </td>
  </tr>

 

))}      
     
  

  </tbody>
        </table>
        <Link
          to="/hr/addjob"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            className="btn btn-submit"
            //  onClick={getemail}
            type="submit"
            variant="contained"
            style={{ margin: "5px", zIndex: -1 }}
            startIcon={<Add />}
            color="primary"
          >
            Add Student{" "}
          </Button>
        </Link>
        </div>
  )
}

export default DisplayJob

