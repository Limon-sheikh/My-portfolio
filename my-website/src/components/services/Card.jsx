import React from "react";

const Card = ({ title, description, Icon }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
      <div className="bg-orange-400 inline-block p-3 rounded-xl">
        {Icon && <Icon className="" size={42} />}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
