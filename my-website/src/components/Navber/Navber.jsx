
import { useState } from "react";
import Logo from './Logo';
import NavLinks from './NavLinks';
import Button from './Button';
import MenuToggle from '../MenuToggle';

const Navber = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);


    return (
      <header className="bg-white shadow top-0 left-0 w-full z-50 sticky">
        <nav className="container mx-auto flex justify-between items-center p-4 relative h-24">
          <Logo />
          <NavLinks isOpen={isOpen}
            className="text-gray p-1 hover:text-accent inline-block duration-300 text-center font-semibold text-md md:bg-transparent      md:p-2 lg:text-lg"/>
          <div className="flex items-center gap-4">
            <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
            <Button title='hire me' border={false}
              className="
                text-2xl text-gray md:px-4 md:py-2 xl:px-5 xl:py-3 capitalize font-bold bg-accent 
                hover:bg-hover transition-all duration-150 ease-linear hidden md:block
              "/>
          </div>
        </nav>
      </header>
    );
};

export default Navber;