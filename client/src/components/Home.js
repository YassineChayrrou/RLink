import React, { Component } from "react";
import Connection from "./Connection";
import { Container } from "react-bootstrap";

class Home extends Component {
  state = {};
  checks() {
    return "hello";
  }
  render() {
    return (
      <Container>
        <h1 className="text-center mt-3">Robot Control Page</h1>
        <Connection />
      </Container>
    );
  }
}

export default Home;
