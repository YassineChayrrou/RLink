import React, { useEffect } from "react";
import "../../css/arrows.css";

const Arrows = (props) => {
  const kup = window.addEventListener("keyup", arrowUp);
  const dup = window.addEventListener("keydown", arrowDown);

  function teleoperationPublisher(e) {
    const cmdVel = new window.ROSLIB.Topic({
      ros: props.ros,
      name: "/cmd_vel",
      // name: "/turtle1/cmd_vel",
      messageType: "geometry_msgs/Twist",
    });

    const twist = new window.ROSLIB.Message({
      linear: {
        x: e.y,
        y: 0,
        z: 0,
      },
      angular: {
        x: 0,
        y: 0,
        z: -e.x,
      },
    });
    cmdVel.publish(twist);
  }

  function arrowUp(e) {
    const twist = {
      x: 0,
      y: 0,
      default: function () {
        this.x = 0;
        this.y = 0;
      },
    };

    if (e.keyCode === 38) {
      up.classList.remove("press");
    } else if (e.keyCode === 37) {
      left.classList.remove("press");
    } else if (e.keyCode === 40) {
      down.classList.remove("press");
    } else if (e.keyCode === 39) {
      right.classList.remove("press");
    } else if (e.keyCode === 32) {
      space.classList.remove("press");
    }
    teleoperationPublisher(twist.default());
  }

  function arrowDown(e) {
    const twist = {
      x: 0,
      y: 0,
      default: function () {
        this.x = 0;
        this.y = 0;
      },
    };

    if (e.keyCode === 38) {
      up.classList.add("press");
      twist.y = 0.9;
      teleoperationPublisher(twist);
    }
    if (e.keyCode === 37) {
      left.classList.add("press");
      twist.x = -2;
      teleoperationPublisher(twist);
    }
    if (e.keyCode === 40) {
      down.classList.add("press");
      twist.y = -0.9;
      teleoperationPublisher(twist);
    }
    if (e.keyCode === 39) {
      right.classList.add("press");
      twist.x = 2;
      teleoperationPublisher(twist);
    }
    if (e.keyCode === 32) {
      space.classList.add("press");
      twist.default;
      teleoperationPublisher(twist);
    } else {
      twist.default;
      teleoperationPublisher(twist);
    }
  }

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
