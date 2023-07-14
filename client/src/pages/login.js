import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          navigate('/userhome');
        } else {
          alert('Failed to log in');
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <input
        type="email"
        id="inputEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value.trim())}
      />
      <input
        type="password"
        id="inputPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value.trim())}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
