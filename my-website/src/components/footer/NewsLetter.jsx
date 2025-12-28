import React from 'react';
import { footerData } from '../../data/footer';

const NewsLetter = () => {
    return (
        <div className='border'>
            {footerData.map((item) =>(
                <div key={item.id}>
                    {item.type === "signup" && (
                        <div>
                            <h5 className="text-xl font-semibold capitalize">{item.title}</h5>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NewsLetter;