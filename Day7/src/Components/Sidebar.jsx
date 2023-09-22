import React from 'react';
import '../Assets/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>BookMyStay</h3>
      </div>
      <ul className="sidebar-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;