import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { PiStudent } from "react-icons/pi";
import { GiMicrophone } from "react-icons/gi";
import { MdCorporateFare } from "react-icons/md";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

export interface ScrollAccordionTypes {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

const ScrollAccordion = () => {
  const scrollAccordionItems: ScrollAccordionTypes[] = [
    {
      title: "Education Sectors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: <PiStudent size={50} />,
    },
    {
      title: "Entertainment & live event Organisers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: <GiMicrophone size={50} />,
    },
    {
      title: "Corporate Enterprises",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: <MdCorporateFare size={50} />,
    },
    {
      title: "Agencies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: <HiOutlineBuildingLibrary size={50} />,
    },
    {
      title: "Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: <PiStudent size={50} />,
    },
    {
      title: "Entertainment Organisers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: <GiMicrophone size={50} />,
    },
    {
      title: "Agency",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: <HiOutlineBuildingLibrary size={50} />,
    },
    {
      title: "Corporate Enterprise",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      icon: <MdCorporateFare size={50} />,
    },
  ];
  return (
    <ScrollArea className="h-[450px] w-full md:w-auto">
      <Accordion
        type="single"
        collapsible
        defaultValue={scrollAccordionItems[0].title}
        className="w-full space-y-4"
      >
        {scrollAccordionItems.map((item) => (
          <div key={item.title} className="flex gap-4 justify-between">
            <div className="border h-full content-center p-2 rounded-md text-custom-emerald">
              {item.icon}
            </div>
            <AccordionItem
              value={item.title}
              className="px-4 border border-custom-emerald w-full rounded-md"
            >
              <AccordionTrigger className="font-jakarta text-lg text-left font-bold text-white hover:text-custom-emerald">
                {item.title}
              </AccordionTrigger>

              <AccordionContent className="font-lexend text-gray-100 text-base md:max-w-sm">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </ScrollArea>
  );
};

export default ScrollAccordion;
