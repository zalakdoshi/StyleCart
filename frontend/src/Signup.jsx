import React, { useState } from "react";
import "./Signup.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log("Signup button clicked"); // Log when the signup button is clicked

    try {
      const response = await fetch(
        "http://localhost:5000/backend/user/singup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, contact, type }),
        }
      );

      console.log("Signup request sent"); // Log when the signup request is sent

      const data = await response.json();

      if (response.ok) {
        if (data.message === "User Already Exists! Login instead") {
          setMessage(data.message);
        } else if (
          data.message === "Enter name" ||
          data.message === "Enter email" ||
          data.message === "Enter Password" ||
          data.message === "Enter Contact" ||
          data.message === "Enter Type"
        ) {
          setMessage(data.message);
        } else {
          setMessage("Signup successful!");
          
          // Save JWT token and user info to localStorage
          if (data.token) {
            localStorage.setItem("authToken", data.token);
          }
          localStorage.setItem("username", data.user.username || username);
          localStorage.setItem("email", email);
          localStorage.setItem("loginTimestamp", Date.now().toString());
          
          onSignup(data.user.username); // Assuming 'user' object is returned from backend
          navigate("/");
        }
      } else {
        setMessage("Signup failed. Please check your information.");
      }
    } catch (error) {
      console.error("Error during signup:", error); // Log any errors that occur during signup
    }
  };

  console.log("Rendering Signup component"); // Log when the component is rendered

  return (
    <div className="App">
      <div className="form-container">
        <h2>Signup</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <input
            type="text"
            placeholder="Contact"
            className="form-input"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="text"
            placeholder="Type"
            className="form-input"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />

          <div className="form-button-container">
            <button type="submit" className="form-button">
              Signup
            </button>
          </div>
        </form>

        <p className="message">{message}</p>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
