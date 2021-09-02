import React, { Component } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo-1.svg";
import { Link } from "react-router-dom";
import "../css/styles.css";

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} className="logo" />
            </Navbar.Brand>
            <Navbar.Brand>RLink</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact us</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>
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

export default Navigation;
