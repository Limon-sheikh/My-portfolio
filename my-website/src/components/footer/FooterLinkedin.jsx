import React from 'react';
import { footerData } from '../../data/footer';

const FooterLinkedin = () => {
    return (
        <div>
             {footerData.map((item) =>(
                <div key={item.id}>
                    {item.type === "linkedin" && (
                        <div className='flex flex-col gap-4 flex-wrap overflow-hidden break-words'>
                            <h5 className="text-xl font-semibold capitalize text-text_C_W">{item.title}</h5>
                            <div className="mt-7 relative after:content-[''] after:absolute after:left-8
                                after:-bottom-12 after:w-0 after:h-0 after:block after:border-t-[80px] after:border-t-light_blue 
                                after:border-l-[0px] after:border-l-transparent after:border-r-[60px] after:border-r-transparent 
                                after:rotate-[20deg] after:z-[0] after:-z-1
                            ">
                                <div className='bg-light_blue group rounded-xl px-4 py-4 relative top-0 left-0 z-10'>
                                    <p className='pb-3 text-text_C_W/50 text-md font-medium'>{item.description}</p>
                                    <a href="" className='text-text_C_W text-md font-medium group-hover:text-hover_c_g transition-all duration-700'>
                                        {item.name}
                                    </a>
                                </div>
                            </div>
                            <div>
                                {item.link.map((linkItem) =>{
                                    const Icon = linkItem.icon;

                                    return(
                                        <a href={linkItem.url} className='flex gap-3 items-center'>
                                            <span className='text-text_C_W'>{Icon && <Icon size={42}/>}</span>
                                            <span className='font-semibold text-md text-text_C_W/50'>{linkItem.name}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
             ))}
        </div>
    );
};

export default FooterLinkedin;