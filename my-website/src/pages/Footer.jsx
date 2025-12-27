// import React from 'react';
// import {footerData} from "../data/footer";
import FooterAbout from "../components/footer/FooterAbout";
import FooterLink from "../components/footer/FooterLink";

const Footer = () => {
  return (
    <footer className="bg-[#284b50] py-24 text-white">
      <div className="container mx-auto h-full">
        <div className="border p-5 md:px-0 w-full grid grid-cols-1 gap-8 lg:grid-cols-4">

          <FooterAbout/>
          <FooterLink/>


          {/* {footerData.map((item) => (
            <div key={item.id}>
              {item.type === "about"  &&(
                <div className="bg-green-800">
                  <p>{item.description}</p>
                </div>
              )}
              {item.type === "link"  &&(
                <div className="bg-blue-800">
                  <p>{item.description}</p>
                </div>
              )}
              {item.type === "linkedin"  &&(
                <div className="bg-orange-300">
                  <p>{item.description}</p>
                </div>
              )}
              {item.type === "signup"  &&(
                <div className="bg-pink-800">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))} */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;