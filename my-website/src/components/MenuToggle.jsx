

// import { Menu, X } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";

const MenuToggle = ({ isOpen, toggle }) => {
    return (
        <button onClick={toggle} className="md:hidden z-50 transition-all duration-1000">
            {/* {isOpen ? null : <FiMenu size={40} />} */}
            <FiMenu size={40}/>
        </button>
    );
};

export default MenuToggle;





