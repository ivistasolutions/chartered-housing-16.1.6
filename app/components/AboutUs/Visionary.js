"use client";
import Image from "next/image";
import Button from "../Shared/Button";

export default function LeadershipSection() {
  return (
    <>
      <div>
        <div className="w-full">
          <video
            width={1000}
            height={1000}
            src="/videos/Brand-Essence-Video.webm"
            alt="Built for Life"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover lg:block hidden"
          />
          <video
            width={1000}
            height={1000}
            src="/videos/Brand-Essence-Video-mobile.webm"
            alt="Built for Life"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover lg:hidden block"
          />
        </div>
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white"
          style={{ backgroundImage: "url('/about-us/visionary.webp')" }} // replace with your bg image
        >
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

          <div className="relative max-w-7xl mx-auto px-5 lg:px-12 pt-10 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-end -mt-0.5">
            {/* Left Content */}
            <div>
              <h4 className="text-red-600 font-semibold roboto-serif-light text-2xl lg:text-4xl">
                VISIONARY
              </h4>
              <h1 className="text-4xl lg:text-[60px] font-bold roboto-serif-light pt-1">
                LEADERSHIP
              </h1>
              <div className="w-36 border-b-2 border-white my-3"></div>
              <h2 className="text-2xl md:text-4xl font-semibold pt-5">
                Mr. A. Balakrishna Hegde
              </h2>
              <h6 className="text-white uppercase text-lg mb-4">
                FOUNDER & CHAIRMAN
              </h6>
              <h6 className="text-white mb-6 max-w-lg leading-relaxed text-lg">
                Guided by clarity and purpose, Mr. Hegde brings decades of
                experience and a hands-on approach to creating spaces defined by
                integrity, quality, and lasting value.
              </h6>
              <Button arial-label="Meet our Leadership" rel="noopener noreferrer" href="/visionary-leadership">Meet our Leadership</Button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/about-us/abh01.webp"
                alt="Mr. A. Balakrishna Hegde | Founder & Chairman | Chartered Housing"
                width={800}
                height={600}
                className="object-contain z-10 lg:mt-40"
              />
            </div>                    
          </div>
        </section>
      </div>
    </>
  );
}
