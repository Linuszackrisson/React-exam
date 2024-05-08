import React from 'react';
import logo from '../../assets/logo.png';
import './homepage.css';
import { motion } from "framer-motion";


function Homepage() {
  return (
    <div className='homepage-container'>
      <motion.div className="content-container"
                  initial={{ opacity: 0, y: -50, scale: 0.8, rotate: -20 }} 
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} 
                  transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 120 }} 
      >
        <motion.img className='logo-img'
                    src={logo}
                    alt="Logo"
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }} 
        />
        <motion.h1 className='homepage-title'
                  initial={{ opacity: 0, y: 50, rotate: 10 }} 
                  animate={{ opacity: 1, y: 0, rotate: 0 }} 
                  transition={{ duration: 0.8, delay: 0.7, type: 'spring', stiffness: 120 }} 
        >
          Where It’s @
        </motion.h1>
        <motion.h2 className='homepage-slogan'
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 120 }} 
        >
          Ticketing made easy
        </motion.h2>
      </motion.div>
    </div>
  );
}

export default Homepage;
