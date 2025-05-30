import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import profileImg from "../../assets/images/kave-lion.jpeg"

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me" className="mt-48">
      <Heading title="OUR STORY"/>
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-xl object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="lion portrait"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full 2xl:space-y-10">
            <h3
              ref={heading}
              className="text-works-title 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              Gourmet coffee served with a smile.
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              <br></br>
              <br></br>We believe coffee is more than a drink. 
              It's comfort, connection, and an opportunity to lighten your day.
              <br></br>
              <br></br>
              Whether you're relaxing inside {" "}
              <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://g.co/kgs/Cnhuu9v" target="_blank"
              >
                House of Haggai
              </a>
              {" "}or grabbing your favorite brew on the go at {" "}
              <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://g.co/kgs/QLVYCGQ" target="_blank"
              >
                Express
              </a>
              , we're here to serve up warmth, smiles, 
              and the best coffee in the Hendersonville/Gallatin area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
