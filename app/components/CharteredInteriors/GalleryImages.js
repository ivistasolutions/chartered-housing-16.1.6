"use client";
import React from "react";
import Image from "next/image";

const FavouriteProjects = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
        {/* Left large image */}
        <div className="lg:col-span-2 lg:row-span-2 relative">
          <Image
            src="/chartered-interiors/img-1.png"
            alt="Project 1"
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Center text */}
        <div className="flex flex-col justify-center items-center text-center px-4 lg:col-span-1">
          <h2 className="text-red-600 text-xl md:text-2xl font-semibold">
            A Few of Our <br /> Favorite Projects
          </h2>
          <p className="text-gray-500 text-sm mt-2 tracking-wider">
            PORTFOLIO HIGHLIGHTS
          </p>
        </div>

        {/* Top right image */}
        <div className="relative">
          <Image
            src="/chartered-interiors/img-2.png"
            alt="Project 2"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Middle row images */}
        <div className="relative">
          <Image
            src="/chartered-interiors/img-3.png"
            alt="Project 3"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/chartered-interiors/img-4.png"
            alt="Project 4"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Bottom row images */}
        <div className="relative">
          <Image
            src="/chartered-interiors/img-5.png"
            alt="Project 5"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/chartered-interiors/img-6.png"
            alt="Project 6"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FavouriteProjects;
