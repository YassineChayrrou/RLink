import React, { Component } from "react";
import { Alert, Container } from "react-bootstrap";
import Teleoperation from "./Teleoperation";

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
  }

  render() {
    const Connected = () => {
      if (this.props.isConnected) {
        return (
          <Container className="d-flex justify-content-center flex-column">
            <Alert
              className="w-75 text-center m-3"
              style={{ color: this.state.connected ? "#155724" : "#721c24" }}
              variant={this.state.connected ? "success" : "danger"}
            >
              <strong>{this.state.message}</strong>
            </Alert>
            <Container>
              <Teleoperation />
              <Map />
            </Container>
          </Container>
        );
      } else {
        return <div></div>;
      }
    };

    return <Connected />;
  }
}

export default Connection;
