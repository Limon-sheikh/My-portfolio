import React from "react";

import { educationData } from "../../data/about";

function EducationTimeline() {
  return (
    <div className="relative h-[220px] overflow-y-auto overflow-x-hidden wrap-break-word pr-2 ">
      {educationData.map((item, index) => (
        <div key={index} className="relative pl-12 mb-6">
          {/* Vertical Line */}
          <div className="absolute top-0 left-5 h-full border-l-2"></div>

          {/* Circle */}
          <div className="absolute left-0 top-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold">
            {index + 1}
          </div>

          {/* Content */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.degree}</h3>
          <div className="opacity-70">
            <span className="text-gray-500 text-sm block">{item.institute}</span>
            <span className="text-gray-400 text-sm">{item.year}</span>
            <p className="text-gray-600 mt-2 text-justify">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationTimeline;
