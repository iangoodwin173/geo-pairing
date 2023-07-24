import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './redirect.css'

export default function Redirect() {
  return (
    <div className='redirect-container'>
      <div className='redirect-text'>
        <p>Successful Sign-Up! 
          <br></br>
          Please log in with your 
          <br></br>
          new credentials to continue
          <br></br>
          using this site.
        </p>
        
        <Link to="/login">Go to Login</Link> {/* Use Link to navigate to the login page */}
      </div>
    </div>
  );
}
