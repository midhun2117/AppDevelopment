import React from 'react';
import '../Assets/Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate=useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>BookMyStay</h3>
      </div>
      <ul className="sidebar-menu">
        <li onClick={()=>{navigate("/dashboard")}}>Dashboard</li>
        <li onClick={()=>{navigate("/")}}>Home</li>
        <li onClick={()=>{navigate("/homepage")}}>Hotels</li>
        <li onClick={()=>{navigate("/service")}}>Services</li>
        <li onClick={()=>{navigate("/contact")}}>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;