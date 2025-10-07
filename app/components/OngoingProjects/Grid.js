import React from "react";
import Image from "next/image";
import Button from "../Shared/Button";

const Grid = () => {
  const projects = [
    {
      id: 1,
      title: "Palace Road",
      reraNumber: "PRM/KA/RERA/1251/472/PR/210325/007605",
      desktopImage: "/ongoing-project/palace.png",
      mobileImage: "/ongoing-project/mobile-palace.png",
      logo: "/ongoing-project/chartered-1956.svg",
      logoWidth: 200,
      logoHeight: 200,
      description: [
        "Set in the heart of Palace Road, Chartered 1956 is a rare 9-floor development with just 7 boutique residences — one per floor. Rooted in royal lineage and inspired by timeless design, each 5584 sq. ft. apartment offers 4 spacious bedrooms, private lift access, a personal lobby, and a separate service zone for staff and deliveries.",
        "Built on a parcel of land allotted in 1956 by the King of Mysore to the parents of the current owners, this project is more than exclusive — it's historic.",
      ],
      highlightText:
        "An exclusive luxury residence on Palace Road built on royal history.",
      buttonLink: "/projects/ongoing/palace-road",
      isReversed: false,
    },
    {
      id: 2,
      title: "Yelahanka–Doddaballapur Road",
      reraNumber: "PRM/KA/RERA/1251/472/PR/210325/007605",
      desktopImage: "/ongoing-project/yelahanka.png",
      mobileImage: "/ongoing-project/mobile-palace.png",
      logo: "/ongoing-project/bird-song.svg",
      logoWidth: 300,
      logoHeight: 300,
      description: [
        "A plotted development that balances tranquillity with connectivity, Chartered Birdsong spans 18 acres and 38 guntas at Sadenahalli with 265 well-laid plots. Located just 15 minutes from Yelahanka and the Airport Road, it features underground infrastructure, landscaped green zones, and around 7000 sqft. clubhouse with a swimming pool, including changing rooms, a party hall, two furnished guest rooms, indoor games area, gym, and children's play spaces.",
      ],
      highlightText:
        "Premium plots just 15 mins off Yelahanka–Doddaballapur Road.",
      buttonLink: "/projects/ongoing/palace-road",
      isReversed: true,
    },
  ];

  return (
    <>
      <div className="lg:px-0 px-5">
        <div className="container mx-auto pb-20 flex flex-col gap-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                project.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10`}
            >
              <div className="lg:w-1/2 flex flex-col-reverse lg:flex-col gap-5">
                <Image
                  src={project.desktopImage}
                  alt={project.title}
                  width={1200}
                  height={1000}
                  className="w-full h-full object-cover object-center hidden lg:block"
                />
                <h5 className="text-[#646464]">{project.reraNumber}</h5>
                <Image
                  src={project.mobileImage}
                  alt={project.title}
                  width={1200}
                  height={1000}
                  className="w-full h-full object-cover object-center block lg:hidden"
                />
              </div>

              <div className="lg:w-1/2 w-full flex flex-col h-full">
                <div>
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={project.logoWidth}
                    height={project.logoHeight}
                    className=""
                  />
                </div>
                <h4 className="text-4xl text-[#646464] font-semibold py-5">
                  {project.title}
                </h4>
                <div className="flex flex-col gap-4 flex-grow">
                  {project.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <h5 className="text-4xl text-[#ED1C24] font-semibold py-5 nunito-semibold">
                  {project.highlightText}
                </h5>
                <div className="py-5 flex items-end">
                  <Button href={project.buttonLink}>Know More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
