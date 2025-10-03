"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Shared/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slideData = [
  {
    id: 1,
    serviceTitle: "Residential Interiors",
    serviceDescription:
      "Tailored living spaces for apartments and homes that feel uniquely yours.",
    buttonLink: "/chartered-interiors/residential",
    buttonText: "Start Your Project",
    image: "/chartered-interiors/residential-interiors.png",
    alt: "Residential Interiors",
  },
  {
    id: 2,
    serviceTitle: "Retail Interiors",
    serviceDescription:
      "Smart, inviting spaces that turn footfall into loyal customers.",
    buttonLink: "/chartered-interiors/commercial",
    buttonText: "Explore Solutions",
    image: "/chartered-interiors/retail.png",
    alt: "Retail Interiors",
  },
  {
    id: 3,
    serviceTitle: "Office Interiors",
    serviceDescription:
      "Future-ready workspaces with an eye on culture, function, and flow.",
    buttonLink: "/chartered-interiors/hospitality",
    buttonText: "Discover More",
    image: "/chartered-interiors/office.png",
    alt: "Office Interiors",
  },
];

const AboutChartered = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
      }, 2000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const currentData = slideData[currentSlide];

  return (
    <div 
      className="lg:px-0 px-5 lg:pb-20 pb-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Content Section */}
          <div className="flex flex-col flex-1 gap-5 items-end justify-between lg:w-[45%] w-full">
            {/* Top Content */}
            <div>
              <h4 className="lg:text-4xl text-3xl roboto-serif-light text-[#ED1C25]">
                Space Planning With Soul
              </h4>
              <p className="pt-5">
                We bring your vision to life with layouts that blend purpose
                with personality. Whether it&apos;s a compact apartment or a
                sprawling villa, every space is crafted to reflect your taste
                &mdash; and how you live.
              </p>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, }}
                className="w-full"
              >
                {/* Bottom Content */}
                <div className="mt-8">
                  <h5 className="text-2xl font-semibold text-[#646464] mb-5">
                    {currentData.serviceTitle}
                  </h5>
                  <p className="mb-5">{currentData.serviceDescription}</p>
                  <div>
                    <Button href={currentData.buttonLink}>
                      Start Your Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Section */}
          <div className="lg:w-[55%] w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentData.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, }}
                className="w-full"
              >
                <Image
                  src={currentData.image}
                  alt={currentData.alt}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6 lg:hidden">
              <button
                onClick={prevSlide}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {slideData.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? "bg-[#ED1C25]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Progress Indicators */}
        {/* <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
          {slideData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all rounded-full ${
                currentSlide === idx
                  ? "bg-[#ED1C25] w-8"
                  : "bg-gray-300 w-4 hover:bg-gray-400"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AboutChartered;
