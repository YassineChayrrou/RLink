import React, { useState, useEffect } from "react";
import "../../css/arrows.css";

const Arrows = (props) => {
  const vel = { x: 0, y: 0 };

  const handleDown = (event) => {
    if (event.keyCode === 38) {
      document.querySelector("#up").classList.add("press");
      vel.y = 10;
    } else if (event.keyCode === 40) {
      document.querySelector("#down").classList.add("press");
      vel.y = -0.5;
    } else if (event.keyCode === 37) {
      document.querySelector("#left").classList.add("press");
      vel.x = -0.2;
    } else if (event.keyCode === 39) {
      document.querySelector("#right").classList.add("press");
      vel.x = 0.2;
    } else if (event.keyCode === 32) {
      document.querySelector("#space").classList.add("press");
      vel.x = 0;
      vel.y = 0;
    }
    return;
  };

  const handleUp = (event) => {
    if (event.keyCode === 38) {
      document.querySelector("#up").classList.remove("press");
    } else if (event.keyCode === 40) {
      document.querySelector("#down").classList.remove("press");
    } else if (event.keyCode === 37) {
      document.querySelector("#left").classList.remove("press");
    } else if (event.keyCode === 39) {
      document.querySelector("#right").classList.remove("press");
    } else if (event.keyCode === 32) {
      document.querySelector("#space").classList.remove("press");
    }
    return;
  };

  // handles keyDown twist message
  const handleMove = (e) => {
    handleDown(e);
    handleUp(e);
    const cmdVel = new window.ROSLIB.Topic({
      ros: props.ros,
      name: props.topic,
      messageType: "geometry_msgs/Twist",
    });
    console.log(cmdVel);

    const twist = new window.ROSLIB.Message({
      linear: {
        x: vel.y,
        y: 0,
        z: 0,
      },
      angular: {
        x: 0,
        y: 0,
        z: -vel.x,
      },
    });
    console.log(twist);
    cmdVel.publish(twist);
  };

  // handles arrows keyup twist message
  const handleStop = (e) => {
    const cmdVel = new window.ROSLIB.Topic({
      ros: props.ros,
      name: props.topic,
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

  useEffect(() => {
    document.addEventListener("keydown", handleMove);
    // document.addEventListener("keyup", handleStop);
  }, []);

  return (
    <div>
      <h1>Use Arrow Keys</h1>
      <div className="arrow-key-container">
        <div className="arrow-key up" id="up" data-key="38"></div>
        <br />
        <div className="arrow-key left" id="left" data-key="37"></div>
        <div className="arrow-key down" id="down" data-key="40"></div>
        <div className="arrow-key right" id="right" data-key="39"></div>
        <div className="space-key" id="space" data-key="32"></div>
      </div>
    </div>
  );
};
export default Arrows;
