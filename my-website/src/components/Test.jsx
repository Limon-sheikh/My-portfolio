import React from "react";

const Test = () => {
  return (
    <div>
      <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6">Experience</h2>

        <div class="relative border-l-2 border-blue-600 ml-4">
          <div class="mb-8 ml-6">
            <div class="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <h3 class="text-xl font-semibold text-gray-800">Developer</h3>
            <span class="text-gray-500 text-sm">2000-2004 (4 years)</span>
            <p class="text-gray-600 mt-2">
              Worked on multiple projects involving front-end development, UI
              design, and responsive layouts. Gained strong experience in HTML,
              CSS, JavaScript, and React.
            </p>
          </div>

          <div class="mb-8 ml-6">
            <div class="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <h3 class="text-xl font-semibold text-gray-800">
              Senior Developer
            </h3>
            <span class="text-gray-500 text-sm">2004-2008 (4 years)</span>
            <p class="text-gray-600 mt-2">
              Led a team of developers to deliver high-quality web applications.
              Focused on performance optimization and code maintainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
