// author: Khoa Phan <https://www.pldkhoa.dev>

"use client"

import { useState } from "react"

import { cn } from "../lib/utils"
import StackingCards, {
  StackingCardItem,
} from "../../fancy/components/blocks/stacking-cards"

import esp from "../../assets/images/esp.jpg";
import nonesp from "../../assets/images/nonesp.jpg";
import spe from "../../assets/images/spe.jpg";
import extra from "../../assets/images/extra.jpg";
import kids from "../../assets/images/kids.jpg";
import flavs from "../../assets/images/flavs.jpg";

const cards1 = [
  {
    bgColor: "bg-secondary-600",
    title: "ESPRESSO DRINKS",
    description:
      "Bold and balanced. Choose from classic Americanos, creamy lattes, silky cappuccinos, and more expertly pulled shots to kickstart your day.",
    image: esp,
  },
  {
    bgColor: "bg-[#355e3b]",
    title: "SPECIALTIES",
    description:
      "Our barista-crafted signature blends, each specialty drink is designed to surprise and delight.",
    image: spe,
  },
  {
    bgColor: "bg-[#013220]",
    title: "NON-ESPRESSO DRINKS",
    description:
      "Warm up with soothing chai lattes, teas, rich hot chocolates, and other comforting caffeine-free favorites.",
    image: nonesp,
  },
]

const cards2 = [
  {
    bgColor: "bg-secondary-600",
    title: "EXTRAS",
    description:
      "Customize your cup! Add extra espresso shots, flavors, or make it a breve to make your drink uniquely yours.",
    image: extra,
  },
  {
    bgColor: "bg-[#355e3b]",
    title: "KIDS' SECTION",
    description:
      "Non-coffee favorites for the little ones! Hot chocolates, cremosas, and italian sodas they’ll love.",
    image: kids,
  },
  {
    bgColor: "bg-[#013220]",
    title: "FLAVORS",
    description:
      "House-made and handcrafted—explore our rotating lineup of gourmet syrups and sauces, from classic vanilla to bold seasonal blends.",
    image: flavs,
  },
]

export default function StackingCardsDemo() {
  const [container, setContainer] = useState(null);

  return (
    <div
      className="pb-14 bg-accent-400 text-white rounded-2xl min-h-screen"
      ref={(node) => setContainer(node)}
    >
      <StackingCards
        totalCards={cards1.length}
        scrollOptons={{ container: { current: container } }}
      >
        <div className="relative font-calendas h-[220px] w-full z-10 text-4xl md:text-7xl font-bold uppercase flex justify-center items-center text-secondary-500 whitespace-pre">
          MENU ↓
        </div>
        {cards1.map(({ bgColor, description, image, title }, index) => {
          return (
            <StackingCardItem key={index} index={index} className="h-[420px] sm:h-[620px]">
              <div
                className={cn(
                  bgColor,
                  "h-full flex-1 flex-col sm:flex-row py-5 px-3 md:px-16 md:py-20 flex w-11/12 rounded-3xl mx-auto relative"
                )}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="hidden sm:block font-bold text-heading-3 mb-5">{title}</h3>
                  <p className="hidden sm:block text-body-1">{description}</p>
                </div>

                <div className="h-full w-full aspect-video sm:w-1/2 rounded-2xl relative overflow-hidden mx-auto items-center justify-center align-middle">
                  <img
                    src={image}
                    alt={title}
                    className="object-contain rounded-2xl w-full h-full"
                  />
                </div>
              </div>
            </StackingCardItem>
          )
        })}
      </StackingCards>
      <div
      className=" bg-accent-400 text-white rounded-2xl"
      ref={(node) => setContainer(node)}
    >
      <StackingCards
        totalCards={cards2.length}
        scrollOptons={{ container: { current: container } }}
      >
        <div className="relative font-calendas h-[220px] w-full z-10 text-4xl md:text-7xl font-bold uppercase flex justify-center items-center text-secondary-500 whitespace-pre mt-12">
          EXTRAS ↓
        </div>
        {cards2.map(({ bgColor, description, image, title }, index) => {
          return (
            <StackingCardItem key={index} index={index} className="h-[140px] sm:h-[620px]">
              <div
                className={cn(
                  bgColor,
                  "h-full flex-col py-5 px-3 md:px-16 md:py-20 flex w-11/12 rounded-3xl mx-auto relative"
                )}
              >
                <div className="hidden sm:block flex-1 flex-col justify-center">
                  <h3 className="hidden sm:block font-bold text-2xl text-heading-3 mb-5">{title}</h3>
                  <p className="hidden sm:block text-body-1">{description}</p>
                </div>

                <div className="w-full rounded-2xl overflow-hidden mx-auto flex items-center justify-center">
                  <img
                    src={image}
                    alt={title}
                    className="object-contain object-center rounded-2xl w-full h-full"
                  />
                </div>
              </div>
            </StackingCardItem>
          )
        })}
      </StackingCards>
    </div>
    </div>
    
  )
}
