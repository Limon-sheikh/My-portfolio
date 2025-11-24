import React from "react";

import { menuItems } from "../../data/about";

function TabButtons({ activeTab, setActiveTab }) {
  return (
    <ul className="flex text-md font-semibol p-0 m-0 gap-4">
      {menuItems.map((tabBtn) => (
        <li key={tabBtn.id}>
          <button
            onClick={() => setActiveTab(tabBtn.id)}
            className={`flex items-center transition-all duration-300 px-4 py-2
              ${
                activeTab === tabBtn.id
                  ? "border-b-2 border-accent"
                  : "text-gray-600 border-b-2 border-transparent"
              }`}
          >
            <span>{tabBtn.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TabButtons;

