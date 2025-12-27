import React from "react";
import { footerData } from "../../data/footer";

const FooterLink = () => {
  return (
    <div className="border">
      {footerData.map((item) => (
        <div key={item.id}>
            {item.type === "link" && (
                <div className="flex flex-col gap-7">
                    <h5 className="text-xl font-semibold">{item.title}</h5>
                    <ul className="flex flex-col gap-2 ">
                        {item.link.map((linkItem) => { 
                            const Icon = linkItem.icon;

                            return (
                            <li key={linkItem.id} className="flex gap-3 items-center hover:text-green-300 transition-all duration-300">
                                <Icon size={16} />
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
