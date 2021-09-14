import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
