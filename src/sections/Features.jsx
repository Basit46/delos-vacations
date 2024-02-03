import React from "react";
import vacaImg from "../assets/feature.svg";
import vacaImg2 from "../assets/f2.svg";
import grid from "../assets/grid.svg";

const Features = () => {
  return (
    <div className="relative mt-[129px]">
      <div className="h-[300vh] flex justify-between pl-[100px]">
        <div className="flex flex-col justify-between">
          <div className="feature-box">
            <span>
              <img src={grid} alt="icon" />
            </span>
            <h3>No Ticket Fees</h3>
            <p>
              The lowest prices in the industry. Promotional rates available
            </p>
          </div>
          <div className="feature-box">
            <span>
              <img src={grid} alt="icon" />
            </span>
            <h3>Great Selection Available</h3>
            <p>Dealing with Top Airline Companies and major Airfares</p>
          </div>
          <div className="feature-box">
            <span>
              <img src={grid} alt="icon" />
            </span>
            <h3>You Can Trust Delos</h3>
            <p>No hidden fees, tax included, personalised concierge service</p>
          </div>
        </div>

        <div className="sticky top-0 w-[50%] h-screen overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={vacaImg}
            alt="vacation"
          />
        </div>
      </div>

      <div className="mt-[157px] pr-[100px] h-[300vh] flex justify-between">
        <div className="sticky top-0 w-[50%] h-[100vh] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={vacaImg2}
            alt="vacation"
          />
        </div>

        <div className="h-[300vh] flex flex-col justify-between">
          <div className="feature-box">
            <span>
              <img src={grid} alt="icon" />
            </span>
            <h3>Save time and enjoy your flight</h3>
            <p>Get the best price for your trip with a click!</p>
          </div>
          <div className="feature-box">
            <span>
              <img src={grid} alt="icon" />
            </span>
            <h3>Phone & Email Customer Service</h3>
            <p>World wide contacts & expert advice</p>
          </div>
          <div className="feature-box">
            <span>
              <img src={grid} alt="icon" />
            </span>
            <h3>We stand by your side since 1973</h3>
            <p>
              We assist you to make the right choice. More than 250,000 happy
              customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
