import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";
import StackingCardsDemo from "../ui/Cards";

export default function Services() {
  const expertiseItems = [
    "Wireframing",
    "Web Design",
    "Animation",
    "3D Development",
    "Mobile Development",
  ];

  const toolBoxItems = [
    "React",
    "React Native",
    "NextJS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Figma",
    "GSAP",
    "Framer Motion",
  ];

  return (
    <section id="services" className="my-[10%] pt-56" aria-label="services">
      <Heading title="featured" />
      <div className="space-y-14 py-12">
        <div className="">
          <StackingCardsDemo />
        </div>
      </div>
    </section>
  );
}
