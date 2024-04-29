import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaShoppingCart, FaTicketAlt } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FaHome className='icon' /> 
          </Link>
        </li>
        <li>
          <Link to="/events">
            <FaCalendarAlt className='icon' /> 
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <FaShoppingCart className='icon' /> 
          </Link>
        </li>
        <li>
          <Link to="/tickets">
            <FaTicketAlt className='icon' /> 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
