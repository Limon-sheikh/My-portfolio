import { useState } from "react";
// import PropTypes from "prop-types";

const Button = () => {
    
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // mouse move and leave start
    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;

        // mouse position and movement speed set
        const moveX = (offsetX / clientWidth - 0.5) * 30;
        const moveY = (offsetY / clientHeight - 0.5) * 30;
        setPosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };
    // end 

    // Props validation and default value ser start
    // Button.propTypes = {
        // title: PropTypes.string.isRequired, // title obosshoi string hote hobe
        // bgColor: PropTypes.string.isRequired, // bgColor obosshoi string hote hobe (Tailwind CSS class)
        // border: PropTypes.bool,
        // icon: PropTypes.node,
    // };

    // Button.defaultProps = {
    //     border: true,
    //     icon: null, 
    //   };
    // end   

      

    return (
        <button onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            className={`bg-white text-gray-700 md:text-xl lg:text-2xl md:px-4 md:py-2 xl:px-5 xl:py-3 rounded-md capitalize font-bold border-accent
            transition-all duration-150 ease-linear border hidden md:block`}
            style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
            hire me
        </button>
    );
};

export default Button;
