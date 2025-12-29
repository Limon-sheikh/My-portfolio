import React from "react";

import Card from "../components/services/Card";
import { cardData, serviceTitle } from "../data/services";

const Services = () => {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-5 md:px-0">
          <div className="flex justify-center mb-16">
            <div className="text-center w-[600px]">
              <h6 className="font-semibold text-lg text-primary/60">{serviceTitle.offer}</h6>
              <h2 className="text-4xl font-bold text-primary mb-2">{serviceTitle.title}</h2>
              <p className="font-medium text-md text-primary/60">{serviceTitle.description}</p>
            </div>
          </div>
          <div className="grid gap-14 grid-cols-1 lg:grid-cols-3">
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
      <hr />
    </div>
  );
};

export default Services;
