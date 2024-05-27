"use client";

import React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface TestimonailSliderProps {
  review: string;
  name: string;
  role: string;
}

const TestimonailSlider = () => {
  const plugin = React.useRef(
    Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const testimonials: TestimonailSliderProps[] = [
    {
      review:
        "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
      name: "Sophie More",
      role: "CTO of Lambda",
    },
    {
      review:
        "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
      name: "Adam Gwadyr",
      role: "Entrepreneur",
    },
    {
      review:
        "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
      name: "Sophie More",
      role: "CTO of Lambda",
    },
    {
      review:
        "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
      name: "Adam Gwadyr",
      role: "Entrepreneur",
    },
    {
      review:
        "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
      name: "Sophie More",
      role: "CTO of Lambda",
    },
    {
      review:
        "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
      name: "Adam Gwadyr",
      role: "Entrepreneur",
    },
  ];

  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      opts={{
        duration: 4000,
        loop: true,
        align: "center",
      }}
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
            <Card className="flex justify-between flex-col h-full bg-neutral-700/60 drop-shadow-md rounded-xl bg-clip-padding backdrop-blur-xl bg-opacity-20 border-none">
              <CardContent className="p-4">
                <p className="text-white font-jakarta">{item.review}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between gap-8 p-4 pt-0">
                <h6 className="font-jakarta text-base text-gray-50">
                  {item.name}
                </h6>
                <strong className="font-jakarta text-gray-400">
                  {item.role}
                </strong>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonailSlider;
