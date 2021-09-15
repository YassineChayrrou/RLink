import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/control");
    }
  }, [history]);

  const userLogin = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/auth/login",
        { email, password },
        config
      );

      console.log(data);
      localStorage.setItem("authToken", data.token);

      history.push("/control");
    } catch (error) {
      setError(error.response.data.error);

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-form-container">
      <div className="nav">
        <Link
          className="btn btn-primary"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
      </div>
      <form className="login-form" onSubmit={userLogin}>
        <h1>Login</h1>
        {error && <span className="text-danger text-center">{error}</span>}
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="text"
            required
            id="name"
            placeholder="Enter email address"
            tabIndex={1}
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
            tabIndex={2}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="terms-text">
            By signing up you accept our{" "}
            <a href="#" tabIndex={3}>
              Terms of Use
            </a>
          </p>
          <button
            type="submit"
            tabIndex={4}
            className="btn btn-style btn-primary"
          >
            Login
          </button>
          <div className="login-or">
            <hr className="hr-or" />
            <span className="span-or">or</span>
            <Link
              to="/forgotpassword"
              style={{ textDecoration: "none" }}
              tabIndex={5}
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
