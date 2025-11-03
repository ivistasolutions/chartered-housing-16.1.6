"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../Shared/Button";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      number: "36+",
      targetValue: 36,
      text: (
        <>
          years of <br /> excellence
        </>
      ),
      image: "/home/img-1.png",
    },
    {
      id: 2,
      number: "30+",
      targetValue: 30,
      text: (
        <>
          projects <br /> delivered
        </>
      ),
      image: "/home/img-2.png",
    },
    {
      id: 3,
      number: "70%",
      targetValue: 70,
      text: (
        <>
          of our sales come <br /> through references
        </>
      ),
      image: "/home/img-3.png",
    },
    {
      id: 4,
      number: "100%",
      targetValue: 100,
      text: (
        <>
          on-time <br /> delivery
        </>
      ),
      image: "/home/img-4.png",
    },
  ];

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      const increment = stat.targetValue / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.floor(increment * currentStep),
          stat.targetValue
        );

        setCounts((prev) => ({
          ...prev,
          [stat.id]: newValue,
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white bg-cover bg-center lg:py-20 py-10"
      style={{ backgroundImage: "url('/home/since-bg.png')" }}
    >
      <div className="container mx-auto px-5 lg:py-16 py-10">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
          {stats.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white text-black shadow-lg w-full overflow-hidden transition-all duration-1000 ease-out ${
                isVisible
                  ? index % 2 === 1 
                    ? "lg:translate-y-10 translate-y-0 opacity-100" 
                    : "translate-y-0 opacity-100"
                  : index % 2 === 0
                  ? "-translate-y-20 opacity-0"
                  : "translate-y-40 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="pt-5 px-5">
                <h3 className="text-[36px] font-bold">
                  {isVisible ? (
                    <>
                      {counts[item.id]}
                      {item.number.includes("+") && "+"}
                      {item.number.includes("%") && "%"}
                    </>
                  ) : (
                    "0"
                  )}
                </h3>
                <h5 className="mt-0 text-gray-700 text-2xl">{item.text}</h5>
              </div>
              <Image
                src={item.image}
                alt={item.text}
                width={300}
                height={200}
                className="w-full h-60 object-cover p-5"
              />
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="text-center lg:pt-52 pt-15">
          <h2 className="text-[36px] roboto-serif-regular text-[#ED1C24]">
            Since 1989
          </h2>
          <h6 className="mt-0 max-w-3xl mx-auto text-2xl">
            Chartered Housing has operated on the principle of uncompromising
            quality through transparency. This core value remains the
            cornerstone of our success and your peace of mind.
          </h6>
          <div className="py-5 flex justify-center">
            <Button href="/about-us">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
