import React from 'react'
import { useState } from 'react'
import './Register.css'
import {Link} from "react-router-dom"

function Register(){

const[fname, setfname]=useState("");  
const[lname, setlname]=useState("");  
const[emailid, setemailid]=useState("");  
const[password, setpassword]=useState("");  
 
    return (
      <div class="login-box1"> 
        <form class="main1">
        <h1>Register</h1>
        <br/>
        <input type="text" placeholder='First Name' value={fname} onChange={(e) =>setfname(e.target.value)} required/>
        <br/>
        
        <input type="text" placeholder='Last name' value={lname} onChange={(e) =>setlname(e.target.value)} />
        <br/>
        <input type="email" placeholder='emailid' value={emailid} onChange={(e) =>setemailid(e.target.value)} name='email' required/>
        <br/>
        <input type="password" placeholder='password' value={password} onChange={(e) =>setpassword(e.target.value)}  required/>
        <br/>
        <br/>
        <Link to="/">
        <button type='submit' class='butt'>submit</button></Link>
      
        </form>
      </div>
    )
  }


export default Register