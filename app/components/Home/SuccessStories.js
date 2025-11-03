import React from "react";
import TestimonialsSection from "./TestimonialsCarousel";

const SuccessStories = () => {
  return (
    <>
      <div className="py-20 lg:px-0 px-5">
        <div className="container mx-auto uppercase">
          <h3 className="text-[#ED1C24] roboto-serif-medium tracking-wide text-4xl">
            Client
          </h3>
          <h2 className="text-4xl pt-1 md:text-6xl font-bold text-[#646464] roboto-serif-regular">
            Success Stories
          </h2>
          {/* <div className="lg:w-56 w-32 border-t-2 border-[#ED1C24] my-2"></div> */}
          <div className="lg:w-44 w-32 border-b-2 border-[#ED1C24] mt-3 mb-6 mx-1"></div>
        </div>
        <div>
          <TestimonialsSection />
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
