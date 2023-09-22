import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Assets/Navbar.css';

function Navbar() {
  return (
    <div className='nav1'>
    <Header/>
    
    
    <h2>Choose Your Room Type</h2>
    <div>
        <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg" alt="Image 1" />
        <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg" alt="Image 2" />
        <img src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2Vib2F0fGVufDB8fDB8fHww&w=1000&q=80" alt="Image 3" />
        
      </div>
    
    <Footer/>
</div>
   
  );
}

export default Navbar;