import React from "react";
import Image from "next/image";
import Influence from "./Influence";
const IndustryInfluence = () => {
  return (
    <>
      <div className="container mx-auto lg:pt-20 pt-10 flex lg:flex-row flex-col lg:px-0 px-5 justify-between items-center lg:gap-10">
        <div className="container mx-auto">
          <h3 className="text-[#ED1C24] roboto-serif-light tracking-wide lg:text-4xl text-2xl uppercase">
            Industry
          </h3>
          <h2 className="text-4xl pt-1 md:pt-4 md:text-6xl font-bold text-[#646464] roboto-serif-light uppercase">
            Influence
          </h2>
          <div className="w-32 border-b-2 border-[#ED1C24] my-4"></div>
        </div>
        <div className="flex justify-start">
          <Image
            src="/why-chartered/credai.svg"
            alt="CREDAI Logo"
            width={1000}
            height={1000}
            className="w-[70%]"
          />
        </div>
      </div>
      <div className="">
        <Influence />
      </div>
    </>
  );
};

export default IndustryInfluence;
