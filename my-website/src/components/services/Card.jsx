import React from "react";

const Card = ({ title, description, Icon, iconColor, id, accent }) => {
  return (
    <div className="border relative bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
      <div className={`absolute -top-[12px] right-4 text-center rounded-xl`}>
        <span className={`border-dashed border inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold ${accent} `} aria-hidden>
          {id.toUpperCase()}
        </span>
      </div>

      <div className="shadow-xl gap-8 items-center bg-red-300">
        <div className={`bg-green-400 inline-block p-3 rounded-xl ${accent}`}>
          {Icon && <Icon color={iconColor} size={35} />}
        </div>
          <h3 className="text-xl font-semibold mt-6 mb-3">{title}</h3>
          <p className="text-gray-600 text-justify">{description}</p>
          {/* <p>{tagline}</p> */}
        <div className="">
          
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Card;
