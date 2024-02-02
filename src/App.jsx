import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Booking from "./sections/Booking";
import About from "./sections/About";
import Explore from "./sections/Explore";
import Discover from "./sections/Discover";
import Features from "./sections/Features";
import PreFooter from "./sections/PreFooter";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div>
      <div className="relative heroBg min-h-[100vh] text-white">
        <Navbar />
        <Hero />
        <Booking />
      </div>

      <About />
      <Explore />
      <Discover />
      <Features />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default App;
