import React from "react";

import { menuItems } from "../../data/about";

function TabButtons({ activeTab, setActiveTab }) {
  return (
    <ul className="flex flex-wrap text-md gap-4 font-semibold text-primary/60">
      {menuItems.map((tabBtn) => (
        <li key={tabBtn.id}>
          <button onClick={() => setActiveTab(tabBtn.id)} 
            className={`flex items-center transition-all duration-500 px-2 py-1
            ${activeTab === tabBtn.id ? "border-b-2 border-primary/60" : "border-b-2 border-transparent"}`}>
            <span>{tabBtn.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TabButtons;

