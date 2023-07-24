import React from 'react';
import { Link } from 'react-router-dom';
import '../style/redirect.css';

export default function Redirect() {
  return (
    <div className='redirect-container'>
      <div className='redirect-text'>
        <h1>CHEERS- Sign Up Complete!</h1>
        <p className='toast-text'> 
          "Here’s to the nights we’ll never remember 
          <br></br>
          with our friends we’ll never forget."
        </p>
        <button className='login-button'>
          <Link to="/login">
          <span className='login-text'>Login</span>
          </Link>
        </button>
        <p className='button-follow'> to get started!</p>
      </div>
    </div>
  );
}
