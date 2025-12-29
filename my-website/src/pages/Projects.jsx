import React from 'react';
import TypeWriter from '../components/hero/TypeWriter';

const Projects = () => {
    return (
        <div>
            <TypeWriter typingSpeed={80} deletingSpeed={50} delay={1500}
            texts= {['front end developer', 'UI/UX designer', 'wordpress developer']}
            />
        </div>
    );
};

export default Projects;