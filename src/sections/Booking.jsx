import React from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";

const Booking = () => {
  return (
    <div className="booking absolute bottom-[-130px] left-[50%] translate-x-[-50%] w-[933px] h-fit flex justify-center bg-white text-[#323232] p-[24px] rounded-[24px]">
      <div className="w-[714px]">
        <div className="w-full border-b pb-[41px] border-b-[#00000066]">
          <p className="opacity-40 text-xs">Your location</p>
          <p className="mt-[10px] text-[14px] font-[600]">Rembang, Indonesia</p>
        </div>

        <div className="mt-[41px] flex justify-between items-end">
          <div>
            <p className="opacity-40 text-[14px] font-[600]">Location</p>
            <span className="mt-[15px] w-fit flex items-center gap-[5px] py-[8px] px-[16px] border border-[#00000033] rounded-[24px]">
              <CiLocationOn />
              <p className="text-[12px] font-[600]">Singapore</p>
            </span>
          </div>

          <div>
            <p className="opacity-40 text-[14px] font-[600]">Check-In</p>
            <span className="mt-[15px] w-fit flex items-center gap-[5px] py-[8px] px-[16px] border border-[#00000033] rounded-[24px]">
              <CiCalendar />
              <p className="text-[12px] font-[600]">Mon, 14 Jan 2024</p>
            </span>
          </div>

          <div>
            <p className="opacity-40 text-[14px] font-[600]">Check-Out</p>
            <span className="mt-[15px] w-fit flex items-center gap-[5px] py-[8px] px-[16px] border border-[#00000033] rounded-[24px]">
              <CiCalendar />
              <p className="text-[12px] font-[600]">Mon, 24 Jan 2024</p>
            </span>
          </div>

          <div>
            <p className="opacity-40 text-[14px] font-[600]">Guest</p>
            <span className="mt-[15px] w-fit flex items-center gap-[5px] py-[8px] px-[16px] border border-[#00000033] rounded-[24px]">
              <IoPeopleOutline />
              <p className="text-[12px] font-[600]">4 person</p>
            </span>
          </div>

          <button className="bg-[#489BFC] text-white rounded-[24px] px-[16px] py-[8px] text-[12px] font-[600]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
