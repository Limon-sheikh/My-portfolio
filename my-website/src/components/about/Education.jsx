import React from "react";

import { educationData } from "../../data/about";

function EducationTimeline() {
  return (
    <div className="relative h-[220px] overflow-y-auto overflow-x-hidden wrap-break-word pr-2 ">
      {educationData.map((item, index) => (
        <div key={index} className="relative pl-12 mb-6">
          {/* Vertical Line */}
          <div className="absolute top-0 left-5 h-full border-l-2 border-dark_blue"></div>

          {/* Circle */}
          <div 
          className="absolute left-0 top-0 w-10 h-10 bg-dark_blue text-text_C_W rounded-full flex items-center justify-center font-bold text-md">
            {index + 1}
          </div>

          {/* Content */}
          <h3 className="text-lg text-primary font-bold">{item.degree}</h3>
          <span className="text-primary/60 text-sm block font-medium">{item.institute}</span>
          <span className="text-primary/60 text-sm font-medium">{item.year}</span>
          <p className="text-primary/60 mt-2 text-md text-justify font-medium">{item.details}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationTimeline;
