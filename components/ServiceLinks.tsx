import React, { ReactElement } from "react";

import { FaNetworkWired } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { GrCloudSoftware } from "react-icons/gr";
import { TbWorldWww } from "react-icons/tb";
import { PiContactlessPayment } from "react-icons/pi";
import Link from "next/link";

export interface ServiceLinkTypes {
  text: string;
  href: string;
  icon: ReactElement;
}

const ServiceLinks = () => {
  const serviceLinkItems: ServiceLinkTypes[] = [
    {
      text: "Network Infrastructure",
      href: "/",
      icon: <FaNetworkWired size={25} />,
    },
    {
      text: "Equipment Management",
      href: "/",
      icon: <GiAutoRepair size={25} />,
    },
    {
      text: "Software Solutions",
      href: "/",
      icon: <GrCloudSoftware size={25} />,
    },
    {
      text: "Website Services",
      href: "/",
      icon: <TbWorldWww size={25} />,
    },
    {
      text: "Payment Gateway",
      href: "/",
      icon: <PiContactlessPayment size={25} />,
    },
  ];

  return (
    <div className="container px-8 py-4 sm:p-8 relative">
      <div className="grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 bg-transparent h-auto lg:-mt-14 lg:z-50">
        {serviceLinkItems.map((item) => (
          <Link
            key={item.text}
            href={item.href}
            className="justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background focus-visible:outline-none hover:ring-2 focus-visible:ring-2 hover:ring-ring focus-visible:ring-ring hover:ring-offset-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex items-center gap-2 border border-white bg-custom-dark-200 hover:border-custom-emerald focus-visible:border-custom-emerald text-custom-emerald hover:ring-offset-custom-emerald focus-visible:ring-offset-custom-emerald transition-all duration-300 text-wrap h-full rounded-md"
          >
            {item.icon}
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceLinks;
