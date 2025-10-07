"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselItems = [
  "You’re choosing more than a builder.",
  "You're choosing a partner in transparency.",
  "A custodian of timeless design.",
  "And a team that builds with purpose, every single time.",
];

const CharteredCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      {/* Top Section */}
      <div>
        <h2 className="md:text-4xl text-2xl font-semibold flex flex-col items-center justify-center gap-2">
          <span className="text-[#ED1C25] roboto-serif-regular">WHEN YOU </span>
          <span className="text-[#646464] roboto-serif-light text-4xl">
            CHOOSE CHARTERED...
          </span>
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="mt-6 h-32 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#646464] roboto-serif-italic text-3xl md:text-5xl">
              {carouselItems[index]}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CharteredCarousel;
