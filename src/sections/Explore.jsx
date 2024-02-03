import React, { useEffect, useRef } from "react";
import santo from "../assets/santo.jpg";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const section2Ref = useRef();
  const aboutText1 = useRef();
  const aboutText2 = useRef();
  const imgsRef = useRef([]);

  useEffect(() => {
    const text1chars = SplitType.create(aboutText1.current, { types: "chars" });
    const chars = text1chars.chars;

    gsap.fromTo(
      chars,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        duration: 3,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  useEffect(() => {
    const text2chars = SplitType.create(aboutText2.current, { types: "chars" });
    const chars2 = text2chars.chars;

    gsap.fromTo(
      chars2,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.01,
        delay: 1.5,
        duration: 1.2,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  useEffect(() => {
    imgsRef.current.forEach((img) =>
      gsap.fromTo(
        img,
        { scale: 1.9 },
        {
          scale: 1,
          duration: 2,
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 10%",
          },
        }
      )
    );
  }, []);

  return (
    <section ref={section2Ref} className="px-[100px] text-black">
      <h1
        ref={aboutText1}
        className="mt-[74px] text-center text-5xl font-extrabold"
      >
        EXPLORE GREEK ISLANDS
      </h1>
      <p ref={aboutText2} className="my-[16px] opacity-60 text-center text-2xl">
        Visit all beautiful Greek islands:Santorini, Mykonos, Crete, <br />
        Rhodes, Corfu, Paros…
      </p>
      <button className="block mx-auto w-[174px] h-12 relative bg-cyan-500 rounded-md text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
        Learn more
      </button>

      <div className="mt-[100px] flex justify-between h-[450px]">
        <div className="w-[48%] h-full rounded-[24px] overflow-hidden">
          <img
            ref={(e) => imgsRef.current.push(e)}
            className="h-full w-full object-cover rounded-[24px]"
            src={santo}
            alt="vacation pic"
          />
        </div>
        <div className="w-[48%] h-full flex flex-col justify-between">
          <div className="h-[46%] overflow-hidden rounded-[24px]">
            <img
              ref={(e) => imgsRef.current.push(e)}
              className="h-full w-full object-cover"
              src={santo}
              alt="vacation pic"
            />
          </div>
          <div className="h-[46%] overflow-hidden rounded-[24px]">
            <img
              ref={(e) => imgsRef.current.push(e)}
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
