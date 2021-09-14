import React, { Component } from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
import "../css/about.css";

class About extends Component {
  render() {
    return (
      <div className="about-us">
        <CustomNavbar />
        <div className="what-to-do">
          <h2>There is nothing in here</h2>
          <p>You can however click the footer below :)"</p>
        </div>
        <Footer color={"whitesmoke"} />
      </div>
    );
  }
}

export default About;
