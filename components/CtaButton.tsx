import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export interface CtaButtonProps {
  href: string;
  title: string;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ href, title, className }) => {
  return (
    <Button
      asChild
      className={cn(
        "align-middle group gap-3 font-lexend px-8 py-6 text-lg bg-custom-emerald hover:bg-emerald-600 focus-within:bg-emerald-600 text-white transition-all duration-300 rounded-sm",
        className
      )}
    >
      <Link href={href}>
        {title}
        <span className="group-hover:animate-bounce-right">
          <FaArrowRight />
        </span>
      </Link>
    </Button>
  );
};

export default CtaButton;
