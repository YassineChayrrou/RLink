import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./css/bootstrap.min.css";
//Public screens
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
//Private screens
import ProtectedPaths from "./components/authentication/routing/ProtectedPaths";
import Login from "./components/authentication/screens/Login";
import Register from "./components/authentication/screens/Register";
import ForgotPassword from "./components/authentication/screens/ForgotPassword";
import ResetPassword from "./components/authentication/screens/ResetPassword";
import PrivateScreen from "./components/authentication/screens/PrivateScreen";
// import ErrorPage from "./components/ErrorPage.js";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <ProtectedPaths exact path="/dashboard" component={PrivateScreen} />
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route
            path="/forgotpassword"
            exact
            component={ForgotPassword}
          ></Route>
          <Route
            path="/resetpassword/:resetToken"
            exact
            component={ResetPassword}
          ></Route>
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
