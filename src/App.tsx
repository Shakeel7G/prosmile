import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
// import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
