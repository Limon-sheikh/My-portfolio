import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navber/Navber";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Footer from "./pages/Footer";

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
      {/* <Footer/> */}
    </>
  );
}

export default App;

