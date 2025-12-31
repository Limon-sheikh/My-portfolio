import React from 'react';
import TypeWriter from '../components/hero/TypeWriter';

const Projects = () => {
    return (
        <div className='my-64 flex justify-center'>
            <div className='bg-green-700 relative p-2 w-8 h-8  before:content-[""] before:w-72 before:h-[1px]
             before:bg-red-400 before:absolute before:transition-all before:duration-1000 before:-right-20 before:-top-[50px]
                before:hover:h-full before:rotate-[31.5deg]

             after:content-[""] after:w-72 after:h-[1px] after:bg-fuchsia-500 after:absolute after:-bottom-[59px] after:-right-[14px] 
             after:transition-all after:duration-1000 after:transform after: after: after:rotate-[31.6deg] after:hover:h-full
            '>
                {/* <button className='bg-white'>click me</button> */}
            </div>
        </div>
    );
};

export default Projects;