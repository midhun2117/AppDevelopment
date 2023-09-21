import React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Assets/Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
  return (
    <div className="header">
      <div className="logo">
        <h1>Bookmystay</h1>
      </div>
      <div className="actions">
      <li>Home</li>&nbsp;&nbsp;&nbsp;


        <li onClick={()=>{navigate("/")}}>About</li>&nbsp;&nbsp;&nbsp;



        <li>Services</li>&nbsp;&nbsp;&nbsp;
        <li>Contact</li>&nbsp;&nbsp;&nbsp;
        <Link to="/login">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Link>
      </div>
      
    </div>
  );
}

export default Header;
