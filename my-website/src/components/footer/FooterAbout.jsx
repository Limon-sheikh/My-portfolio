// import React from 'react';

import { footerData } from "../../data/footer";
import SocialIcon from "../hero/SocialIcon";
import Logo from '../Navber/Logo'

const FooterAbout = () => {
    return (
      <div className="w-full max-w-full border">
        {footerData.map((item) => (
          <div key={item.id} className="w-full">
            {item.type === "about" && (
              <div className="flex flex-col overflow-hidden">
                <Logo />
                <h5 className="break-words text-sm leading-relaxed mt-6">{item.description}</h5>
                <SocialIcon size={20} wrapperClass="flex flex-wrap justify-start gap-10 lg:gap-6 mt-12" 
                className="flex flex-wrap gap-10 border border-dashed rounded-full p-2"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
};

export default FooterAbout;