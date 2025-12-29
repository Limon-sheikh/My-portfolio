import { useState } from "react";
import TabButtons from "../components/about/TabButton";
import { aboutInfo } from "../data/about";
import TabContent from "../components/about/TabContent";

// import Test from "../components/Test";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-5">
        <div id="wraper" className="rounded-xl overflow-hidden shadow-2xl lg:grid lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center items-center lg:w-full lg:h-full">
              <img src={aboutInfo.image} alt="about image" className="px-5 md:px-0 lg:h-full" />
            </div>
          </div>

          <div className="px-5 pt-14  pb-10 ">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary">{aboutInfo.title}</h1>
              <p className="text-md pb-5 pt-3 text-justify font-medium text-primary/60">{aboutInfo.description}</p>
            </div>
            <div><TabButtons activeTab={activeTab} setActiveTab={setActiveTab}/></div>
            <div className="mt-5 overflow-hidden"><TabContent activeTab={activeTab}/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
