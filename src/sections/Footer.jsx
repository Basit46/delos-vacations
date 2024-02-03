import React from "react";
import logo from "../assets/logo.svg";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002730] font-PlusJakartaSans px-[100px] pt-[91px] pb-[46px] flex items-start justify-between">
      <img src={logo} alt="logo" />

      <div>
        <p className="text-[#A1A6B1] text-sm  leading-tight">
          Send us an email
        </p>
        <p className="text-[#ECC708] text-xl font-medium  leading-normal">
          contact@hydrogen.com
        </p>
        <p className="mt-[16px] mb-[5px] text-[#A1A6B1] text-sm  leading-tight">
          Socials
        </p>
        <span className="flex text-[#727A8B] gap-[24px] text-[24px]">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </span>
      </div>

      <div className="links flex gap-[46px] text-white">
        <div>
          <h1>Exclusive Services</h1>
          <ul>
            <li>
              <a href="#">Greek Cruises</a>
            </li>
            <li>
              <a href="#">Greek Island Packages</a>
            </li>
            <li>
              <a href="#">Greek Honeymoon</a>
            </li>
            <li>
              <a href="#">Caribbean</a>
            </li>
            <li>
              <a href="#">Yacht Charter in Greece</a>
            </li>
            <li>
              <a href="#">Mykonos Villas</a>
            </li>
            <li>
              <a href="#">Auto Rentals</a>
            </li>
            <li>
              <a href="#">Ferry Tickets</a>
            </li>
            <li>
              <a href="#">Flights to Athens</a>
            </li>
          </ul>
        </div>

        <div>
          <h1>Useful Links</h1>
          <ul>
            <li>
              <a href="#">About Us</a>
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
            <li>
              <a href="#">Travel Guide to Greece</a>
            </li>
            <li>
              <a href="#">Credit Card Agreement</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Yacht General Information</a>
            </li>
            <li>
              <a href="#">Travel Insurance</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
