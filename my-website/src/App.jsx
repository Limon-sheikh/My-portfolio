import Test from './components/Test'

import {Menu, Github, Facebook, Linkedin, Youtube, Instagram} from 'lucide-react';

import { useState } from "react";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import Button from "./components/Button";
import MenuToggle from "./components/MenuToggle";
import HeroData from './data/hero';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const {title, titleName, subtitle} = HeroData[0];


  return (
    <>
      <header className="bg-white shadow top-0 left-0 w-full relative z-50">
        <nav className="container mx-auto flex justify-between items-center p-5 relative ">
          <Logo />
          <NavLinks isOpen={isOpen} />
          <div className="flex items-center gap-4">
            <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
            <Button/>
          </div>
        </nav>
      </header>

      <main className="bg-red-200">
        <section className='container mx-auto bg-green-300 flex'>
          <div className='bg-orange-200 p-5'>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mt-16">
              {title} <br/><span className="text-accent">{titleName}</span>
            </h1>
            <span className='text-xl inline-block pt-8'>{subtitle}</span>
            <div className='bg-red-300 flex justify-between md:justify-start mt-28 md:gap-8'>
              <span className='bg-white py-2 md:py-3 px-1 md:px-2 text-gray-800 rounded- rotate-[25deg] shadow-2xl'><Github size={30}/></span>
              <span className='bg-white py-2 md:py-3 px-1 md:px-2 text-blue-800 rounded- rotate-[25deg] shadow-2xl'><Linkedin size={30}/></span>
              <span className='bg-white py-2 md:py-3 px-1 md:px-2 text-blue-800 rounded- rotate-[25deg] shadow-2xl'><Facebook size={30}/></span>
              <span className='bg-white py-2 md:py-3 px-1 md:px-2 text-red-500 rounded- rotate-[25deg] shadow-2xl'><Youtube size={30}/></span>
              <span className='bg-white py-2 md:py-3 px-1 md:px-2 text-red-500 rounded- rotate-[25deg] shadow-2xl'><Instagram size={30}/></span>
            </div>
          </div>
        </section>



      </main>
        {/* <Test></Test> */}
    </>
  );
}

export default App;




















// import Logo from './components/Logo'
// import NavLinks from './components/NavLinks'
// import Button from './components/Button'


// function App() {

//   return (
//     <>
//       <header className='bg-white'>
//         <nav className='container mx-auto p-3 border border-gray-600 flex justify-between items-center'>
//           <Logo/><NavLinks/><Button/>
//         </nav>
//       </header>

//       <main>
//         <section></section>
//       </main>
//       <Test/>
//     </>
//   )
// }

// export default App
