import React, { Component } from "react";
import { Alert, Container, Col, Row } from "react-bootstrap";
import Teleoperation from "./Teleoperation";
import Navigation from "./Navigation";
import Arrows from "./Arrows";

class Connection extends Component {
  state = { connected: false, ros: null, message: null };
  constructor(props) {
    super(props);
    this.state.ros = new window.ROSLIB.Ros();
  }

  initConnection() {
    this.state.ros.on("connection", () => {
      this.setState({ connected: true, message: "Robot connected" });
    });
    this.state.ros.on("close", () => {
      this.setState({ connected: false, message: "Robot disconnected" });
      setTimeout(() => {
        this.state.ros.connect(this.props.address);
      }, 5000);
    });
    this.state.ros.on("error", (error) => {
      console.log("Error Connecting to websocket server", error);
      this.setState({
        connected: false,
        message: `Failed to construction websocket, the URL ${this.props.wslink} is Invalid`,
      });
      exit();
    });
    if (this.props.isConnected === true) {
      try {
        this.state.ros.connect(this.props.wslink);
      } catch (error) {
        console.log("problem to solve");
      }
    } else if (!this.props.isConnected) {
      this.state.ros.close();
    }
  }
  componentDidMount(props) {
    this.initConnection();
  }
  componentDidUpdate(props) {
    this.initConnection();
    this.state.ros.getTopics((e) => {
      console.log(e);
    });
  }

  render() {
    const Connected = () => {
      if (this.props.isConnected) {
        return (
          <div>
            <Container className="d-flex justify-content-center">
              <Alert
                className="w-75 text-center m-3"
                style={{ color: this.state.connected ? "#155724" : "#721c24" }}
                variant={this.state.connected ? "success" : "danger"}
              >
                <strong>{this.state.message}</strong>
              </Alert>
            </Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs="auto" className="my-3">
                <Navigation />
              </Col>
              <Col xs="auto" className="my-3">
                <Teleoperation ros={this.state.ros} />
              </Col>
              <Col xs="auto" className="my-3">
                <Arrows ros={this.state.ros} />
              </Col>
            </Row>
          </div>
        );
      } else {
        return <div></div>;
      }
    };

    return <Connected />;
  }
}

export default Connection;
