import React from 'react';
import { footerData } from '../../data/footer';

const NewsLetter = () => {
    return (
        <div>
            {footerData.map((item) =>(
                <div key={item.id}>
                    {item.type === "signup" && (
                        <div>
                            <h5 className="text-xl font-semibold capitalize">{item.title}</h5>
                            <p className='mt-9'>{item.description}</p>
                            <form action="#" className='mt-6 h-14 flex'>
                                <input type="text" placeholder={item.placeholder} 
                                className='px-5 h-full w-full text-black outline-none rounded-tl-lg rounded-bl-lg'
                                />
                                <button type="submit" className='bg-green-400 h-full px-8 capitalize font-semibold rounded-tr-lg rounded-br-lg '>
                                    {item.buttonText}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NewsLetter;