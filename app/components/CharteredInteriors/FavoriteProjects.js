"use client";
import React from "react";
import Image from "next/image";

const FavoriteProjects = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 lg:pb-0">
      <div className="flex flex-col justify-start items-start text-left gap-2.5 lg:hidden py-5">
        <p className="text-gray-500 text-sm mt-2 tracking-wider">
          PORTFOLIO HIGHLIGHTS
        </p>
        <h2 className="text-red-600 text-3xl font-semibold roboto-serif-medium">
          A Few of Our <br /> Favorite Projects
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Left large image spanning 2 rows on desktop only */}
        <div className="md:row-span-2 relative col-span-1 md:col-span-1">
          <Image
            src="/chartered-interiors/img-1.png"
            alt="Left Large Project"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center text - top (desktop only) */}
        <div className="lg:flex flex-col justify-center items-center text-center px-4 hidden md:block">
          <p className="text-gray-500 text-sm mt-2 tracking-wider ">
            PORTFOLIO HIGHLIGHTS
          </p>
          <h2 className="text-red-600 text-xl md:text-2xl font-semibold roboto-serif-medium">
            A Few of Our <br /> Favorite Projects
          </h2>
        </div>

        {/* Top right image */}
        <div className="relative">
          <Image
            src="/chartered-interiors/img-4.png"
            alt="Top Right Project"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center middle image */}
        <div className="relative">
          <Image
            src="/chartered-interiors/img-2.png"
            alt="Middle Center Project"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right large image spanning 2 rows on desktop only */}
        <div className="md:row-span-2 relative hidden md:block">
          <Image
            src="/chartered-interiors/img-3.png"
            alt="Right Large Project"
            width={500}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom left image */}
        <div className="relative">
          <Image
            src="/chartered-interiors/img-6.png"
            alt="Bottom Left Project"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom center image */}
        <div className="relative">
          <Image
            src="/chartered-interiors/img-5.png"
            alt="Bottom Center Project"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProjects;
