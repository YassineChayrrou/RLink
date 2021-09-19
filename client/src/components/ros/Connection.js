import React, { Component } from "react";
import { Alert, Container, Col, Row } from "react-bootstrap";
import Teleoperation from "./Teleoperation";
import Navigation from "./Navigation";
import Arrows from "./Arrows";
import RobotState from "./RobotState";

class Connection extends Component {
  state = {
    connected: false,
    ros: null,
    message: null,
    topics: [],
    chosenTopic: "",
  };
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
      // setTimeout(() => {
      //   this.state.ros.connect(this.props.wslink);
      // }, 5000);
    });

    try {
      if (this.props.isConnected) {
        this.state.ros.connect(this.props.wslink);
      }
    } catch (error) {
      console.log("Error: Connection problem with websocket", error);
    }

    this.state.ros.on("error", (error) => {
      console.log("Error Connecting to websocket server");
      this.state.ros.close();
    });
  }

  getTopics() {
    // this.rosTopics
    const rostopics = [];
    this.state.ros.getTopics((e) => {
      for (let i of Object.values(e.topics)) {
        rostopics.push(i);
      }
      this.setState({ topics: rostopics });
    });
  }

  componentDidMount(props) {
    this.initConnection();
    this.getTopics();
  }

  componentDidUpdate(props) {
    this.initConnection();
  }

  render() {
    // console.log();

    return (
      <div>
        {this.props.isConnected ? (
          <Container className="d-flex  justify-content-center">
            <Alert
              className="w-75 text-center m-3"
              style={{ color: this.state.connected ? "#155724" : "#721c24" }}
              variant={this.state.connected ? "success" : "danger"}
            >
              <strong>{this.state.message}</strong>
            </Alert>
          </Container>
        ) : null}
        {this.state.connected && this.props.isConnected ? (
          <div className="align-items-center">
            <div className="col-auto my-1">
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                <h5>
                  <b>ROS topics list:</b>
                </h5>
              </label>
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                onChange={(e) => {
                  this.setState({ chosenTopic: e.target.value });
                }}
              >
                <option />
                {this.state.topics.map((topic) => (
                  <option value={topic} key={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
            <Row className="d-flex justify-content-center align-items-center">
              <RobotState ros={this.state.ros} />
              <Col xs="auto" className="my-3">
                <Navigation />
              </Col>
              <Col xs="auto" className="my-3">
                <Teleoperation
                  ros={this.state.ros}
                  topic={this.state.chosenTopic}
                />
              </Col>
            </Row>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Connection;
