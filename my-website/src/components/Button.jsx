import { useState } from "react";
import PropTypes from "prop-types";


const Button = ({title, className, border}) => {
    
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

    // Props validation and default value start
    Button.propTypes = {
        title: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        border: PropTypes.bool,
        // icon: PropTypes.node,
    };

    Button.defaultProps = {
        border: true,
        icon: null, 
      };
    // end   

      

    return (
        <button onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            className={`${className} ${border ? 'border' : ''} `}
            style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
            {title}
        </button>
    );
};

export default Button;
