import React from "react";

import { menuItems } from "../../data/about";

function TabButtons({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-8 text-lg font-semibold bg-red-500">
      {menuItems.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabButtons;
