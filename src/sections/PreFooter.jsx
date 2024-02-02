import React from "react";
import img1 from "../assets/p1.svg";
import img2 from "../assets/p2.svg";

const PreFooter = () => {
  return (
    <section>
      <div className="mt-[140.77px] flex gap-[40px] justify-center items-center">
        <img src={img1} alt="Accredited Partner" />
        <img src={img2} alt="Accredited Partner" />
      </div>

      <h1 className="mt-[116px] text-center text-5xl font-extrabold leading-[1.3]">
        Download Our Free Travel Guide To Greece
      </h1>
      <p className="my-[16px] opacity-60 text-center text-2xl">
        Dedicated to delivering exclusive cultural experiences, with first-hand
        travel <br /> experience
      </p>
    </section>
  );
};

export default PreFooter;
