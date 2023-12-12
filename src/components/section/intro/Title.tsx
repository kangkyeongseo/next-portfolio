"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Title() {
  const y = useMotionValue(0);

  const maskPosition = useTransform(
    y,
    [0, 310, 640, 950],
    [-190, -10, 320, 500]
  );
  const textPosition = useTransform(
    y,
    [0, 310, 640, 950],
    [190, 10, -320, -500]
  );

  const handleMouseMove = (event: MouseEvent) => {
    y.set(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="cursor-default relative ">
      <ul className="text-[12rem] font-extrabold leading-none text-transparent font-outline">
        <li>Frontend</li>
        <li className="tracking-wide">Portfolio</li>
      </ul>
      <motion.div
        style={{ y: maskPosition }}
        className="absolute top-0 h-24 overflow-hidden"
      >
        <motion.ul
          style={{ y: textPosition }}
          className="text-[12rem] font-extrabold leading-none text-blue-600"
        >
          <li>Frontend</li>
          <li className="tracking-wide">Portfolio</li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
