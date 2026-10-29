import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/backend/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.message === "Login Successfull") {
        setMessage("Login successful!");
        onLogin(data.username);
        navigate("/"); // Redirect to the homepage
      } else {
        setMessage("Incorrect email or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-button-container">
            <button type="submit" className="form-button">
              Login
            </button>
          </div>
        </form>
        <p className="message">{message}</p>
      <div className="demo-credentials">
          <p className="demo-title">🔑 Demo Credentials</p>
          <p><span>Email:</span> demo@stylecart.com</p>
          <p><span>Password:</span> demo1234</p>
        </div>
        <p className="login-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
