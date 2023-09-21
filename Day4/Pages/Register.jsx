import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Register.css';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!firstName.trim()) {
      validationErrors.firstName = 'First Name is required';
    }

    if (!lastName.trim()) {
      validationErrors.lastName = 'Last Name is required';
    }

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is not valid';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    }

    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      alert('Registration successful');
    }
  };

  return (
    <div className='muthu'>
    <div className="login-box1">
      <form className="main1" onSubmit={handleSubmit}>
        <center>
          <h1>Register</h1>
        </center>

        <br />

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <h6>{errors.firstName && <span>{errors.firstName}</span>}</h6>
        <br />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <h6>{errors.lastName && <span>{errors.lastName}</span>}</h6>
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h6>{errors.email && <span>{errors.email}</span>}</h6>
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h6>{errors.password && <span>{errors.password}</span>}</h6>
        <br />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <h6>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</h6>
        <br />

        <button type="submit" className="but">
          Register
        </button>

        
      </form>
    </div>
    </div>
  );
}

export default Register;
