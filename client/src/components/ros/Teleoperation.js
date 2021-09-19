import { useState, useEffect } from "react";
import React, { Component } from "react";
import { Joystick } from "react-joystick-component";

const Teleoperation = (props) => {
  //handles joystick Move and publish it to simulator through websocket
  const handleMove = (e) => {
    // ROS publisher on the topic cmd_vel
    const cmdVel = new window.ROSLIB.Topic({
      ros: props.ros,
      name: props.topic,
      // name: "/turtle1/cmd_vel",
      messageType: "geometry_msgs/Twist",
    });

    const twist = new window.ROSLIB.Message({
      linear: {
        x: e.y / 100,
        y: 0,
        z: 0,
      },
      angular: {
        x: 0,
        y: 0,
        z: -e.x / 100,
      },
    });
    cmdVel.publish(twist);
  };
  //handles joystick stop and publish it to simulator through websocket
  const handleStop = (e) => {
    const cmdVel = new window.ROSLIB.Topic({
      ros: props.ros,
      name: props.topic,
      // name: "/turtle1/cmd_vel",
      messageType: "geometry_msgs/Twist",
    });

    const twist = new window.ROSLIB.Message({
      linear: {
        x: 0,
        y: 0,
        z: 0,
      },
      angular: {
        x: 0,
        y: 0,
        z: 0,
      },
    });
    cmdVel.publish(twist);
  };

  return (
    <Joystick
      size={100}
      baseColor="#eeeeee"
      stickColor="#bbbbbb"
      move={(e) => {
        handleMove(e);
      }}
      stop={handleStop}
    ></Joystick>
  );
};

export default Teleoperation;
