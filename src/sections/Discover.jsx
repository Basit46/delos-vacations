import React, { useEffect, useRef } from "react";
import santo from "../assets/santo.jpg";
import banner2 from "../assets/banner2.svg";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
  const section3Ref = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const text1chars = SplitType.create(text1.current, { types: "chars" });
    const chars = text1chars.chars;

    gsap.fromTo(
      chars,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  useEffect(() => {
    const text2chars = SplitType.create(text2.current, { types: "chars" });
    const chars2 = text2chars.chars;

    gsap.fromTo(
      chars2,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.02,
        delay: 1.7,
        duration: 1,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 1.9 },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 1%",
        },
      }
    );
  }, []);

  return (
    <section ref={section3Ref} className="mt-[150px] px-[100px] text-black">
      <h1
        ref={text1}
        className="mt-[74px] text-center text-5xl font-extrabold leading-[1.3]"
      >
        DISCOVER THE CARIBBEAN <br /> PARADISE
      </h1>
      <p ref={text2} className="my-[16px] opacity-60 text-center text-2xl">
        With spectacular scenery, water sports, and laid-back resorts, there is{" "}
        <br /> an island for everyone
      </p>
      <button className="block mx-auto w-[174px] h-12 relative bg-cyan-500 rounded-md text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
        Learn more
      </button>

      <div className="mt-[36px] w-full rounded-[24px] h-[456px] overflow-hidden">
        <img
          ref={imgRef}
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
