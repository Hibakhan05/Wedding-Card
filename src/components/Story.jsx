import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-label", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 80%",
        },
      });

      gsap.from(".story-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 75%",
        },
      });

      gsap.from(".story-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="story-section section" ref={sectionRef}>
      <p className="section-label">OUR STORY</p>

      <h2 className="story-title">
        Two hearts,
        <br />
        one beautiful story.
      </h2>

      <p className="story-text">
        What began as two separate journeys is now becoming one.
        We would love to have you with us as we celebrate this
        beautiful beginning.
      </p>
    </section>
  );
};

export default Story;