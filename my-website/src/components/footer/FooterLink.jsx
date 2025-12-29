import React from "react";
import { footerData } from "../../data/footer";

const FooterLink = () => {
  return (
    <div>
      {footerData.map((item) => (
        <div key={item.id}>
            {item.type === "link" && (
                <div className="flex flex-col gap-9">
                    <h5 className="text-xl font-semibold capitalize text-text_C_W">{item.title}</h5>
                    <ul className="flex flex-col gap-2 ">
                        {item.link.map((linkItem) => { 
                            const Icon = linkItem.icon;

                            return (
                            <li key={linkItem.id} 
                            className="flex gap-4 items-center text-text_C_W/50 hover:text-hover_c_g transition-all duration-500">
                                {Icon && <Icon size={16} />}
                                <a href={linkItem.url} className="">{linkItem.name}</a>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default FooterLink;
