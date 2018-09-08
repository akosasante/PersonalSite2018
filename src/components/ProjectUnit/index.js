import React, { Component } from "react";
import getIconsJSX from "./code-icons";

import "./style.scss";

class ProjectUnit extends Component {
  render() {
    return (
      <div className="project-unit col-xs-12 col-sm-6 col-md-4">
        <a className="project-logo" href={this.props.link} target="_blank">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour
            }}
          />
        </a>
        <div className="title bold">{this.props.title}</div>
        <div className="project-tech">{getIconsJSX(this.props.technologies)}</div>
        <div className="subtitle">{this.props.subtitle}</div>
      </div>
    );
  }
}

export default ProjectUnit;
