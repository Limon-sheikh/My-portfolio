import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="max-w-5xl bg-white rounded-2xl p-10 shadow-lg grid md:grid-cols-2 gap-10">

        {/* Left Image */}
        <div className="flex justify-center items-center">
          <div className="w-72 h-72 bg-yellow-300 rounded-full flex justify-center items-center">
            <img
              src="/about.png"
              alt="profile"
              className="w-56 h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About Me</h1>
          <p className="text-gray-600 mb-6">
            A reader will be distracted by the readable content of a page when looking at its layout...
          </p>

          {/* Tabs */}
          <div className="flex gap-8 text-lg font-semibold mb-6">
            <button
              onClick={() => setActiveTab("skills")}
              className={`${activeTab === "skills" ? " border-b-2 border-yellow-500" : "text-gray-600"}`}
            >
              Skills
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`${activeTab === "experience" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-600"}`}
            >
              Experience
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`${activeTab === "education" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-600"}`}
            >
              Education
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "skills" && (
            <div>
              <Progress title="Development" percent={65} />
              <Progress title="Design" percent={95} />
              <Progress title="Branding" percent={80} />
            </div>
          )}

          {activeTab === "experience" && (
            <div>
              {/* <Progress title="Frontend Developer" percent={85} />
              <Progress title="UI Designer" percent={75} /> */}
              hello expariance
            </div>
          )}

          {activeTab === "education" && (
            <div>
              <Progress title="CSE Diploma" percent={90} />
              <Progress title="Web Development Course" percent={95} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Progress({ title, percent }) {
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
}
