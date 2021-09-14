import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/button76.css";

export default function Button76(props) {
  return (
    <Button className="button-76" as={Link} to={props.path}>
      {props.btn}
    </Button>
  );
}
