// import React from 'react';
import {contactInfo, sectionTitle} from '../data/contact';
import ContactForm from '../components/contact form/ContactForm ';
import Lottie from "lottie-react";

const Contact = () => {
    return (
        <section className="pt-20">
            <div className="container mx-auto">
                <div id="wraper" className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 px-5 md:px-0">
                    <div className=''>
                        <div className='border-b border-b-black/20'>
                            <h1 className="text-4xl text-primary font-bold pb-2">{sectionTitle.title}</h1>
                            <p className="pb-8 text-md text-secondary/50 font-medium ">{sectionTitle.description}</p>
                        </div>
                        {contactInfo.map((item)=>(
                            <div key={item.id} className="pt-8 flex flex-col gap-2">
                                <h5 className='text-md text-primary font-medium'>{item.title}</h5>
                                <div className='flex gap-3 items-center w-[330px]'>
                                    <span className=''>
                                        <Lottie animationData={item.animation} className='w-14 h-14'/>
                                    </span>
                                    <p className='text-md text-secondary font-medium'>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bg-white shadow-[0px_0px_15px_7px_rgba(0,_0,_0,_0.1)] rounded-3xl relative top-16'>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;