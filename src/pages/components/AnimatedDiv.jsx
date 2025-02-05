"use client"; // If using Next.js (optional)

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedDiv = ({ title, subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on page load
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Start hidden & above
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Trigger on state change
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className="w-[307px] bg-[#DBF0FF] border-b-[#005FA6] border-b-4 rounded-md py-[20px] px-[2vw] h-[80px] flex items-center"
    >
      <div>
        <p className="text-[#001424] text-[18px] font-[600]">{title}</p>
        <p className="text-[#001424] text-[16px] font-[400]">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedDiv;
