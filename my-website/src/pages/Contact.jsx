// import React from 'react';
import {contactInfo} from '../data/contact';
import ContactForm from '../components/contact form/ContactForm ';
import Lottie from "lottie-react";

const Contact = () => {
    return (
        <section className="bg-violet-200  py-20">
            <div className="container mx-auto bg-violet-300">
                <div id="wraper" className="grid grid-cols-1 gap-28 lg:grid-cols-2 lg:gap-5 px-5 md:px-0 bg-violet-400">
                    <div id="contact-info">
                        <h1 className="text-3xl font-semibold pb-2">Let's Connect</h1>
                        <p className="pb-8 font-medium opacity-60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore?</p>
                        <hr />
                        {contactInfo.map((item)=>(
                            <div key={item.id} className="pt-8 flex flex-col gap-2">
                                <h5 className='font-medium'>{item.title}</h5>
                                <div className='flex gap-3 items-center w-80'>
                                    <span className='h-12 w-12'>
                                        <Lottie animationData={item.animation}/>
                                    </span>
                                    <p className='font-medium opacity-60'>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="contact-form" className='bg-white shadow-lg rounded-lg lg:mt-0'>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;