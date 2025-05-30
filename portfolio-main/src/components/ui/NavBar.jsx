import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import kave from "/src/assets/icons/Navbar/kave-logo.png";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 600px",
        end: "bottom 200px",
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(
            ".bg-secondary-100",
            {
              backgroundColor:
                index === 1
                  ? "#0E0E0C"
                  : index === 3
                  ? "#0E0E0C"
                  : "#0E0E0C",
            },
            0
          ),
        toggleActions: "restart reverse restart reverse",
      });
    });
  }, [sectionRefs]);

  return (
    <header
      ref={navBar}
      className=" top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3 pr-8"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <img src={kave} alt="Logo" width="60" height="45" />
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>ABOUT</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-500 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>MENU</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-500 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>LOCATIONS</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-500 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a className="group relative hidden md:inline-block" href="#contact">
          <span>CONTACT</span>
          <span className="absolute bottom-0 left-0 h-[0.15em] w-0 bg-secondary-500 opacity-90 duration-300 ease-out group-hover:w-full"></span>
        </a>
      </nav>
    </header>
  );
}
