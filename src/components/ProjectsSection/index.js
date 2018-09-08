import React from "react";
import Section from "../Section";
import ProjectUnit from "../ProjectUnit";

import tradeMachineLogo from "../../assets/images/projects/trademachine-1.png";
import awardShowLogo from "../../assets/images/projects/awardshowlogo.png";

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ProjectUnit
            logo={tradeMachineLogo}
            colour="#00bcd4"
            title="Trade Machine"
            link="https://github.com/akosasante/BBTrader"
            technologies={["node", "vue", "mongo", "slack"]}
            subtitle="Fantasy baseball web application for a 20-person ESPN league.
            The app facilitates trading of players, prospects, and draft picks and alerts users via email and Slack, as well as updating administrators' Google Sheets."
          />
          <ProjectUnit
            logo={awardShowLogo}
            colour="#22333a"
            title="Award Show Voter"
            link="https://github.com/akosasante/AwardShowVoter"
            technologies={["node", "typescript", "pug", "postgres"]}
            subtitle="Server-redered web application where registered users and guests can vote on winners for various award shows.
            Scores are tracked in real-time and Notification API + email are used to notify users when show results are updated."
          />
        </div>
      </Section>
    );
  }
}

export default ProjectsSection;
