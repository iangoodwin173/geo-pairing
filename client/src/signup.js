import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// BEGIN SignupPage component
const SignupPage = () => {
  // INITIALIZE username, email, and password with empty strings
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use react-router's useHistory hook for redirecting the user
  const history = useHistory();

  // DEFINE signupFormHandler function, which takes an event object as an argument
  const signupFormHandler = async (event) => {
    // Stop the default form submission
    event.preventDefault();

    // TRIM any extra spaces from username, email and password
    const usernameTrimmed = username.trim();
    const emailTrimmed = email.trim();
    const passwordTrimmed = password.trim();

    // Check if both username, email, and password are provided
    if (usernameTrimmed && emailTrimmed && passwordTrimmed) {
      // Perform a POST request to "/api/users/signup" endpoint
      // with username, email, and password included in the request body
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
          username: usernameTrimmed,
          email: emailTrimmed,
          password: passwordTrimmed,
        }),
        headers: { "Content-Type": "application/json" },
      });

      // If the response is OK, the user is signed up
      if (response.ok) {
        // Redirect user to the home ("/") page
        history.push("/");
      } else {
        // If sign up failed, alert the user with the response status text
        alert(response.statusText);
      }
    }
  };

  // The component returns a form that on submission calls the signupFormHandler
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
// END SignupPage component
