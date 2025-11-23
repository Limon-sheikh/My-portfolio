import React from "react";

import Progress from "./Progress";

const TabContent = ({ activeTab }) => {
  return (
    <div>
      {activeTab === "skills" && (
        <div>
          <Progress title="Development" percent={65} />
          <Progress title="Design" percent={95} />
          <Progress title="Branding" percent={80} />
        </div>
      )}

      {activeTab === "experience" && (
        <div>
          <Progress title="Frontend Developer" percent={85} />
          <Progress title="UI Designer" percent={75} />
        </div>
      )}

      {activeTab === "education" && (
        <div>
          <Progress title="CSE Diploma" percent={90} />
          <Progress title="Web Development Course" percent={95} />
        </div>
      )}
    </div>
  );
};

export default TabContent;
