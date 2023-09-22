import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout, selectUser } from '../Redux/userSlice';
import '../Assets/Header.css';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const email = user.email ;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="header">
      <div className="logo">
        <h1>BookMyStay</h1>
      </div>
      <div className="actions">
      <li onClick={()=>{navigate("/homepage")}}>Home</li>&nbsp;&nbsp;&nbsp;
      

        <li onClick={()=>{navigate("/about")}}>About</li>&nbsp;&nbsp;&nbsp;
        <li>Services</li>&nbsp;&nbsp;&nbsp;
        <li>Contact</li>&nbsp;&nbsp;&nbsp;
        {email ? (
          <>
          
          <p>Welcome, {email}</p>
          <IconButton onClick={handleLogout}>
          <LogoutIcon />
          </IconButton>
          
          </>
          
          ) : (
            <>
            <Link to="/login">
            
              <IconButton>
                <LoginIcon />
              </IconButton>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;