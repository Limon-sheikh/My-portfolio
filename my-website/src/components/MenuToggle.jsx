

import { Menu, X } from "lucide-react";

const MenuToggle = ({ isOpen, toggle }) => {
    return (
        <button onClick={toggle} className="md:hidden z-50">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
    );
};

export default MenuToggle;
 