import React, { Component } from "react";

import "./style.scss";

class ExperienceUnit extends Component {
  render() {
    return (
      <div className="experience-unit col-xs-12 col-sm-12 col-md-12">
        <div className="title bold">{this.props.title}</div>
        <div className="experience-details">
          <a className="experience-logo" href={this.props.link} target="_blank">
            <div
              className="image"
              style={{
                backgroundImage: `url(${this.props.logo})`,
                backgroundColor: this.props.colour
              }}
            />
          </a>
          <div className="experience-details--secondary-info">
            <div className="position bold">{this.props.position}</div>
            <div className="time-period">{this.props.timeperiod}</div>
          </div>
          <div className="subtitle">{this.props.subtitle}</div>
        </div>
      </div>
    );
  }
}

export default ExperienceUnit;
