"use client";

import Image from "next/image";

const sectionData = {
  
  initiatives: [
    {
      title: "Nalkemar School",
      mainTitle: "Our Recent Initiative",
      alt: "Chartered Housing CSR Activities | Aerya Alva Foundation | Nalkemar School ",
      description:
        "In 2023 Through the Aerya Alva Foundation, we adopted Nalkemar School in Dakshin Kannada.",
      image: "/csr/school.webp",
      points: [
        "Built classrooms, modern desks, and upgraded infrastructure",
        "Enhanced teacher salaries and distributed learning materials",
        "Introduced gymnastics, cultural programs, and open-air ‘katte’ learning",
        "Achieved approval for English-medium instruction",
      ],
      ending:
      <>
      <h6 className="lg:text-[18px] text-[18px] text-[#646464]">
      Empowering children through education is one of the most enduring ways to build better lives. This initiative is just the beginning.</h6></>,
    },
    {
      title: "Environmental Stewardship",
      mainTitle: "Our Past Initiatives",
      alt: "Chartered Housing CSR Activities | Environmental Stewardship | Tree transplantation | Chartered Coronet, 2006",
      description: "We don't just build on land - we honour it.",
      image: "/csr/evs.webp",
      points: [
        <>
          Among the first to adopt tree transplantation in Bangalore
          (Chartered Coronet, 2006), saving hundreds of mature specimens
        </>,
        <>
          Natural rock formations preserved across multiple projects
        </>,
        <>
          Healing & spiritual plant species integrated into parks at
          Windsong & Fireflies
        </>,
        <>
          Urban tree planting in partnership with BBMP & Rathna Avenue
        </>,
      ],
      ending:
        "Empowering children through education is one of the most enduring ways to build better lives. This initiative is just the beginning.",
    },
    {
      title: "Worker Welfare",
      alt: "Chartered Housing CSR Activities | Worker Welfare",
      description: "We care deeply about the people who build our homes.",
      image: "/csr/worker.webp",
      points: [
        <>
          Regular on-site health checks
        </>,
        <>
          Mid-day meals, creche support, and daily nutrition
        </>,
        <>
          Winter kits with sweaters and blankets for labourers
        </>,
      ],
      ending: `These aren't just policies, they’re the foundation of a humane and dignified workplace.`,
    },
    {
      title: "Rural Outreach",
      alt: "Chartered Housing CSR Activities | Rural Outreach | Health & accident insurance, Weekly rural health camps  for 500+ farm workers",
      description: "We believe development must reach the grassroots.",
      image: "/csr/rural.webp",
      points: [
        <>
          Health & accident insurance for 500+ farm workers
        </>,
        <>
          Weekly rural health camps in partnership with Sevanjali
          Prathishtana
        </>,
      ],
    },
    {
      title: "Education & Youth Empowerment",
      alt: "Chartered Housing CSR Activities | Education & Youth Empowerment | Creche Support, Nutrition & Hygiene, Environment & Arts Education for labourers’ children",
      description: "Creating safe, stimulating spaces for the next generation.",
      image: "/csr/education.webp",
      points: [
        <>
          <b className="text-[#646464]">Creche Support:</b> On-site day care and
          early learning for labourers’ children
        </>,
        <>
          <b className="text-[#646464]">Nutrition & Hygiene:</b> Balanced meals
          and daily health routines
        </>,
        <>
          <b className="text-[#646464]">Environment & Arts Education:</b>{" "}
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
            <h6 className="lg:text-[24px] text-[20px] text-[#646464] font-regular text-center pb-5">
              {initiative.mainTitle}
            </h6>
          </div>
          <div className="container mx-auto flex flex-col md:flex-row gap-7 border border-[#ED1C24] mb-10">
            {/* Image Section */}
            <div className="lg:w-[35%]">
              <Image
                src={initiative.image}
                alt={initiative.alt}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-[60%]  lg:px-0 px-5 lg:pb-10 pb-5">
              <h3 className="text-[#ED1C24] mb-5 tracking-wide lg:text-[24px] text-[20px] lg:pt-10">
                {initiative.title}
              </h3>
              <h4 className="lg:text-[18px] text-[18px] text-[#646464] font-">
                {initiative.description}
              </h4>

              <div className="text-left py-5 pl-5">
                <ul className="list-disc list-outside flex flex-col gap-3 py- marker-red">
                  {initiative.points.map((point, i) => (
                    <li key={i} className="marker-red text-[18px] text-[#646464]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {initiative.ending && <h6 className="text-[18px] text-[#646464]">{initiative.ending}</h6>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
