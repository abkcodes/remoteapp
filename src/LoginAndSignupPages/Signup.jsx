import React, { useState } from 'react'
import './Login.css'


 const labe={
  backgroundColor:'#F8EFF4',
  borderRadius:'20px',
  height:'20px',
  width:'250px',
  textAlign:'center',
  border:'1px solid black'
 }
  const p={
    fontSize: "10px",
    margin:"5px",
    
}
const h1={
    fontSize: "15px",
    color: "#a40865"
}
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
} 
const butt={
    
    backgroundColor: "#a40865",
    color:"white",
    cursor:'pointer'
}

const di={
    height:"80%",
    
    
    
}
const text={
    border: "1px solid black",
    borderRadius: "25px",textAlign:'center',
    backgroundColor:'#F8EFF4'
}

const Signup = (value1) => {
   
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[mobileNumber,setMobile]=useState("");
    const[role,setRole]=useState("");
    const[userName,setName]=useState("");
   
    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert("submitted");
        
        setEmail('')
        setPassword('')
        setMobile('')
        setRole('')
        setName('')
       

        const user = {
            
            email,
            password,
             mobileNumber,
            role,
            userName
           
          };
          console.log(user);
          fetch("http://localhost:8096/admin/adds", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }).then(() => {
            window.location.href = "/";
          });
        
    }
 

  return (
    
      <div className='first' style={di} >
      <h1 style={heading}>  Remote Hire Application </h1> <br></br>
      
        <form className='second'>
             <label  >
                 <input list="adminUsear" name='use' placeholder="Enter admin/user" 
                  value={role}
                  onChange={(e) => {
                      setRole(e.target.value)
                  }
                }
                 style={text}/>
             </label>
             <datalist id="adminUsear" >
                 <option value="admin" />
                  <option value="user"/>
                  <option value="hr" />
             </datalist>
  <br></br> 
                       
                    {/*   <h1 style={p} >  For User Signin:</h1>
          
  <a href="/UserRegister"  id="AdminLink" style={h1} > User Signin</a> <br></br> */}
                   
             <input type="text"  id="email" name='email'  
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value)
              }
            }
             placeholder="Enter email" size="50px" width="100px" style={text}  required/><br></br>
             <input type="text" id="username" name='userName' 
              value={userName}
              onChange={(e) => {
                  setName(e.target.value)
              }
            }
             placeholder="Enter Usearname" size="50px" width="100px"  style={text}  required/><br></br>
             <input type="text" id="mobileNumber" name='mobileNumber' 
                value={mobileNumber}
                onChange={(e) => {
                    setMobile(e.target.value)
                }
              }
              maxlength="10" placeholder="Enter mobileNumber" size="50px" width="100px" style={text}    required/><br></br>
             <input type="password" id="password" name='password' 
               value={password}
               onChange={(e) => {
                   setPassword(e.target.value)
               }
             }
             placeholder="Enter password" size="50px" width="100px" style={text}   required/><br></br>
             {/* <input type="password" id="confirmPassword"name='cpassword' 
               value={pass}
               onChange={(e) => {
                   setEmail(e.target.value)
               }
             }
             placeholder="Confirm password" size="50px" width="100px" style={text}   required/><br></br> */}
             <input type="button" id="submitButton"  
              value="Submit"  onClick={handleOnSubmit} style={butt}/>
               
            <p style={p}>   Already a user?  </p>
            <a href="/" style={h1} id="signinLink" >Login</a> 
              
         </form>
      </div>
  )
}

export default Signup;


