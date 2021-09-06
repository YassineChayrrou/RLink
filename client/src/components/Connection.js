import React, { Component } from "react";
import { Alert, Container } from "react-bootstrap";

class Connection extends Component {
  state = { connected: false, ros: null, message: null };
  constructor() {
    super();
    this.state.ros = new window.ROSLIB.Ros();
  }

  componentDidMount() {
    this.state.ros.on("connection", () => {
      this.setState({ connected: true, message: "Robot connected" });
    });
    this.state.ros.on("close", () => {
      this.setState({ connected: false, message: "Robot disconnected" });
      console.log("disconnected");
      setTimeout(() => {
        this.state.ros.connect("ws://0.0.0.0:9090");
      }, 5000);
    });
    this.state.ros.connect("ws://0.0.0.0:9090");
  }

  render() {
    return (
      <Container className="d-flex justify-content-center">
        <Alert
          className="w-75 text-center m-3"
          style={{ color: this.state.connected ? "#155724" : "#721c24" }}
          variant={this.state.connected ? "success" : "danger"}
        >
          <strong>{this.state.message}</strong>
        </Alert>
      </Container>
    );
  }
}

export default Connection;
