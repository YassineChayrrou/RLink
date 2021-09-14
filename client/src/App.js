import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import "./css/slate-bootstrap.min.css";
// import "./css/superhero-bootstrap.min.css";
// import "./css/lux-bootstrap.min.css";
// import "./css/slate-bootstrap.min.css";
import "./css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Control from "./components/ros/Control";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/control" component={Control}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
