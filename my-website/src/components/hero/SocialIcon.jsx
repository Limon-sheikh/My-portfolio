import React from 'react';
import HeroData from '../../data/hero';

const SocialIcon = () => {
    
    const {socials} = HeroData[0];

    return (
        <div className="grid grid-flow-col justify-between md:justify-start md:gap-6 py-2">
            {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" style={{borderColor: social.color, transition: "all 0.4s ease-in-out"}}
                    className="p-2 border rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color; e.currentTarget.firstChild.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.firstChild.style.color = social.color;}}
                >
                <social.icon style={{color: social.color, transition: "all 0.4s ease-in-out"}} size={26}/>
                </a>
            ))}
        </div>
    );
};

export default SocialIcon;