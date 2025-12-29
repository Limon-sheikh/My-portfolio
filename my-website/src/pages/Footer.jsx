// import React from 'react';
// import {footerData} from "../data/footer";
import FooterAbout from "../components/footer/FooterAbout";
import FooterLink from "../components/footer/FooterLink";
import FooterLinkedin from "../components/footer/FooterLinkedin";
import NewsLetter from "../components/footer/NewsLetter";

const Footer = () => {
  return (
    <footer className="bg-dark_blue pt-28 pb-24">
      <div className="container mx-auto h-full">
        <div className="p-5 md:px-0 w-full grid grid-cols-1 gap-16 lg:gap-10 lg:grid-cols-[1.8fr_1fr_1fr_2fr]">
          <FooterAbout/>
          <FooterLink/>
          <FooterLinkedin/>
          <NewsLetter/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;