import React, { Component } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo-1.svg";
import { Link } from "react-router-dom";

class LoginNavbar extends Component {
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
              <Button
                variant="secondary"
                size="sm"
                className="m-auto"
                onClick={() => {
                  localStorage.removeItem("authToken");
                  this.props.history.push("/");
                }}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default LoginNavbar;
