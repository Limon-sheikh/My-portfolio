import React from "react";

import Card from "../components/services/Card";
import { cardData, serviceTitle } from "../data/services";

const Services = () => {
  return (
    <section className="my-32 bg-[#ebeff5]">
      <div className="container mx-auto py-32 ">
        <div className="flex justify-center mb-16">
          <div className="text-center w-[600px]">
            <h6 className="">{serviceTitle.offer}</h6>
            <h2 className="text-4xl font-bold mb-2">{serviceTitle.title}</h2>
            <p>{serviceTitle.description}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 border-2">
          {cardData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              Icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
