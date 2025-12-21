// import React from 'react';
import {contactInfo} from '../data/contact';

const Contact = () => {
    return (
        <footer className="bg-violet-200">
            <div className="container mx-auto py-20 bg-violet-300">
                <div id="wraper" className="grid grid-cols-1 lg:grid-cols-2 bg-violet-400">
                    <div id="contact-info">
                        <h1 className="text-2xl font-semibold pb-2">Lets contact</h1>
                        <p className="pb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, labore?</p>
                        <hr />
                        {contactInfo.map((item)=>(
                            <div className="pt-8 flex flex-col gap-2">
                                <h5>{item.id}</h5>
                                <div className='flex gap-6 items-center'>
                                    <span>{item.icon}</span>
                                    <div className='bg-green-600'>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="contact-form" className='bg-red-500'>dfdfd</div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;