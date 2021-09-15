import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css";

const ResetPassword = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [shouldHide, setShouldHide] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const userResetPassword = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("passwords are not a match");
    }

    try {
      const { data } = await axios.put(
        `http://127.0.0.1:5000/api/auth/resetpassword/${match.params.resetToken}`,
        { password },
        config
      );
      setSuccess(data.data);
      setShouldHide(true);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="resetpassword-form-container">
      <div className="nav">
        <Link
          className="btn btn-primary"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
      </div>
      <form className="resetpassword-form" onSubmit={userResetPassword}>
        {!shouldHide && <h1>Reset Password</h1>}
        {shouldHide && <h1>Reset success</h1>}

        {error && <span className="text-danger text-center">{error}</span>}
        {success && <span className="text-success text-center">{success}</span>}
        <div className="resetpassword-form-group">
          <label
            htmlFor="password"
            style={{ display: !shouldHide ? "initial" : "none" }}
          >
            Password:
          </label>
          <input
            className="form-control"
            type="password"
            required
            id="password"
            placeholder="Enter password"
            tabIndex={1}
            value={password}
            style={{ display: !shouldHide ? "initial" : "none" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label
            htmlFor="confirmpassword"
            style={{ display: !shouldHide ? "initial" : "none" }}
          >
            Confirm password:
          </label>
          <input
            className="form-control"
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm password"
            tabIndex={2}
            value={confirmPassword}
            style={{ display: !shouldHide ? "initial" : "none" }}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <button
            type="submit"
            tabIndex={2}
            className="btn btn-style btn-primary"
            style={{ display: !shouldHide ? "initial" : "none" }}
          >
            reset password
          </button>
          <Link to="/login" className="btn-style">
            <button
              className="btn btn-style btn-primary"
              style={{
                display: shouldHide ? "initial" : "none",
                transform: "translateY(-100%)",
                textAlign: "center",
              }}
            >
              Login
            </button>
          </Link>
          {/* <div className="resetpassword-or">
            <hr className="hr-or" />
            <span className="span-or">or</span>
            <Link to="/login" style={{ textDecoration: "none" }} tabIndex={3}>
              Go back to login?
            </Link>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
