import Test from './components/Test'

import { useState } from "react";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import Button from "./components/Button";
import MenuToggle from "./components/MenuToggle";
import HeroData from './data/hero';
import './App.css'; // custom animation 



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const {title, titleName, subtitle, subtitleName, description, socials, image} = HeroData[0];

  return (
    <>
      <header className="bg-white shadow top-0 left-0 w-full relative z-50">
        <nav className="container mx-auto flex justify-between items-center p-5 relative h-24">
          <Logo />
          <NavLinks isOpen={isOpen} />
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

      <main className="bg-red-200">
        <section className="container mx-auto bg-green-300 grid md:grid-cols-12 h-[calc(100vh-96px)] max-h-[920px] min-h-[500px]
          sm: ">
          {/* hero left side content start */}
            <div className="bg-orange-200 text-gray col-span-7 px-5">
              <h1 className="text-[clamp(2rem,11vw,5rem)] leading-tight md:text-7xl lg:text-8xl font-bold mt-10">
                {title} <br/><span className="text-accent ">{titleName}</span>
              </h1>
              <div className="mt-10 flex flex-wrap">
                <span className="pr-1 text-[15px]">{subtitle}</span>
                <div className="flex items-center">
                  <span className="text-md sm:text-xl font-bold typewriter">{subtitleName}</span>
                </div>
              </div>
              <p className="mt-8">{description}</p>

              {/* hero social icons */}
              <div className="grid grid-flow-col justify-between md:justify-start mt-36 md:mt-80 lg:mt-10 md:gap-6">
                {socials.map((social, index) =>(
                  <a key={index} href={social.link} target='_blank' className="p-2 bg-accent rounded-full">
                    <social.icon style={{color: social.color}}/>
                  </a>
                ))}
              </div>

              {/* hero button */}
              <div className="my-4 flex justify-between md:justify-start md:gap-16">
                <Button title='view more' border={false}
                  className="
                    bg-accent text-gray px-4 py-2 font-semibold text-md md:text-lg hover:bg-hover
                    transition-all duration-150 ease-linear 
                  "/>
                <Button title='Downlod Cv' border={true}
                  className="border-accent text-gray px-4 py-2 font-semibold text-md md:text-lg hover:bg-accent
                  transition-all duration-150 ease-linear border-2
                "/>
              </div>
            </div>
          {/* hero left side content end */}
            

          {/* hero right side content start */}
            <div className="hidden md:block border-2 border-red-400 col-span-5 ">
              <div className='bg-red-300 grid justify-center items-center h-[100%]'>
                <img src={image} alt="hero image" className='bg-blue-300'/>
              </div>
            </div>
          {/* hero right side content end */}
        </section>

        {/* <section className='bg-orange-500 container mx-auto'>
            <h1>about me</h1>
        </section> */}



        {/* <Test></Test> */}
      </main>
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
