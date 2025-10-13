"use client";

import Image from "next/image";

const sectionData = {
  
  initiatives: [
    {
      title: "Nalkemar School",
      mainTitle: "Our Recent Initiative",
      description:
        "In 2023 Through the Aerya Alva Foundation, we adopted Nalkemar School in Dakshin Kannada.",
      image: "/csr/school.png",
      points: [
        "Built classrooms, modern desks, and upgraded infrastructure",
        "Enhanced teacher salaries and distributed learning materials",
        "Introduced gymnastics, cultural programs, and open-air ‘katte’ learning",
        "Achieved approval for English-medium instruction",
      ],
      ending:
      <>
      <p className="">
      Empowering children through education is one of the most enduring ways to build better lives. This initiative is just the beginning.</p></>,
    },
    {
      title: "Environmental Stewardship",
      mainTitle: "Our Past Initiatives",
      description: "We don't just build on land - we honour it.",
      image: "/csr/evs.png",
      points: [
        <>
          Among the first to adopt <b>tree transplantation</b> in Bangalore
          (Chartered Coronet, 2006), saving hundreds of mature specimens.
        </>,
        <>
          <b>Natural rock formations</b> preserved across multiple projects
        </>,
        <>
          <b>Healing & spiritual plant species</b> integrated into parks at
          Windsong & Fireflies
        </>,
        <>
          <b>Urban tree planting</b> in partnership with BBMP & Rathna Avenue
        </>,
      ],
      ending:
        "Empowering children through education is one of the most enduring ways to build better lives. This initiative is just the beginning.",
    },
    {
      title: "Worker Welfare",
      description: "We care deeply about the people who build our homes.",
      image: "/csr/worker.png",
      points: [
        <>
          Regular <b>on-site health checks</b>
        </>,
        <>
          <b>Mid-day meals,</b> creche support, and daily nutrition
        </>,
        <>
          <b>Winter kits</b> with sweaters and blankets for labourers
        </>,
      ],
      ending: `These aren't just policies, they’re the foundation of a humane and dignified workplace.`,
    },
    {
      title: "Rural Outreach",
      description: "We believe development must reach the grassroots.",
      image: "/csr/rural.png",
      points: [
        <>
          <b>Health & accident insurance</b> for 500+ farm workers
        </>,
        <>
          Weekly rural <b>health camps</b> in partnership with Sevanjali
          Prathishtana
        </>,
      ],
    },
    {
      title: "Education & Youth Empowerment",
      description: "Creating safe, stimulating spaces for the next generation.",
      image: "/csr/education.png",
      points: [
        <>
          <b className="text-[#ED1C24]">Creche Support:</b> On-site day care and
          early learning for labourers’ children
        </>,
        <>
          <b className="text-[#ED1C24]">Nutrition & Hygiene:</b> Balanced meals
          and daily health routines
        </>,
        <>
          <b className="text-[#ED1C24]">Environment & Arts Education:</b>{" "}
          Ongoing engagement through NGOs and cultural foundations
        </>,
      ],
    },
  ],
};

export default function RecentInitiatives() {
  return (
    <div className="py-1 lg:px-0 px-5">

      {sectionData.initiatives.map((initiative, index) => (
        <div key={index}>
          <div>
            <h6 className="text-3xl text-[#646464] font-light text-center pb-5">
              {initiative.mainTitle}
            </h6>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row gap-7 border border-[#ED1C24] mb-10">
            {/* Image Section */}
            <div className="lg:w-[35%]">
              <Image
                src={initiative.image}
                alt={initiative.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-[60%]  lg:px-0 px-5 lg:pb-10 pb-5">
              <h3 className="text-[#ED1C24] mb-5 tracking-wide text-3xl lg:pt-10">
                {initiative.title}
              </h3>
              <h4 className="text-xl text-[#646464] font-light">
                {initiative.description}
              </h4>

              <div className="text-left py-5 pl-5">
                <ul className="list-disc list-outside flex flex-col gap-5 py-3 marker-red">
                  {initiative.points.map((point, i) => (
                    <li key={i} className="marker-red text-lg">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {initiative.ending && <p>{initiative.ending}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
