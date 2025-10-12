"use client";

import React from "react";

export default function LocationAdvantage() {
  return (
    <section className="md:py-16 py-0 ">
      <div className="max-w-6xl py-10 px-5 md:px-0 mx-auto text-center bg-[#DBDBDB4D]">
        {/* Title */}
        <h3 className="roboto-serif-light text-center lg:text-center text-[#ED1C24] lg:text-[40px] text-[25px]">
          Location Advantage
        </h3>
        
        <div className="w-3/4 md:w-3/4 mx-auto border-t border-[#ED1C24] mb-10"></div>

        {/* Points */}
        <div className="space-y-6 text-gray-700">
          <div>
            <p className="text-lg md:text-xl">
              15 minutes from Yelahanka
            </p>
            <div className="w-3/4 md:w-1/2 mx-auto border-t border-gray-300 mt-3"></div>
          </div>

          <div>
            <p className="text-lg md:text-xl">
              Easy access to Bangalore Airport Road
            </p>
            <div className="w-3/4 md:w-1/2 mx-auto border-t border-gray-300 mt-3"></div>
          </div>

          <div>
            <p className="text-lg md:text-xl">
              Close proximity to leading schools and hospitals
            </p>
            <div className="w-3/4 md:w-1/2 mx-auto border-t border-gray-300 mt-3"></div>
          </div>

          <p className="text-gray-600 text-base md:text-lg mt-6">
            Ideal for investment or self-use in a rapidly growing zone of North Bangalore
          </p>
        </div>
      </div>
    </section>
  );
}
