import React from 'react'
import AdminHeader from '../Components/AdminComponent/AdminHeader'
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useNavigate,
  } from "react-router-dom";



function AdminHomePage() {
  return (
    <div>

        <AdminHeader />

       
        



       

      <table className=" zindex table table-striped table-bordered">
        <thead>
          <tr>
            <th>JobId</th>
            <th>JobTitle</th>
            <th>JobLocation</th>
            <th>Type</th>
            <th>Description</th>
            <th>Salary</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {/* {data.map((datas) => ( */}
            <tr 
            // key={datas.admissionId}
            >
              <td>
                {/* {datas.userId} */}
                hello
                </td>
              <td> hello</td>
              <td>
                hello
              </td>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
              
              
              
              <td>
              <Link to="/user/applyform"  style={{color:"white", textDecoration:"none"} } underline='none'>
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
                    Apply{" "}
                  </button>
                  </ Link>
                {/* </a> */}
              

                
              </td>
            </tr>

           {/* ))}  */}

         

       

       

          
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



      {/* <Link
          to="/admin/AddCourses"
          style={{ color: "white", textDecoration: "none" }}
        > */}
          <Button
            className="btn btn-submit"
            type="submit"
            variant="contained"
            style={{ margin: "5px" }}
            startIcon={<Add />}
            color="primary"
          >
            Add Employee
          </Button>
        {/* </Link> */}



      </div>
     
    
  )
}

export default AdminHomePage