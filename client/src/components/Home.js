import React, { useState } from "react";
import WebsocketForm from "./WebsocketForm";
import { Container, Col, Row, Button } from "react-bootstrap";
import Teleoperation from "./Teleoperation";

export default function Home() {
  return (
    <Container>
      <h1 className="text-center mt-3">Robot Control Page</h1>
      <WebsocketForm />
    </Container>
  );
}
