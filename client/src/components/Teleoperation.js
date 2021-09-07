import { useState, useEffect } from "react";
import React, { Component } from "react";
import { Joystick } from "react-joystick-component";

const Teleoperation = () => {
  const handleMove = () => {};
  const handleStop = () => {};

  return (
    <Joystick
      size={150}
      baseColor="#eeeeee"
      stickColor="#bbbbbb"
      move={handleMove}
      stop={handleStop}
    ></Joystick>
  );
};

export default Teleoperation;

// class Teleoperation extends Component {
//     state = {}

//     handleMove() {}
//     handleStop() {}
// }
