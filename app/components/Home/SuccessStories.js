import React from "react";
import TestimonialsSection from "./TestimonialsCarousel";

const SuccessStories = () => {
  return (
    <>
      <div className="py-20 lg:px-0 px-5">
        <div className="container mx-auto uppercase">
          <h3 className="text-[#ED1C24] roboto-serif-medium tracking-wide lg:text-4xl text-[24px]">
            Client
          </h3>
          <h2 className="text-4xl pt-1 md:text-6xl font-bold text-[#646464] roboto-serif-regular">
            Success Stories
          </h2>
          <div className="lg:w-44 w-32 border-b-2 border-[#ED1C24] mt-3 mb-6 mx-1"></div>
          <div className="w-full pt-10">
            <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/A7aS5pIxSFM?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1"
                title="At Home with Chartered Housing | Mr. Prabhu &amp; Family on Life at Chartered Grasshopper"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            {/* <div className="lg:w-56 w-32 border-t-2 border-[#ED1C24] my-2"></div> */}
            <div className="lg:w-44 w-32 border-b-2 border-[#ED1C24] mt-3 mb-6 mx-1"></div>
          </div>
        </div>
        <div>
          <TestimonialsSection />
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
