import React, { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Booking from "./sections/Booking";
import About from "./sections/About";
import Explore from "./sections/Explore";
import Discover from "./sections/Discover";
import Features from "./sections/Features";
import PreFooter from "./sections/PreFooter";
import Footer from "./sections/Footer";
import heroBg1 from "./assets/hero1.svg";
import heroBg2 from "./assets/hero2.jpg";
import heroBg3 from "./assets/hero3.jpg";
import heroBg4 from "./assets/hero4.jpg";
import heroBg5 from "./assets/hero5.jpg";

const App = () => {
  const images = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];
  const [currId, setCurrId] = useState(0);

  useEffect(() => {
    var count = 1;
    const interval = setInterval(() => {
      if (count < images.length) {
        setCurrId(count);
        count++;
      } else {
        setCurrId(0);
        count = 1;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="relative min-h-[100vh] text-white">
        <div className="z-[-1] absolute h-full w-full bg-[skyblue]">
          <img
            className="h-full w-full object-cover"
            src={images[currId]}
            alt="vacation"
          />
        </div>
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
