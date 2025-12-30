
import { useState, useEffect } from "react";
import Logo from './Logo';
import NavLinks from './NavLinks';
import Button from './Button';
import MenuToggle from './toggleFunction/MenuToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  // mobile device navber show and scrolling stop hendeler
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // safety reset
    };
  }, [open]);


  // navber sticky state hendeler
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
      <header className="w-full h-20 flex items-center bg-sec_one_bg_c">
        <nav className={`w-full fixed z-50 h-20 transition-all duration-150 ease-in-out 
          ${isSticky ? "shadow-[0px_12px_11px_-5px_rgba(0,_0,_0,_0.1)] bg-white" : "bg-transparent"}`}>
          <div className="container mx-auto h-20 flex items-center justify-between px-5 md:px-0 ">
            <Logo />
            <NavLinks parentClass="hidden md:block " childClass="bg-green-500"
            />
            <MenuToggle isOpen={open} toggle={toggle} />
            <Button title="hire me" border={false}
              className="text-2xl text-text_C_W rounded-md md:font-bold md:px-4 md:py-2 xl:px-5 xl:py-3 capitalize font 
              bg-dark_blue hover:bg-hover_c_g transition-all duration-150 ease-linear hidden md:block"
            />
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <header className={`fixed top-0 left-0 h-full w-[60vw] shadow-xl z-[70] border-l border-white/20 backdrop-blur-md bg-white/30
        md:hidden transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="flex flex-col justify-around h-full">
          <NavLinks onLinkClick={toggle} parentClass="md:hidden flex flex-col gap-3 items-center text-md" 
            childClass=""
          />
          <div className="py-2 flex justify-around items-center">
            <Button onLinkClick={toggle} title="hire me" border={false}
              className="text-xl font-semibold text-gray capitalize rounded-md px-4 py-1 bg-accent hover:bg-hover transition-all duration-150 ease-linear"
              />
          </div>
        </nav>
      </header>

      {/* Backdrop Layer */}
      {open && (
        <div onClick={toggle} className="fixed inset-0 md:hidden bg-black/10 backdrop-blur-sm z-[60] transition-opacity duration-300"></div>
      )}
    </>
  );
};

export default Navbar;