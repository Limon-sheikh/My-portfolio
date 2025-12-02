import React from "react";

import Card from "../components/services/Card";
import { cardData, serviceTitle } from "../data/services";

const Services = () => {
  return (
    <section className="py-20 sm:bg-green-300">
      <div className="container mx-auto sm:bg-blue-300 px-5 md:px-0">
        <div className="flex justify-center mb-16">
          <div className="text-center w-[600px]">
            <h6 className="">{serviceTitle.offer}</h6>
            <h2 className="text-4xl font-bold mb-2">{serviceTitle.title}</h2>
            <p>{serviceTitle.description}</p>
          </div>
        </div>
        <div className="grid gap-14">
          {cardData.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              Icon={item.icon}
              tools={item.tools}
              accent={item.accent}
              tagline={item.tagline}
              shadow={item.shadow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
