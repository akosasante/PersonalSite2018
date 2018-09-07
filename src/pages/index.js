import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";

import "./style.scss";

const bgShapes = Array(34)
  .fill()
  .map((elem, i) => {
    return <div className={`shape shape--${i + 1}`} key={i} />;
  }); //TODO: Is there a way to manually keep this number in sync with the one in the scss file?

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <h5>
        Hi, I'm <span className="bold">Akosua Asante</span>
      </h5>

      <h3 className="bold">A software developer experienced in building robust web applications and passionate about beautiful and functional interface</h3>

      <ProjectsSection />
      <ExperienceSection />
    </div>

    <div className="aside">
      <div className="inner-container">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
      <div className="shape-container">{bgShapes}</div>
    </div>
  </div>
);

export default IndexPage;
