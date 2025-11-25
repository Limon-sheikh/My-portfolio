import { useState } from "react";
import TabButtons from "../components/about/TabButton";
import { aboutInfo } from "../data/about";
import TabContent from "../components/about/TabContent";
import Test from "../components/Test";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="my-32 bg-white">
      <div className="container mx-auto rounded-xl overflow-hidden grid grid-cols-12 gap-4 shadow-md bg-white">
        <div className="left-side col-span-6 border-2">
          <div className="flex justify-center ">
            <img src={aboutInfo.image} alt="" className="h-[550px]" />
          </div>
        </div>
        <div className="right-side col-span-6 px-10 pt-14">
          <div>
            <h1 className="text-5xl font-bold">{aboutInfo.title}</h1>
            <p className="text-md pb-5 pt-3 text-justify">
              {aboutInfo.description}
            </p>
          </div>
          <div>
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="mt-6">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
      <Test />
    </section>
  );
};

export default About;
