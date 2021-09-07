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
          <Nav.Link as={Link} to="/">
            <Navbar.Brand>
              <img src={logo} className="logo" />
            </Navbar.Brand>
            <Navbar.Brand>RLink</Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/auth">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/auth">
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
