// import React from 'react';

import { footerData } from "../../data/footer";
import SocialIcon from "../hero/SocialIcon";
import Logo from '../Navber/Logo'

const FooterAbout = () => {
    return (
      <div className="w-full max-w-full">
        {footerData.map((item) => (
          <div key={item.id} className="w-full">
            {item.type === "about" && (
              <div className="flex flex-col gap-7 border overflow-hidden">
                <Logo />

                <h4 className="break-words text-sm leading-relaxed">
                  {item.description}
                </h4>

                <SocialIcon size={20} wrapperClass="flex flex-wrap gap-3 justify-start" 
                className="flex flex-wrap gap-3 border border-dashed rounded-full p-2"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
};

export default FooterAbout;