import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const heading = useRef(null)
  const body = useRef(null)
  const contactSection = useRef(null)

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start:"180px bottom",

      // markers: true,
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [contactSection])

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <section
      id="contact"
      className="my-[10%] overflow-visible pt-48"
      aria-label="contact me"
    >
      
      <div ref={heading}>
        <Heading title="contact" />
      </div>
      <div ref={contactSection} className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12">
        <div className="col-span-4">
          <h3 className="text-body-1 2xl:text-4xl font-semibold pt-4 text-center justify-center md:items-start md:justify-start md:text-left">BUSINESS HOURS</h3>
        <div className="bg-green-950 py-8 rounded-xl flex shadow-lg text-center h-5/6 w-full max-w-screen-lg flex-col justify-center opacity-75">
          <div className="relative flex items-center justify-center h-full">
            <p className="text-secondary-300 text-body-3">
              Mon: 6:00 am - 6:00 pm<br></br>
              Tue: 6:00 am - 6:00 pm<br></br>
              Wed: 6:00 am - 6:00 pm<br></br>
              Thu: 6:00 am - 6:00 pm<br></br>
              Fri: 6:00 am - 6:00 pm<br></br>
              Sat: 7:00 am - 5:00 pm<br></br>
              Sun: Closed<br></br>
            </p>
          </div>
        </div>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1 items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold pt-4">SOCIAL MEDIA</h4>
            <div className="space-y-1 text-body-2 2xl:text-3xl flex flex-col items-center justify-center md:items-start md:justify-start md:text-left">
              <a
                href="https://www.facebook.com/kavehouseofhaggai/"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:facebook" color="#666" />
                <div className="relative">
                  <span>Facebook</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-500 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/houseofhaggai/"
                className="group group flex w-fit items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:instagram" color="#666" />
                <div className="relative">
                  <span>Instagram</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-500 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-1 pt-4">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">LOCATION</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                879 Green Lea Blvd<br></br>
                Gallatin, TN 37066<br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
