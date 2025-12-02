import React from "react";

const Card = ({ title, description, tools, Icon, id, accent, tagline, shadow }) => {
  return (
    <div className={`relative bg-white rounded-xl p-6 ${shadow} transition-all duration-300`}>
      <div className={`absolute -top-[12px] right-4 text-center rounded-xl`}>
        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold ${accent}`} aria-hidden >
          {id.toUpperCase()}
        </span>
      </div>

      <div className="gap-8 items-center">
        <div className={`inline-block p-3 rounded-xl ${accent}`}>
          {Icon && <Icon size={35} />}
        </div>
        <div className="mt-2">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <h6 className="mb-4">{tagline}</h6>
          <div className="max-h-32 mt-2 overflow-y-auto overflow-x-hidden break-words">
            <p className="text-gray-600 text-start">{description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          {tools.map((tool, index) => {
            const Ico = tool.icon;
            return (
              <div className={`rounded-md ${accent}`}>
                <span key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-sm">
                  <Ico className="text-lg"/> {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
