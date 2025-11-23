import { useState } from "react";
import TabButtons from "../components/about/TabButton";
import { aboutInfo } from "../data/about";
import TabContent from "../components/about/TabContent";
// import Test from '../components/Test'

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="pt-20 pb-20 border-2 border-green-400">
      <div className="container mx-auto border-2 border-red-500 grid grid-cols-12 gap-4">
        <div className="left-side bg-orange-300 col-span-6">
          <div className="bg-green-300 ">
            <img src={aboutInfo.image} alt="" className="h-[550px]" />
          </div>
        </div>
        <div className="right-side col-span-6 bg-violet-500">
          <div>
            <div>
              <h1 className="text-4xl font-bold p-4">{aboutInfo.title}</h1>
              <p className="text-md p-4">{aboutInfo.description}</p>
            </div>
            <div>
              <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
              <TabContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <Test/>
  );
};

export default About;
