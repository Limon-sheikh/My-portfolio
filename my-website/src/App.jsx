// import Test from './components/Test'

import { useState } from "react";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import Button from "./components/Button";
import MenuToggle from "./components/MenuToggle";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center p-5 relative">
          <Logo />
          <NavLinks isOpen={isOpen} />
          <div className="flex items-center gap-4">
            <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
            <Button/>
          </div>
        </nav>
      </header>

      <main className="pt-24 container mx-auto">
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
