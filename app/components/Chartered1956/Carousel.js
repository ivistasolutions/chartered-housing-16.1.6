"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const images = [
    "/chartered-1956/img1.png",
    "/chartered-1956/img2.png",
    "/chartered-1956/img3.png",
    "/chartered-1956/img4.png",
];



const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full flex flex-col items-center md:pt-20 md:pb-26 pt-16 pb-20 px-4 md:px-0">
            <div className="relative w-full max-w-5xl flex flex-col items-center">
                {/* Outer container for arrows + image */}
                <div className="flex items-center justify-center gap-3 md:gap-6 w-full px-2 md:px-0">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="bg-white/80 border border-[#D9D9D9] hover:bg-white rounded-full p-2 md:p-2 "
                    >
                        <BsChevronLeft size={24} className="md:!w-7 md:!h-7 pe-1 text-[#D9D9D9] font-bold" />
                    </button>

                    {/* Main Image */}
                    <div className="relative w-full shadow-lg overflow-hidden">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`carousel-${currentIndex}`}
                            className="w-full h-[250px]  md:h-[500px] object-cover"
                            initial={{ opacity: 0.5, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="bg-white/80 border border-[#D9D9D9] hover:bg-white rounded-full p-2 md:p-2 "
                    >
                        <BsChevronRight size={24} className="md:!w-7 md:!h-7 pl-1 text-[#D9D9D9] font-bold" />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="absolute left-1/2 md:bottom-[-70px] bottom-[-40px] -translate-x-1/2 flex gap-3 md:gap-5 p-2 md:p-4 z-10 overflow-x-auto">
                    {images.map((img, index) =>
                        index !== currentIndex ? (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className="w-24 sm:w-32 md:w-46 h-16 sm:h-24 md:h-32 flex-shrink-0 cursor-pointer border-2 border-transparent hover:border-blue-400 transition"
                            >
                                <img
                                    src={img}
                                    alt={`thumb-${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
