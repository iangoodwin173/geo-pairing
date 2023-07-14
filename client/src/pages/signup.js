import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signupFormHandler = async (event) => {
    event.preventDefault();

    const usernameTrimmed = username.trim();
    const emailTrimmed = email.trim();
    const passwordTrimmed = password.trim();

    if (usernameTrimmed && emailTrimmed && passwordTrimmed) {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
          username: usernameTrimmed,
          email: emailTrimmed,
          password: passwordTrimmed,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        navigate("/");
      } else {
        alert(response.statusText);
      }
    }
  };

  return (
    <form id="signupForm" onSubmit={signupFormHandler}>
      <input
        type="text"
        id="inputUsername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        id="inputEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="inputPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupPage;
