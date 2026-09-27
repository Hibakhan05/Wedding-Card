import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-decoration", {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          ".hero-small-text",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".hero-names",
          {
            y: 80,
            opacity: 0,
            duration: 1.4,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-date",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".open-btn",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>

      <div className="hero-decoration">
        ✦
      </div>

      <p className="hero-small-text">
        TOGETHER WITH THEIR FAMILIES
      </p>

      <h1 className="hero-names">
        Minha <span>&</span> Asad
      </h1>

      <p className="hero-date">
        12 · 12 · 2026
      </p>

      <button className="open-btn">
        Open Invitation
      </button>

      <div className="scroll-text">
        Scroll to explore ↓
      </div>

    </section>
  );
};

export default Hero;