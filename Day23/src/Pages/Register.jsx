import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Register.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setError] = useState({});
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Register = { name:username, email, password };
    const validationErrors = {};

    if (!username.trim()) {
      validationErrors.username = "User Name is required";
    }


    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    if (!confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const response = await axios
        .post("http://localhost:8081/api/v1/auth/register", Register, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log("New Register added");
          dispatch(login(email))
          alert("Registration successful");
          nav("/");
        })
        .catch((error) => {
          console.error("Error during registration:", error);
        });
      console.log(response);
    }
  };

  if (Object.keys(errors).length > 0) {
    document.body.classList.add("error-body");
  } else {
    document.body.classList.remove("error-body");
  }

  return (
    <div className="muthu">
      <div
        className={`login-box1 ${
          Object.keys(errors).length > 0 ? "error" : ""
        }`}
      >
        <form className="main1" onSubmit={handleSubmit}>
          <center>
            <h1>Register</h1>
          </center>

          <br />

          <input
            type="text"
            placeholder="First Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h6>{errors.username && <span>{errors.username}</span>}</h6>
          


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6>{errors.email && <span>{errors.email}</span>}</h6>
          

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h6>{errors.password && <span>{errors.password}</span>}</h6>
          

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <h6>
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </h6>
          

          <button type="submit" className="but">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;