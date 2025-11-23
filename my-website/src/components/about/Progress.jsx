import React from "react";

const Progress = ({ title, percent }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 font-medium">{title}</span>
        <span className="text-gray-600 font-medium">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-yellow-500 h-2 rounded"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
