import React from "react";
import santo from "../assets/santo.jpg";
import banner2 from "../assets/banner2.svg";

const Discover = () => {
  return (
    <section className="mt-[150px] px-[100px] text-black">
      <h1 className="mt-[74px] text-center text-5xl font-extrabold leading-[1.3]">
        DISCOVER THE CARIBBEAN <br /> PARADISE
      </h1>
      <p className="my-[16px] opacity-60 text-center text-2xl">
        With spectacular scenery, water sports, and laid-back resorts, there is{" "}
        <br /> an island for everyone
      </p>
      <button className="block mx-auto w-[174px] h-12 relative bg-cyan-500 rounded-md text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
        Learn more
      </button>

      <div className="mt-[36px] w-full rounded-[24px] h-[456px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={santo}
          alt="vacation pic"
        />
      </div>

      <h1 className="mt-[74px] text-center text-5xl font-extrabold leading-[1.3]">
        BOOK WITH US FOR A TOP NOTCH TRAVEL <br /> EXPERIENCE
      </h1>
      <p className="my-[16px] opacity-60 text-center text-2xl">
        Our specialists will provide personalized advice and design a unique and
        customized <br /> itinerary tailored to meet your individual and group
        needs.
      </p>

      <img className="mt-[101px] mx-auto" src={banner2} alt="banner" />
    </section>
  );
};

export default Discover;
