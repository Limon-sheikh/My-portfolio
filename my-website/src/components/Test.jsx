
import { useEffect, useState } from "react";


const Test = () => {

  const [hasShadow, setHasShadow] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 2) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);






  return (
    <div className="h-24">
      <header
  className={`
    w-full flex items-center z-50 fixed top-0 bg-red-500 transition-all duration-300 ease-in-out
    ${hasShadow ? "shadow-2xl" : ""}
  `}
>
  <nav className="container mx-auto flex justify-between items-center px-5 h-20">
    <li><a href="">dfdkj</a></li>
    <li><a href="">dfdkj</a></li>
    <li><a href="">dfdkj</a></li>
    <li><a href="">dfdkj</a></li>
  </nav>
</header>
    </div>


  );
};

export default Test;