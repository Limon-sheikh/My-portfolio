
import { useState } from "react";
import Logo from './Logo';
import NavLinks from './NavLinks';
import Button from './Button';
import MenuToggle from '../MenuToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      {/* desctop menu */}
      <header className="fixed top-0 left-0 w-full z-50  shadow-lg">
        <div className="container mx-auto px-5 md:px-0 h-16 flex items-center justify-between">
          <Logo/>
          <NavLinks/>
          <MenuToggle isOpen={open} toggle={toggle} />
          <Button title='hire me' border={false}  
            className="text-2xl text-gray md:px-4 md:py-2 xl:px-5 xl:py-3 capitalize font-bold bg-accent 
          hover:bg-hover transition-all duration-150 ease-linear hidden md:block"/>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-72  shadow-xl z-[70] transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="p-6 flex flex-col gap-6 text-xl mt-20 text-red-400">
          <a onClick={toggle} href="#" className="hover:text-accent transition">Home</a>
          <a onClick={toggle} href="#" className="hover:text-accent transition">About</a>
          <a onClick={toggle} href="#" className="hover:text-accent transition">Projects</a>
          <a onClick={toggle} href="#" className="hover:text-accent transition">Contact</a>
        </nav>
      </div>

      {/* Backdrop Layer */}
      {open && (<div onClick={toggle} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300"></div>)}
    </>
  );
};

export default Navbar;










// const Navber = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const toggleMenu = () => setIsOpen(!isOpen);


//     return (
//       <header className="h-20 px-5 shadow-lg sticky top-0 z-50 bg-white ">
//         <nav className="container mx-auto h-full flex justify-between items-center md:px-0">
//           <Logo />
//           <NavLinks isOpen={isOpen}
//             className="text-gray p-1 hover:text-accent inline-block duration-300 text-center font-semibold text-md md:bg-transparent      md:p-2 lg:text-lg"/>
//           <div className="flex items-center gap-4">
//             <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
//             <Button title='hire me' border={false}
//               className="
//                 text-2xl text-gray md:px-4 md:py-2 xl:px-5 xl:py-3 capitalize font-bold bg-accent 
//                 hover:bg-hover transition-all duration-150 ease-linear hidden md:block
//               "/>
//           </div>
//         </nav>
//       </header>
//     );
// };

// export default Navber;