
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(true);

  

  return (
    <div className="text-center">
      <div className={`mt-2 ml-8 w-10 h-10  ${open ? 'bg-yellow-300' : 'bg-slate-50'}`}></div>
      <button onClick={() => setOpen(!open)} className="p-5 bg-red-400">
        click me
      </button>
    </div>
  );
};

export default Navbar;
