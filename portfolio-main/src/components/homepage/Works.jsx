import { useEffect, useRef } from "react";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";
import maru from "/src/assets/images/maru.png";
import guardtraining from "/src/assets/images/guardtraining.png";

import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%] pt-48"
    >
     <Heading title="Selected Works" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://maruiyagi-website.web.app"
            img={maru}
            alt="x"
            name="Maru Sushi & Grill"
            type="Web Design • Frontend Development"
            year="2024"
            tools="Tailwind • JavaScript • Figma"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link=""
            img
            alt="x"
            name="website"
            type="Frontend Development"
            year="2024"
            tools="Tailwind • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link=""
            img
            alt="x"
            name="website"
            type="Web Design • Frontend Development"
            year="2024"
            tools="Tailwind • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link=""
            img
            alt="x"
            name="website"
            type="Frontend Development"
            year="2024"
            tools="Tailwind • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://guardtrainingtn.com"
            img={guardtraining}
            alt="Alliance Training & Testing"
            name="Alliance Training & Testing"
            type="Frontend Development"
            year="2021"
            tools="JavaScript • HTML • CSS"
          />
         
        </div>
      </div>
    </section>
  );
}
