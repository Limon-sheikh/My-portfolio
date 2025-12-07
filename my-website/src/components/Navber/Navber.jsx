
import { useState, useEffect } from "react";
import Logo from './Logo';
import NavLinks from './NavLinks';
import Button from './Button';
import MenuToggle from '../MenuToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  // mobile device navber show and scrolling stop hendeler
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // ✅ scroll বন্ধ
    } else {
      document.body.style.overflow = "auto"; // ✅ scroll চালু
    }

    return () => {
      document.body.style.overflow = "auto"; // ✅ safety reset
    };
  }, [open]);


  // navber sticky state hendeler
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
      {/* Desctop menu */}
      <header className="w-full h-20 flex items-center z-50 shadow-lg ">
        <nav
          className={`w-full bg-white z-50 md:px-0 h-20 ${isSticky ? "fixed top-0 " : "relative "}`}>
          <div className="container mx-auto h-20 flex items-center justify-between bg-fuchsia-600">
            <Logo />
            <NavLinks className="hidden md:block" />
            <MenuToggle isOpen={open} toggle={toggle} />
            <Button title="hire me" border={false}
              className="text-2xl text-gray rounded-md md:px-4 md:py-2 xl:px-5 xl:py-3 capitalize font bg-accent hover:bg-hover transition-all duration-150 ease-linear hidden md:block"
            />
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[60vw] shadow-xl z-[70] border-l border-white/20 backdrop-blur-md bg-white/30 md:hidden transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-around`}
      >
        <nav className=" ">
          <NavLinks
            onLinkClick={toggle}
            className="md:hidden flex flex-col gap-3 items-center"
          />
        </nav>
        <div className="py-2 flex justify-around items-center">
          <Button
            onLinkClick={toggle}
            title="hire me"
            border={false}
            className="text-xl font-semibold text-gray capitalize rounded-md px-4 py-1 bg-accent hover:bg-hover transition-all duration-150 ease-linear"
          />
        </div>
      </div>

      {/* Backdrop Layer */}
      {open && (
        <div
          onClick={toggle}
          className="fixed inset-0 md:hidden bg-black/10 backdrop-blur-sm z-[60] transition-opacity duration-300"
        ></div>
      )}
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