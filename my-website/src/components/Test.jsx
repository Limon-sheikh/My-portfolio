import React from 'react';
import About from '../pages/About'
import { useEffect, useState } from "react";


const Test = () => {

  const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);




  return (
    <div>
      <header
  className={`w-full h-20 flex items-center z-50 transition-all duration-300 ease-in-out`}
>
  <nav className={`container mx-auto h-20 bg-fuchsia-600 flex gap-6 text-white px-5 
  ${isSticky ? "fixed top-0 " : "relative bg-red-500"}`}>
    <li>home</li>
    <li>about</li>
    <li>list</li>
  </nav>
</header>

    </div>
  );
};

export default Test;