import React from "react";
import santo from "../assets/santo.jpg";

const Explore = () => {
  return (
    <section className="px-[100px] text-black">
      <h1 className="mt-[74px] text-center text-5xl font-extrabold">
        EXPLORE GREEK ISLANDS
      </h1>
      <p className="my-[16px] opacity-60 text-center text-2xl">
        Visit all beautiful Greek islands:Santorini, Mykonos, Crete, <br />
        Rhodes, Corfu, Paros…
      </p>
      <button className="block mx-auto w-[174px] h-12 relative bg-cyan-500 rounded-md text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
        Learn more
      </button>

      <div className="mt-[100px] flex justify-between h-[450px]">
        <div className="w-[48%] h-full rounded-[24px] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={santo}
            alt="vacation pic"
          />
        </div>
        <div className="w-[48%] h-full flex flex-col justify-between">
          <div className="h-[46%] overflow-hidden rounded-[24px]">
            <img
              className="h-full w-full object-cover"
              src={santo}
              alt="vacation pic"
            />
          </div>
          <div className="h-[46%] overflow-hidden rounded-[24px]">
            <img
              className="h-full w-full object-cover"
              src={santo}
              alt="vacation pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
