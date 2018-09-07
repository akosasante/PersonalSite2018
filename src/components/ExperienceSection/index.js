import React from "react";
import Section from "../Section";
import ExperienceUnit from "../ExperienceUnit";

import sortableLogo from "../../assets/images/experience/sortable-logo.png";

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={sortableLogo}
            colour="#fff"
            title="Sortable"
            link="https://www.sortable.com/"
            timeperiod="Sep 2017 - Jul 2017"
            position="Software Developer"
            subtitle="Developed reusable components for an AngularJS business intelligence/data-analysis product.
            In addition, maintained existing codebase, fixed bugs, and extended REST API while migrating from Clojure to Scala backend."
          />
          <ExperienceUnit
            logo={sortableLogo}
            colour="#fff"
            title="Sortable"
            link="https://www.sortable.com/"
            timeperiod="Sep 2016 - Sep 2017"
            position="Customer Success Specialist"
            subtitle="Investigated the performance of our advertising tech on clients' websites using Chrome Dev Tools.
            Used postgreSQL and PrestoDB to gain insight on customer concerns before escalating actionable bug reports to the engineering team."
          />
        </div>
      </Section>
    );
  }
}

export default ExperienceSection;
