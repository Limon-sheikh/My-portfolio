import { useEffect } from "react";


const Test = () => {

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  return (
    <div className="h-[calc(var(--vh,1vh)*100)] bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Dynamic Hero Section</h1>
    </div>
  );
};

export default Test;
