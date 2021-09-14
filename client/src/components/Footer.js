import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="footer-copyright text-center py-3"
        style={{ color: this.props.color }}
      >
        &copy; RLink Corporation, Developed By{" "}
        <a href="https://github.com/YassineChayrrou">Yassine Chayrrou</a>.
      </div>
    );
  }
}

export default Footer;
