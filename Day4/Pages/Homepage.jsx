import React from 'react'
import '../Assets/Home.css';
import Sidebar from '../Components/Sidebar';
function Homepage() {
  return (
    // Home.js



  
    <div className="home">
      <Sidebar />
      <main>
        {/* Main content of your homepage */}
        <h1>Welcome to your homepage</h1>
        <p>This is the main content of your homepage.</p>
      </main>
    </div>
  );
};

export default Homepage;

 