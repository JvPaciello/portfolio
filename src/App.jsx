import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Socials from "./components/Socials";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const glowARef = useRef(null);
  const glowBRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Glow A: starts top-right, drifts to bottom-left as you scroll
      gsap.fromTo(
        glowARef.current,
        { xPercent: 35, yPercent: -35 },
        {
          xPercent: -25,
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Glow B: starts bottom-left, drifts to top-right (opposite direction)
      gsap.fromTo(
        glowBRef.current,
        { xPercent: -30, yPercent: 30 },
        {
          xPercent: 30,
          yPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Gentle ambient float (independent of scroll)
      gsap.to(glowARef.current, {
        x: "+=40",
        y: "+=30",
        duration: 9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(glowBRef.current, {
        x: "-=50",
        y: "-=20",
        duration: 11,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative p-0 m-0 overflow-hidden bg-black">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          ref={glowARef}
          aria-hidden
          className="absolute inset-0 will-change-transform"
          style={{
            background:
              "radial-gradient(40% 35% at 50% 50%, rgba(20,184,166,0.22), transparent 65%)",
          }}
        />
        <div
          ref={glowBRef}
          aria-hidden
          className="absolute inset-0 will-change-transform"
          style={{
            background:
              "radial-gradient(35% 30% at 50% 50%, rgba(20,184,166,0.14), transparent 65%)",
          }}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Socials />
      </div>
    </div>
  );
}

export default App;
