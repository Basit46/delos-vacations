import React from "react";
import banner from "../assets/banner.svg";

const About = () => {
  return (
    <section className="mt-[250px]">
      <h1 className="w-[1080px] mx-auto text-center text-black text-5xl font-extrabold leading-[1.3]">
        LAUNCHED IN 1973, DELOS BOASTS A UNIQUE HISTORY.
      </h1>
      <p className="mt-[40px] w-[1002px] mx-auto opacity-60 text-center text-black text-2xl">
        Our team of travel professionals located in New York, Athens and Mykonos
        have first-hand travel experience. We have long-established
        relationships that offer our clients a curated experience.
      </p>

      <img className="mx-auto mt-[75px]" src={banner} alt="banner" />
    </section>
  );
};

export default About;
