
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function Homepage({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
    <div className='add'></div>
      <Navbar/>
      </div>
  );
}

export default Homepage;
