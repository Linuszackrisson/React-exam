import React from 'react';
import logo from '../../assets/logo.png';
import './homepage.css';

function Homepage() {
  return (
    <div className='homepage-container'>
      <img className='logo-img' src={logo} alt="Logo" />
      <h1 className='homepage-title'>Where It’s @</h1>
      <h2 className='homepage-slogan'>Ticketing made easy</h2>
    </div>
  );
}

export default Homepage;
