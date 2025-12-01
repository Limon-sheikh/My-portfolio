import React from "react";
import HeroData from "../data/hero";
import Button from "../components/Navber/Button";
import "../App.css"; // custom typewriter CSS
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const { hello, limon, sheikh, title, titleName, description, socials, image } = HeroData[0];

  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] w-full bg-orange-500">
      <div className="container mx-auto min-h-[calc(100vh-80px)] md:flex flex-col justify-center">
        <div className="px-5 md:px-0 md:grid md:grid-cols-12 gap-6">

          {/* Left Text + Typewriter */}
          <div className="pt-10 xxs:pt-12 flex flex-col md:col-span-6">
            {/* Hero Title */}
            <h1 className="text-3xl xxs:text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {hello}<br/>
              <span className="text-accent">{limon}</span><br/>
              <span className="text-accent">{sheikh}</span>
            </h1>

            {/* Typewriter */}
            <div className="mt-10 flex items-center flex-wrap gap-1 py-1">
              <span className="text-[14px] sm:text-base">{title}</span>
              <div className="flex items-center overflow-hidden whitespace-nowrap w-full max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem]">
                <span className="text-xl sm:text-2xl font-bold typewriter">{titleName}</span>
              </div>
            </div>

            {/* Description */}
            <p className="pt-3 text-justify text-base">{description}</p>

            {/* Social Icons */}
            <div className="mt-6 grid grid-flow-col justify-between md:justify-start md:gap-6 py-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderColor: social.color }}
                  className="p-2 border border-black rounded-3xl transition-colors duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.firstChild.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.firstChild.style.color = social.color;
                  }}
                >
                  <social.icon style={{ color: social.color }} size={20} />
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-5 pb-10">
              <Button
                title="View More"
                border={false}
                className="bg-accent text-gray px-4 py-2 font-semibold text-md md:text-lg hover:bg-hover transition-all duration-150 ease-linear"
              />
              <Button
                title="Download CV"
                border={true}
                className="border-accent text-gray px-4 py-2 font-semibold text-md md:text-lg hover:bg-accent transition-all duration-150 ease-linear border-2"
              />
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="hidden md:block md:col-span-6">
            <img src={image} alt="hero" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
