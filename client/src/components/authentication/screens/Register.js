import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifypassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/dashboard");
    }
  }, [history]);

  const registerUser = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== verifypassword) {
      setPassword("");
      setVerifyPassword("");
      // setTimeout to remove error after 5 seconds
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/auth/register",
        { username, email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/dashboard");
    } catch (error) {
      setError(error.response.data.error);

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register-form-container">
      <div className="nav">
        <Link
          className="btn btn-primary"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
      </div>
      <form className="register-form" onSubmit={registerUser}>
        <h1>Register</h1>
        {error && <span className="text-danger text-center">{error}</span>}
        <div className="register-form-group">
          <label htmlFor="username">Name:</label>
          <input
            className="form-control"
            type="text"
            required
            id="name"
            placeholder="Enter username"
            tabIndex={1}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            required
            id="email"
            placeholder="Enter email address"
            tabIndex={2}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            required
            id="password"
            placeholder="Enter password"
            tabIndex={3}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="verifypassword">Verify password:</label>
          <input
            className="form-control"
            type="password"
            required
            id="verifypassword"
            placeholder="Verify password"
            tabIndex={4}
            value={verifypassword}
            onChange={(e) => {
              setVerifyPassword(e.target.value);
            }}
          />
          <p className="terms-text">
            By signing up you accept our{" "}
            <a tabIndex={5} href="#">
              Terms of Use
            </a>
          </p>
          <button
            type="submit"
            tabIndex={6}
            className="btn btn-style btn-primary"
          >
            Register
          </button>
          <div className="register-or">
            <hr className="hr-or" />
            <span className="span-or">or</span>
            <span>
              Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }} tabIndex={7}>
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
