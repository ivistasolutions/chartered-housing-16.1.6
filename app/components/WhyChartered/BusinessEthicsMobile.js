"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: {
    breakpoint: { max: 1023, min: 0 },
    items: 1,
  },
};

const BusinessEthicsMobile = () => {
  return (
    <section className="relative w-full lg:hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/why-chartered/business-ethics.png"
          alt="Business Ethics Background"
          fill
          className="z-0 lg:block hidden object-cover"
          priority
        />
        <Image
          src="/why-chartered/business-ethics-mobile.png"
          alt="Business Ethics Background"
          fill
          className="z-0 lg:hidden block object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 lg:py-16 py-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold uppercase roboto-serif-regular lg:leading-16">
          Business Ethics & Stringent <br className="lg:block hidden" /> Value
          Based Practices
        </h2>
        <h4 className="mt-5 lg:max-w-2xl mx-auto text-md md:text-xl">
          Our business is conducted with highest ethical values and other
          stringent value based business practices solely aimed at benefitting
          our clients. Some such practices are;
        </h4>

        {/* White Box */}
        <div className="mt-12 bg-white shadow-lg p-6 md:p-10 mx-auto lg:w-3/4">

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <Carousel
              responsive={responsive}
              showDots={true}
              arrows={false}
              infinite={false}
              containerClass="carousel-container"
              itemClass="px-2"
            >
              {/* Slide 1 - Unwavering Transparency */}
              <div className=" text-left">
                <Image
                  src="/why-chartered/icons/icon-1.svg"
                  alt="Unwavering Transparency"
                  width={50}
                  height={50}
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-3">
                  Unwavering Transparency
                </h3>
                <p className="text-lg text-[#646464]">
                  Following are some examples of a whole lot of transparent
                  values practiced by Chartered:
                </p>
                <ul className="space-y-5 mt-5 list-disc pl-5 text-[#646464] text-lg marker:text-[#ED1C25]">
                  <li>
                    Transparency in not using unaccounted funds in purchase of
                    land and sale of apartments & plots.
                  </li>
                  <li>
                    Transparency in strictly adhering to the law of the land
                    without deviating even an inch from the sanctioned plan.
                  </li>
                  <li>
                    Transparent & easy to understand, plain language documents.
                  </li>
                </ul>
              </div>

              {/* Slide 2 - Passion for Quality */}
              <div className="flex flex-col space-y-10">
                <div className="text-left border-b border-[#ED1C25] pb-10">
                  <Image
                    src="/why-chartered/icons/icon-2.svg"
                    alt="Passion for Quality"
                    width={50}
                    height={50}
                    className="mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-2">
                    Passion for Quality
                  </h3>
                  <h6 className="text-lg text-[#646464]">
                    Quality is ensured with strict quality control in choosing
                    materials, unwavering systems followed in construction
                    processes and minute attention to finishing detail, are
                    among many other quality practices.
                  </h6>
                </div>
                <div className="text-left">
                  <Image
                    src="/why-chartered/icons/icon-4.svg"
                    alt="Attention to Light"
                    width={70}
                    height={70}
                    className="mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-4.5">
                    Attention to Light & Ventilation
                  </h3>
                  <h6 className="text-lg text-[#646464]">
                    Uncompromising attention to good light & ventilation,
                    vaastu, efficiency of living spaces etc assume highest
                    priority while planning.
                  </h6>
                </div>
              </div>

              {/* Slide 3 - Thoughtful Design */}

              {/* Slide 4 - Attention to Light */}
              <div className="flex flex-col space-y-10">
                <div className="text-left border-b border-[#ED1C25] pb-10">
                  <Image
                    src="/why-chartered/icons/icon-3.svg"
                    alt="Thoughtful Design"
                    width={50}
                    height={50}
                    className="mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-3">
                    Thoughtful Design
                  </h3>
                  <h6 className="text-lg text-[#646464]">
                    Thoughtful design helps purchasers to enjoy higher usable
                    area out of the Super Built Area purchased which more
                    importantly helps buyers save a substantial cost.
                  </h6>
                </div>
                <div className="text-left pb-10">
                  <Image
                    src="/why-chartered/icons/icon-5.svg"
                    alt="Timely Completion"
                    width={50}
                    height={50}
                    className="mb-3"
                  />
                  <h3 className="text-2xl font-bold text-[#ED1C25] mb-3 uppercase pt-3">
                    Timely Completion
                  </h3>
                  <h6 className="text-lg text-[#646464]">
                    We have a unique track record of completing all our projects
                    on time right from our first project. Even when the Real
                    Estate business went through periodic recessionary cycles,
                    Chartered has been frighteningly punctual always,
                    irrespective of the times, good or bad.
                  </h6>
                </div>
              </div>

              {/* Slide 5 - Timely Completion */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessEthicsMobile;
