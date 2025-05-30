import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Particles from "../ui/Particles";


export default function Hero() {
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: "power4.inOut",
    });

    const titlesTl = gsap.fromTo(
      titles.current,
      { y: 100, opacity: 0 }, // Start position (off-screen and invisible)
      {
        y: 0, // End position (in view)
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2, // Stagger animation for each title
      }
    );

    return () => {
      tl.kill();
      titlesTl.kill();
    };
  }, []);

  const blobRef = useRef(null);

  useEffect(() => {
    // Combine animations using GSAP
    gsap.to(blobRef.current, {
      y: "50%", // Move vertically
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(blobRef.current, {
      rotation: 360, // Rotate
      duration: 20,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero relative flex w-full h-screen select-none items-center justify-center md:pb-0"
      aria-label="hero"
    >
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      <Particles />
      {/* unsure if should not have this background element or what color it should be, bg-green-950 ?*/}
      <div className="rounded-3xl z-50 align-middle opacity-80 items-center mx-auto h-1/2 sm:w-3/4 md:w-2/3 lg:w-3/4 2xl:h-3/4 bg-transparent">
        <div className="absolute z-10 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl pb-[96]">
          <div className="z-10 flex flex-col sm:space-y-2  w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold uppercase text-secondary-500 transform text-center">
            <div className=" title 2xl:py-16">
              <h1
                ref={(el) => (titles.current[0] = el)}
                className="translate-y-96 overflow-visible"
              >
                kávé
              </h1>
            </div>
            <div className=" title 2xl:py-16">
              <h1
                ref={(el) => (titles.current[1] = el)}
                className="translate-y-96 text-accent-300 md:text-black opacity-100 overflow-visible"
              >
                house of
              </h1>
            </div>
            <div className=" title 2xl:py-16">
                <h1
                ref={(el) => (titles.current[2] = el)}
                className="translate-y-96 "
              >
                haggai
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={scroll}
        className="absolute bottom-24 right-0 flex flex-col items-center justify-center space-y-8 animate-bounce"
      >
        <span className=" rotate-90 text-body-3 opacity-0 md:opacity-100">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
}
