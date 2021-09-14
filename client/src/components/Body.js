import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Header from "./Header";
import "../css/body.css";
import networking from "../images/networking.svg";
import security from "../images/security.svg";
import navigation from "../images/navigation.svg";
import Button76 from "./Button76";

const Body = () => {
  const Array = [networking, navigation, security];
  return (
    <main>
      <h2>A great way to empower your industry</h2>
      <p>
        We provide the perfect solution to control ROS enabled robots remotely
        from anywhere in the world.
        <br />
        Our goal is to provide you with the ability to enable your robots to
        communicate with you from anywhere in the world
        <br />
        we seek to give you a toolkit with which the applications are endless...
      </p>
      <Container className="main-container">
        {" "}
        <div className="gradiant">
          <h1 className="text">Discover A New Future</h1>
        </div>
      </Container>
      <Row className="card-row">
        <Col className="c-card">
          <img src={navigation} width={80} heigh={80} className="mb-4" />
          <h3>Easier Navigation</h3>
          <p>
            We provide you with remote navigation suite which simplifies robot
            control through realtime map and geolocation tracking without the
            need to be on onsite for remote control.
          </p>
        </Col>
        <Col className="c-card">
          <img src={networking} width={80} heigh={80} className="mb-4" />
          <h3>Reliable Network</h3>
          <p>
            We take pride in our network solution to provide you the best
            reliance and open the doors for you for IoT applications through
            Cloud computing, access to Robots from anywhere in the world and 24/
            7 support in case of emergencies.
          </p>
        </Col>
        <Col className="c-card">
          <img src={security} width={80} heigh={80} className="mb-4" />
          <h3>Secure Connection</h3>
          <p>
            Our solution channels are looked upon by the best engineers, we
            maintain and monitor all connection for security breaches plus we
            have highly secure virtual private network to protect your data from
            being stolen. As secure as it can gets that is our end goal.
          </p>
        </Col>
      </Row>
      <Container fluid className="m-5 pt-5">
        <h1>RLink presents you the remote control of the world</h1>
      </Container>
      <div className="start-now">
        <h1>Experience Our Solution for Free</h1>
        <Button76 btn={"Start now"} path={"/register"}></Button76>
      </div>
    </main>
  );
};

export default Body;
