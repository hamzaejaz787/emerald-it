"use client";

import { FaArrowUp } from "react-icons/fa6";
import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

interface ScrollToOptions {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
}

export function ScrollToTopButton() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop(options: ScrollToOptions) {
    if (!isBrowser()) return;
    window.scrollTo({
      top: options.top || 0,
      left: options.left || 0,
      behavior: options.behavior || "smooth",
    });
  }

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className="fixed z-50 bottom-4 right-4 p-4 bg-white/60 hover:bg-white hover:text-custom-emerald focus-within:text-custom-emerald focus-within:bg-white transition-all duration-200 rounded-full"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={() => scrollToTop({ top: 20, behavior: "smooth" })}
    >
      <FaArrowUp />
    </motion.button>
  );
}
