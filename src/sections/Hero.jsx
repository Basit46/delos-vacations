import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const text1 = useRef();
  const text2 = useRef();

  useEffect(() => {
    const text1chars = SplitType.create(text1.current, { types: "chars" });
    const chars = text1chars.chars;

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
      }
    );

    //Text2
    const text2chars = SplitType.create(text2.current, { types: "chars" });
    const chars2 = text2chars.chars;

    gsap.fromTo(
      chars2,
      {
        opacity: 0,
      },
      {
        delay: 1.7,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="relative mt-[115px] text-white">
      <h1 ref={text1} className="text1 mb-[46px] text-8xl text-center">
        Explore the world around
      </h1>

      <p
        ref={text2}
        className="text2 mx-auto w-[823px] text-center text-2xl font-semibold"
      >
        Traveling isn’t always about running away from things, sometimes it’s
        about running into what you truly want.
      </p>
    </section>
  );
};

export default Hero;
