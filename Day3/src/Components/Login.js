import React from 'react'
import { useState } from 'react'
import './Login.css'
import {Link} from "react-router-dom"

function Login(){

const[emailid, setemailid]=useState("");  
const[password, setpassword]=useState("");  
 
    return (
      <div class="login-box">
        <form class="main"><center><h1>Log in</h1></center>
        
        <br/>
       
        <input type="email" placeholder='emailid' value={emailid} onChange={(e) =>setemailid(e.target.value)} name='email' required/>
        <br/>
        <br/>
        <input type="password" placeholder='password' value={password} onChange={(e) =>setpassword(e.target.value)}  required/>
        <br/>
        <br/>
        <button type='submit' class='butt'>Submit</button>
        
        <br/><center><div>or</div></center>
        
        <Link to="/register">
        <button type='submit' class='but'>
        create an account</button></Link>
      
        </form>
      </div>
    )
  }


export default Login