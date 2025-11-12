import React from 'react';

import aboutData from '../data/about';
import NavLinks from '../components/NavLinks';
import secondaryMenu from '../data/secondaryMenu';

const About = () => {


    const {title, description, image} = aboutData [0];


    return (
        <section className='bg-green-300 pt-20 pb-20'>
            <div className="container mx-auto rounded-xl bg-blue-300 grid grid-cols-12 gap-4">
                <div className="left-side p-6 bg-orange-300 col-span-6">
                    <div className='bg-green-300 '>
                        <img src={image} alt="" className='h-[550px]'/>
                    </div>
                </div>
                <div className="right-side col-span-6 bg-violet-500">
                    <div>
                        <h1 className='text-4xl font-bold p-4'>{title}</h1>
                        <p className='text-md p-4'>{description}</p>
                        <div>
                            <div className='text-center bg-slate-200'>
                                <NavLinks Links={secondaryMenu}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;