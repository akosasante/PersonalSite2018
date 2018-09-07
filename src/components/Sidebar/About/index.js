import React, { Component } from "react";

import "./style.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image" />
        <div className="bio">
          A technology enthusiast &amp; board game addict, who loves reading, learning new languages and trying just about anything once.
          <div className="emoji">🤖 &nbsp;🎲&nbsp;📚&nbsp; 🌐</div>
        </div>
      </div>
    );
  }
}

export default About;
