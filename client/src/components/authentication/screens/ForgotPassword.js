import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const userForgotPassword = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5000/api/auth/forgotpassword",
        { email },
        config
      );
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="forgotpassword-form-container">
      <div className="nav">
        <Link
          className="btn btn-primary"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
      </div>
      <form className="forgotpassword-form" onSubmit={userForgotPassword}>
        <h1>Account Mail</h1>
        {error && <span className="text-danger text-center">{error}</span>}
        {success && <span className="text-success text-center">{success}</span>}
        <div className="forgotpassword-form-group">
          <label htmlFor="email">Account email:</label>
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

          <button
            type="submit"
            tabIndex={2}
            className="btn btn-style btn-primary"
          >
            Reset Password
          </button>
          <div className="forgotpassword-or">
            <hr className="hr-or" />
            <span className="span-or">or</span>
            <Link to="/login" style={{ textDecoration: "none" }} tabIndex={3}>
              Go back to login?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
