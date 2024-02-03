import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import banner from "../assets/banner.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();
  const aboutText1 = useRef();
  const aboutText2 = useRef();

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
          trigger: sectionRef.current,
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
        delay: 2.6,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="mt-[250px]">
      <h1
        ref={aboutText1}
        className="w-[1080px] mx-auto text-center text-black text-5xl font-extrabold leading-[1.3]"
      >
        LAUNCHED IN 1973, DELOS BOASTS A UNIQUE HISTORY.
      </h1>
      <p
        ref={aboutText2}
        className="mt-[40px] w-[1002px] mx-auto opacity-60 text-center text-black text-2xl"
      >
        Our team of travel professionals located in New York, Athens and Mykonos
        have first-hand travel experience. We have long-established
        relationships that offer our clients a curated experience.
      </p>

      <img className="mx-auto mt-[75px]" src={banner} alt="banner" />
    </section>
  );
};

export default About;
