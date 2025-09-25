"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/home/hemanth-01.png",
    text: "Chartered has always been our go-to brand when it comes to quality living. Their personalized service, transparency in the purchase, backed by after-sales support with no hassles makes it very easy for us to decide on our property investment. A relationship that transcends generations is what we appreciate the most.We choose Chartered to live in now and always.",
    name: "Mr. Hemanth Manay",
    role: "CEO, S.R. Gopal Rao Opticians & Optometrists",
  },
  {
    id: 2,
    image: "/home/shankar-01.png",
    text: "Anjali and I are happy members of the Chartered Housing family. We bought not just one plot for our friend but two plots in the Chartered Windsong for ourselves. It is the perfect place away from the hustle bustle of city-centre living, amidst peace and tranquility. True to the reputation of Chartered Group, we had a hassle free experience. They truly live up to their tagline, QUALITY through TRANSPARENCY.",
    name: "Mr. Shankar Sastri",
    role: "Joint Managing Director, Sterling Developers Pvt. Ltd.",
  },
  {
    id: 3,
    image: "/home/srini.png",
    text: "Chartered Grasshopper is my second Home from Chartered, the first one being Chartered Coronet. In my experience Chartered stands for Quality, Transparency & Value for Money. Their projects are unique, functional & built with the customer in mind. Their staff are friendly and easy to deal with. Most importantly Chartered projects end delivered on time.",
    name: "Mr. Srinivasu Allapan",
    role: " Director – Sales & Marketing, JK Tyre & Industries Ltd.",
  },
  {
    id: 4,
    image: "/home/jagdeesh.png",
    text: "I’ve owned & lived in a Chartered Apartment for close to 20 years. The apartment is thoughtfully designed, well-constructed and has generated great long term value! I have also enjoyed dealing with the promoters and staff of Chartered, who have always been professional, competent and straightforward.",
    name: "Mr. Jagdeesh Reddy",
    role: "Owner of Transport Business",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 2 : prev - 2));
  };

  return (
    <>
      <section className="container mx-auto px-5 lg:px-0 pt-20 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-[40%] flex flex-col items- justify-end">
          <div>
            <div className="text-[100px] leading-none font-bold text-black">
              <Image
                src="/home/quote.svg"
                alt="quote"
                width={150}
                height={150}
              />
            </div>
            <h2 className="text-[#ED1C24] roboto-serif-light text-[31px] font-medium mt-10">
              What our <br /> customers are <br /> saying
            </h2>
          </div>

          {/* Navigation + Progress */}
          <div
            className="items-center gap-6 mt-10 hidden lg:flex
        "
          >
            <button onClick={prevSlide} className="p-2">
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-0 w-20 ">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
                (_, pageIdx) => (
                  <div
                    key={pageIdx}
                    className={`h-[2px] flex-1 transition-all ${
                      Math.floor(current / 2) === pageIdx
                        ? "bg-red-600"
                        : "bg-[#FAD4D6]"
                    }`}
                  />
                )
              )}
            </div>

            <button onClick={nextSlide} className="p-2">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Right Section - Carousel */}
        <div className="lg:w- grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <AnimatePresence mode="wait">
          {Array.from({ length: typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 2 }).map(
  (_, i) => {
    const idx = (current + i) % testimonials.length;
    return (
      <motion.div
        key={testimonials[idx].id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-start gap-6 shadow-md p-5 lg:h-[520px]"
      >
        <Image
          src={testimonials[idx].image}
          alt={testimonials[idx].name}
          width={120}
          height={120}
          className="rounded-full object-cover flex-shrink-0"
        />
        <div className="flex flex-col justify-between flex-1 h-full">
          <h4 className="text-[#646464] mb-4 text-lg leading-relaxed overflow-hidden">
            {testimonials[idx].text}
          </h4>

          <div className="mt-auto">
            <h4 className="text-[#ED1C24] py-3 font-semibold text-2xl nunito-regular">
              {testimonials[idx].name}
            </h4>
            <h6 className="text-[#646464] text-lg nunito-regular">
              {testimonials[idx].role}
            </h6>
          </div>
        </div>
      </motion.div>
    );
  }
)}

          </AnimatePresence>
        </div>
      </section>
      {/* Navigation + Progress */}
      <div className="flex items-center gap-6 mt-10 lg:hidden">
        <button onClick={prevSlide} className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-0 w-20 ">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
            (_, pageIdx) => (
              <div
                key={pageIdx}
                className={`h-[2px] flex-1 transition-all ${
                  Math.floor(current / 2) === pageIdx
                    ? "bg-red-600"
                    : "bg-[#FAD4D6]"
                }`}
              />
            )
          )}
        </div>

        <button onClick={nextSlide} className="p-2">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
