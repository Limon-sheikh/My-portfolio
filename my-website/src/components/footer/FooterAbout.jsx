// import React from 'react';

import { footerData } from "../../data/footer";
import SocialIcon from "../hero/SocialIcon";
import Logo from '../Navber/Logo'

const FooterAbout = () => {
    return (
        <div>
            {footerData.map((item) =>(
                <div key={item.id}>
                    {item.type === 'about' &&(
                    <div className="bg-green-600 flex flex-col gap-5">
                        <Logo/>
                        <h4>{item.description}</h4>
                        <SocialIcon/>
                    </div>
                )}
                </div>
            ))}
        </div>
    );
};

export default FooterAbout;