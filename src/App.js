import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Certificate/>
     <Projects/>
     <Contact/>
     <Footer/>
    
    </div>
  );
}

export default App;
