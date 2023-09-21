import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Login.css';

function Login() {
  const [emailid, setemailid] = useState('');
  const [password, setpassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!emailid.trim()) {
      validationErrors.emailid = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailid)) {
      validationErrors.emailid = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login successful");
    }
  };

  return (
    <div className='muthu'>
    <div className="login-box">
      <form className="main" onSubmit={handleSubmit}>
        <center><h1>Log in</h1></center>
        <br />
        <input
          type="email"
          placeholder='emailid'
          value={emailid}
          onChange={(e) => setemailid(e.target.value)}
        />
        <h6>{errors.emailid && <span>{errors.emailid}</span>}</h6>
        
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <h6>{errors.password && <span>{errors.password}</span>}</h6>
        <button type='submit' className='butt'>Submit</button>
        <br />
        <br/>
     
        <Link to="/register">
          <button type='submit' className='but'>
            Create an account
          </button>
        </Link>
        </form>
      </div>
      </div>
    )
  }

  export default Login
