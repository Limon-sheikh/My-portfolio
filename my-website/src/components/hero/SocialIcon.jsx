import React from 'react';
import HeroData from '../../data/hero';

const SocialIcon = ({size, className, wrapperClass}) => {
    
    const {socials} = HeroData[0];

    return (
        <div className={`${wrapperClass} grid grid-flow-col justify-between md:justify-start py-2`}>
            {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" style={{borderColor: social.color, transition: "all 0.4s ease-in-out"}}
                    className={`${className}`}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color; e.currentTarget.firstChild.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.firstChild.style.color = social.color;}}
                >
                <social.icon style={{color: social.color, transition: "all 0.4s ease-in-out"}} size={size}/>
                </a>
            ))}
        </div>
    );
};

export default SocialIcon;