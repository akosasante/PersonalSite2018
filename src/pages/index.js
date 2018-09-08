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
      <div className="site-header">
        <h5>
          Hi, I'm <span className="bold">Akosua Asante!</span>
        </h5>

        <h3 className="bold">A software developer experienced in building robust web applications and passionate about beautiful and functional interfaces.</h3>
      </div>
      <ProjectsSection />
      <section className="svg-container">
        <svg
          className="svg-curve svg-curve--project-bottom"
          xmlns="http://www.w3.org/2000/svg"
          style={{ isolation: "isolate" }}
          viewBox="0 1112.623 1920 167.377"
        >
          <path d="M1920 1280H0q295.348-131.106 547-145c251.652-13.894 370.284 105.662 629 85q258.716-20.662 744-85" fill="#FFFFFA" />
        </svg>
      </section>
      <ExperienceSection />
      <section className="svg-container svg-container--experience-bottom">
        <svg
          className="svg-curve svg-curve--experience-bottom"
          xmlns="http://www.w3.org/2000/svg"
          style={{ isolation: "isolate" }}
          viewBox="0 1112.623 1920 167.377"
        >
          <path d="M1920 1280H0q295.348-131.106 547-145c251.652-13.894 370.284 105.662 629 85q258.716-20.662 744-85" fill="#FFFFFA" />
        </svg>
      </section>
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
