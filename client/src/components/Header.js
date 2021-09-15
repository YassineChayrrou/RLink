import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import Button76 from "./Button76";
import "../css/header.css";

const Header = () => {
  return (
    <header>
      <CustomNavbar />
      <div className="header-content">
        <h2>Your Platform for Ultimate Control</h2>
        <h2>New Way to Supervize Robots</h2>
        <p>Get started, get Linked!</p>
        <Button76 btn={"Start now"} path={"/register"}>
          Start RLink Now
        </Button76>
      </div>
    </header>
  );
};

export default Header;
