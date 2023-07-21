import React from 'react';
import {Link} from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Navbar() {
  
  return (
    <nav className='nav nav-tabs'>
    <ul className='navbar-links'>
       
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/About">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link to="/Dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/Signup">Sign Up</Link>
      </li>
    </ul>
    </nav>
  );
}

export default Navbar;
