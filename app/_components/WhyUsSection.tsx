import ScrollAccordion from "@/components/ScrollAccordion";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const WhyUsSection = () => {
  return (
    <section className="h-full max-h-max relative content-center">
      <div className="flex flex-col items-center justify-center py-20 px-8 gap-4 z-20 relative bg-custom-dark/90">
        <h6 className="text-base text-custom-emerald font-jakarta">
          Why Us You Ask?
        </h6>

        <h2 className="text-4xl font-bold font-jakarta text-white text-center md:max-w-lg">
          We deliver industry-specific IT Solutions
        </h2>
        <p className="text-white md:max-w-4xl text-center font-jakarta">
          Ad primis ridiculus rhoncus posuere blandit pulvinar consectetuer eu.
          Placerat at integer feugiat tempus class. Sollicitudin ridiculus
          facilisis et dolor nisl per lectus diam aenean.Ad primis ridiculus
          rhoncus posuere blandit pulvinar consectetuer eu. Placerat at integer
          feugiat tempus{" "}
        </p>

        <div className="container flex gap-8 justify-center items-center flex-col md:flex-row py-8">
          <div className="relative">
            <Image
              src="/it-solutions.jpeg"
              alt=""
              width={550}
              height={480}
              className="rounded-xl"
            />
            <div className="absolute -bottom-8 left-0 right-0 p-4 bg-custom-emerald rounded-md w-4/5 mx-auto">
              <span className="text-white text-xl font-bold text-center block">
                IT Solutions
              </span>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="w-full h-1 mt-4 md:mt-0 md:h-[450px] bg-custom-emerald md:w-1 rounded-full"
          />
          <ScrollAccordion />
        </div>
      </div>

      <Image
        src="/why-us-background.png"
        alt=""
        className="object-cover z-10"
        fill={true}
      />
    </section>
  );
};

export default WhyUsSection;
