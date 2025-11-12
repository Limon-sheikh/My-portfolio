

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navber/Navber";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
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
