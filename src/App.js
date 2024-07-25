import React, { useState } from "react";
import "./App.css";

const XLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      // Clear username and password fields after successful login
      setUsername("");
      setPassword("");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="x-login">
      <h2>Login Page</h2>
      {message && (
        <div className="message">
          {message === "Welcome, user!"
            ? message
            : "Invalid username or password"}
        </div>
      )}
      {!message || message === "Invalid username or password" ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : null}
    </div>
  );
};

export default XLogin;