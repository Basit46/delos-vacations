import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[100px] pt-[20px]">
      <img src={logo} alt="logo" />

      <ul className="flex items-center gap-[24px]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Greece escape</a>
        </li>
        <li>
          <a href="#">Travel</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Our History</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <button className="bg-[#09B4DA] w-[169px] h-[48px] rounded-[6px] text-center text-base font-semibold">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;
