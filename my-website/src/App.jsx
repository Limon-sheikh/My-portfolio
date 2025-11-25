import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navber/Navber";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
// import Projects from "./pages/Projects";
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
          <Route path="/services" element={<Services />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;

