import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./css/slate-bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to RLink</h1>
      <Footer />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
