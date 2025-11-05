"use client";
import Image from "next/image";
import React from "react";

const achievements = [
  {
    icon: "/commercial/icon-1.svg",
    title: "Configuration",
    desc: (
      <>
        Basement,
        <br />
        Ground Floor & <br /> 3 Upper Floors
      </>
    ),
  },
  {
    icon: "/commercial/icon-2.svg",
    title: (
      <>
        <span className="lg:pr-0">Total Area</span>
      </>
    ),
    desc: (
      <>
        <span className="lg:pr-0 flex justify-center">
          Approx. <br />
          30,000 sq. ft.
        </span>
      </>
    ),
  },
  {
    icon: "/commercial/icon-3.svg",
    title: (
      <>
        <span className="lg:pr-0">Floor Plate</span>
      </>
    ),
    desc: (
      <>
        <span className="lg:pr-0 flex justify-center">
          Approx. <br />
          7,400 sq. ft.{" "}
        </span>
      </>
    ),
  },
  {
    icon: "/commercial/icon-4.svg",
    title: (
      <>
        <span className="lg:pr-0">Car Park Ratio</span>
      </>
    ),
    desc: (
      <>
        <span className="lg:pr-0 flex justify-center">
          1 slot for every <br />
          1,000 sq. ft.
        </span>
      </>
    ),
  },
  {
    icon: "/commercial/icon-5.svg",
    title: "Occupancy Certificate (OC)",
    desc: "Obtained",
  },
];

const ProjectDetails = () => {
  return (
    <section className="bg-white text-black lg:pb-0  lg:px-0 px-5 pt-5 lg:pt-0">
      {/* Heading */}
      <div className="container mx-auto">
        <h3 className="text-[#ED1C24] roboto-serif-light mb-5 tracking-wide lg:text-4xl text-2xl text-center">
          Project Details
        </h3>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 text-left border border-[#ED1C25] lg:p-15 p-5">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${
                idx < 4 ? "lg:border-r lg:border-b-0 border-b lg:pb-0 pb-5" : ""
              } border-[#ED1C25] text-center`}
            >
              <div className="flex justify-center pb-5 lg:pt-0 pt-5">
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              </div>
              <h3 className="text-[#ED1C25] font-light text-lg">
                {item.title}
              </h3>
              <h5 className="lg:text-lg text-lg font-medium text-[#646464] lg:pt-5 text-center">
                {item.desc}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
