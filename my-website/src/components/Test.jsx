
import { useState } from "react";
import MenuToggle from "./MenuToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      {/* Navbar */}
      <header
        className="
          fixed top-0 left-0 w-full z-50 
          backdrop-blur-xl bg-white/20  
          border-b border-white/20
          shadow-lg
        "
      >
        <div className="container mx-auto px-5 md:px-0 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white drop-shadow">WebRoots</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-lg text-white">
            <a href="#" className="hover:text-accent transition">Home</a>
            <a href="#" className="hover:text-accent transition">About</a>
            <a href="#" className="hover:text-accent transition">Projects</a>
            <a href="#" className="hover:text-accent transition">Contact</a>
          </nav>

          {/* Toggle Button */}
          <MenuToggle isOpen={open} toggle={toggle} />
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 
          backdrop-blur-2xl bg-white/30
          border-l border-white/20
          shadow-xl
          z-[70]
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="p-6 flex flex-col gap-6 text-xl mt-20 text-white">
          <a onClick={toggle} href="#" className="hover:text-accent transition">Home</a>
          <a onClick={toggle} href="#" className="hover:text-accent transition">About</a>
          <a onClick={toggle} href="#" className="hover:text-accent transition">Projects</a>
          <a onClick={toggle} href="#" className="hover:text-accent transition">Contact</a>
        </nav>
      </div>

      {/* Backdrop Layer */}
      {open && (
        <div
          onClick={toggle}
          className="
            fixed inset-0 bg-black/50 backdrop-blur-sm 
            z-[60] transition-opacity duration-300
          "
        ></div>
      )}
    </>
  );
};

export default Navbar;
