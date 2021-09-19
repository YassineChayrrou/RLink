import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const RobotState = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [orientation, setOrientation] = useState(0);
  const [linearVel, setLinearVel] = useState(0);
  const [angularVel, setAngularVel] = useState(0);

  const getPosition = () => {
    // position subscriber to ros
    const positionSubscriber = new window.ROSLIB.Topic({
      ros: props.ros,
      name: "/amcl_pose",
      messageType: "geometry_msgs/PoseWithCovarianceStamped",
    });
    //position callback to ros
    positionSubscriber.subscribe((message) => {
      setX(message.pose.pose.position.x.toFixed(2));
      setY(message.pose.pose.position.y.toFixed(2));
      //   setOrientation(message.pose.pose.position.x);
      //   setX(message.pose.pose.position.x);
    });
  };

  const getVelocity = () => {
    const velocitySubscriber = new window.ROSLIB.Topic({
      ros: props.ros,
      name: "/odom",
      messageType: "nav_msgs/Odometry",
    });
    velocitySubscriber.subscribe((message) => {
      setLinearVel(message.twist.twist.linear.x.toFixed(2));
      setAngularVel(message.twist.twist.angular.z.toFixed(2));
    });
  };

  useEffect(() => {
    getPosition();
    getVelocity();
  }, []);
  return (
    <div>
      <Row>
        <Col>
          <h4 className="mt-4">Position:</h4>
          <p className="mt-0">x: {x}</p>
          <p className="mt-0">y: {y}</p>
          <p className="mt-0">orientation: {orientation}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="mt-4">Velocities:</h4>
          <p className="mt-0">Linear velocity: {linearVel}</p>
          <p className="mt-0">Angular velocity: {angularVel}</p>
        </Col>
      </Row>
    </div>
  );
};

export default RobotState;
