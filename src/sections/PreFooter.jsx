import React from "react";
import img1 from "../assets/p1.svg";
import img2 from "../assets/p2.svg";
import mailIcon from "../assets/sms.svg";

const PreFooter = () => {
  return (
    <section className="mt-[140.77px] mb-[91px]">
      <div className="flex gap-[40px] justify-center items-center">
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

      <div className="mt-[32px] flex gap-[15px] justify-center">
        <div className="bg-[#EDEDED] flex gap-[10px] w-[351px] h-[48px] items-center px-[16px] rounded-[6px]">
          <img src={mailIcon} alt="mail" />
          <input className="flex-1 bg-transparent outline-none" type="email" />
        </div>
        <button className="w-[171px] h-[48px] rounded-[6px] bg-[#09B4DA] text-white font-PlusJakartaSans tracking-[-0.289px] font-[600]">
          Download
        </button>
      </div>
    </section>
  );
};

export default PreFooter;
