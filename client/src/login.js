// Import necessary hooks from 'react'
import React, { useState } from 'react';

// Define LoginForm component
const LoginForm = () => {
  // Initialize state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define an async function to handle form submission
  const handleFormSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Check if both email and password fields are not empty
    if (email && password) {
      try {
        // Attempt to log in by making a POST request to the server
        const response = await fetch('/api/users/login', {
          method: 'POST',
          // Stringify email and password to send in the request body
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        // If response is okay, redirect user to their home page
        if (response.ok) {
          document.location.replace('/userhome');
        } else {
          // If login failed, alert the user
          alert('Failed to log in');
        }
      } catch (error) {
        // Log any errors that occur during login to the console
        console.error('An error occurred during login:', error);
      }
    }
  };

  // Render form with input fields for email and password, and a submit button
  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <input
        type="email"
        id="inputEmail"
        value={email}
        // Update email state whenever input changes
        onChange={(e) => setEmail(e.target.value.trim())}
      />
      <input
        type="password"
        id="inputPassword"
        value={password}
        // Update password state whenever input changes
        onChange={(e) => setPassword(e.target.value.trim())}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

// Export LoginForm component for use in other parts of the app
export default LoginForm;
