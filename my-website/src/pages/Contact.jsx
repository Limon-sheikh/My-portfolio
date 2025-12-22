// import React from 'react';
import {contactInfo} from '../data/contact';
import ContactForm from '../components/contact form/ContactForm ';
import Lottie from "lottie-react";

const Contact = () => {
    return (
        <section className="relative py-20">
            <div className="container mx-auto">
                <div id="wraper" className="grid grid-cols-1 gap-28 lg:grid-cols-2 lg:gap-5 px-5 md:px-0">
                    <div id="contact-info">
                        <div className='border-b border-b-black/20'>
                            <h1 className="text-4xl font-bold pb-2">Let's Connect</h1>
                            <p className="pb-8 text-md font-medium opacity-60">labore?</p>
                        </div>
                        {contactInfo.map((item)=>(
                            <div key={item.id} className="pt-8 flex flex-col gap-2">
                                <h5 className='text-md font-medium'>{item.title}</h5>
                                <div className='flex gap-3 items-center w-[330px]'>
                                    <span className=''>
                                        <Lottie animationData={item.animation} className='w-14 h-14'/>
                                    </span>
                                    <p className='text-md font-medium'>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bg-white shadow-[0px_0px_15px_7px_rgba(0,_0,_0,_0.1)] rounded-lg '>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;