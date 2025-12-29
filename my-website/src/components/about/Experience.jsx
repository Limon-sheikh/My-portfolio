import React from "react";
import { experianceData } from "../../data/about";

function ExperienceTimeline() {
  return (
    <div className="relative h-[220px] overflow-y-auto overflow-x-hidden wrap-break-word pr-2">
      {experianceData.map((item, index) => (
        <div key={index} className="relative pl-12 mb-6">
          {/* Vertical Line */}
          <div className="absolute top-0 left-5 h-full border-l-2 border-dark_blue"></div>
          {/* Circle */}
          <div
            className="absolute left-0 top-0 w-10 h-10 bg-dark_blue rounded-full 
            flex items-center justify-center font-bold text-md text-text_C_W"
          >
            {index + 1}
          </div>
          
          {/* Content */}
          <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
          <span className="text-primary/60 text-sm font-medium">{item.duration}</span>
          <p className="text-primary/60 text-md mt-2 text-justify font-medium">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
