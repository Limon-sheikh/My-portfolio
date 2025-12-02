import React from "react";

import Skills from "./Skills";
import { progressData } from "../../data/about";
import EducationTimeline from "./Education";
import ExperienceTimeline from "./Experience";



const TabContent = ({ activeTab }) => {
  return (
    <div className="h-[200px] overflow-y-auto overflow-x-hidden wrap-break-word">
      {/* skills tab */}
      {activeTab === "skills" && (
        <div>
          {progressData.map((item) => (
            <Skills
              key={item.title}
              title={item.title}
              percent={item.percent}
            />
          ))}
        </div>
      )}
      {/* experience tab */}
      {activeTab === "experience" &&(
        <div><ExperienceTimeline /></div>
      )}
      {/* education tab */}
      {activeTab === "education" && (
        <div><EducationTimeline /></div>
      )}
    </div>
  );
};

export default TabContent;
