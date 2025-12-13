import { useState } from "react";
import TabButtons from "../components/about/TabButton";
import { aboutInfo } from "../data/about";
import TabContent from "../components/about/TabContent";

import Test from "../components/Test";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="md:bg-red-400 ">
      <div className="container mx-auto px-5 py-20">
        <div id="wraper" className="rounded-xl pb-10 overflow-hidden shadow-[0px_0px_15px_7px_rgba(0,_0,_0,_0.1)] 
          md:flex md:bg-green-200">
          <div className="flex flex-col items-center justify-center  md:bg-fuchsia-500">
            <div className=" flex justify-center items-center     md:bg-green-800 ">
              <img src={aboutInfo.image} alt="about image" className="px-5" />
            </div>
          </div>

          <div className="px-5 pt-14 col-span-6  lg:bg-red-700">
            <div className="text-center">
              <h1 className="text-4xl font-bold">{aboutInfo.title}</h1>
              <p className="text-md pb-5 pt-3 text-justify font-medium opacity-60">{aboutInfo.description}</p>
            </div>
            <div><TabButtons activeTab={activeTab} setActiveTab={setActiveTab}/></div>
            <div className="mt-5 overflow-hidden"><TabContent activeTab={activeTab}/></div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
