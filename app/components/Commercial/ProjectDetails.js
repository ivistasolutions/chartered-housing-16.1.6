"use client";
import React from "react";

const achievements = [
  {
    title: "Configuration",
    desc: (
      <>
        Basement + <br />
        Ground + 3 Floors
      </>
    ),
  },
  {
    title: (
      <>
        <span className="lg:pr-10">Total Area</span>
      </>
    ),
    desc: (
      <>
        <span className="lg:pr-10 flex justify-center">
          Approx. <br />
          30,000 sq. ft.
        </span>
      </>
    ),
  },
  {
    title: (
      <>
        <span className="lg:pr-7">Floor Plate</span>
      </>
    ),
    desc: (
      <>
          <span className="lg:pr-7 flex justify-center">
          Approx. <br />
          7,400 sq. ft. </span>
      </>
    ),
  },
  {
    title: (
      <>
        <span className="lg:pr-7">Car Park Ratio</span>
      </>
    ),
    desc: (
      <>
        <span className="lg:pr-7 flex justify-center">
          1 slot for every <br />
          1,000 sq. ft.
        </span>
      </>
    ),
  },
  {
    title: "Occupancy Certificate (OC)",
    desc: "Obtained",
  },
];

const ProjectDetails = () => {
  return (
    <section className="bg-white text-black lg:pb-0  lg:px-0 px-5 pt-5 lg:pt-0">
      {/* Heading */}
      <div className="container mx-auto">
        <h3 className="text-[#ED1C24] roboto-serif-medium mb-5 tracking-wide text-3xl text-center">
          Project Details
        </h3>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left border border-[#ED1C25] lg:p-15 p-5">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${
                idx < 4 ? "lg:border-r lg:border-b-0 border-b lg:pb-0 pb-5" : ""
              } border-[#ED1C25] text-center`}
            >
              <h3 className="text-[#ED1C25] font-bold mb-3 lg:text-2xl text-2xl">
                {item.title}
              </h3>
              <h5 className="lg:text-xl text-xl font-medium text-[#646464] lg:pt-5 text-center">
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
