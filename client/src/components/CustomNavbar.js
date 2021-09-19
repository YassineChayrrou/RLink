import React, { Component } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo-1.svg";
import { Link } from "react-router-dom";

class CustomNavbar extends Component {
  render() {
    const navStyle = {
      fontFamily: "'Noto Sans', sans-serif",
      fontSize: "12px",
      fontWeight: "normal",
      textTransform: "uppercase",
      backgroundColor: "rgba(53,55,60,0.8)",
    };
    const navItemStyle = {
      color: "rgba(255,255,255,0.8)",
    };
    return (
      // <Navbar collapseOn Select expand="lg" style={navStyle}>
      <Navbar expand="lg" style={navStyle}>
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/">
              <img src={logo} className="ml-auto" width={25} heigh={25} />
              <span style={{ color: "whitesmoke" }}> RLink</span>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="m-auto"
                style={navItemStyle}
              >
                <strong>Home</strong>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="m-auto"
                style={navItemStyle}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                // to="/contact"
                to="/control"
                className="m-auto"
                style={navItemStyle}
              >
                Contact us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login"
                className="m-auto"
                style={navItemStyle}
              >
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="m-auto">
                <Button variant="secondary" size="sm">
                  Signup
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default CustomNavbar;
