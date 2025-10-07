import React from "react";
import Image from "next/image";
const Influence = () => {
  return (
    <>
      <div className="container mx-auto py-20 flex justify-between items-center gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 items-start justify-center border-b border-[#ED1C25] lg:space-y-10 pb-5 lg:pb-0">
            <Image
              src="/why-chartered/abh.png"
              alt="Aerya Balakrishna Hegde"
              width={1000}
              height={1000}
              className="lg:w-[400px] lg:h-[400px] lg:px-0 px-5"
            />
            <div className="flex flex-col gap-5 text-[#646464] lg:px-0 px-5">
              <h6>
                <span className="font-bold">Mr. Aerya Balakrishna Hegde</span>{" "}
                has played a significant role in shaping the real estate sector
                through his long-standing association with CREDAI. He is the
                Past President of CREDAI Karnataka and currently serves as the
                Chairman of the CREDAI National Centre of Learning, which
                spearheads the Business Leadership Programme at the Indian
                Institute of Management – Bangalore for CREDAI members across
                the country. He has also contributed to the industry’s thought
                leadership as the former Editor of CREDAI Times, the in-house
                magazine of CREDAI National.
              </h6>
              <h6>
                During his tenure as{" "}
                <span className="font-bold">
                  President of CREDAI Karnataka (2006–2008),
                </span> {" "}
                Mr. Hegde was instrumental in driving several major policy
                reforms and industry benefits. He successfully rolled back the{" "}
                <span className="font-bold">
                  process of conversion from agricultural to non-agricultural
                  land,
                </span>{" "}
                simplifying what had become an impractical process. On 31st
                March 2007, the last day before the expiry of the Section 80 IB
                exemption of Income Tax, he facilitated the sanctioning of
                nearly 45 plans, delivering substantial financial benefit to
                several members. He also{" "}
                <span className="font-bold">
                  persuaded the government to adopt the principle of deemed land
                  use change in accordance with the Master Plans,
                </span>{" "}
                streamlining and accelerating regulatory clearances for
                developers across the state.
              </h6>
              <h6>
                He further expanded CREDAI’s reach by inducting new city
                associations in Hubli & Dharwad, Mysore, Mangalore, and
                Udupi, bringing regional representation to the fore for the first
                time in 27 years. This expansion laid the groundwork for a more
                inclusive and collaborative industry body across Karnataka.
              </h6>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-5 items-center justify-center">
            <Image
              src="/why-chartered/bimal.png"
              alt="Aerya Balakrishna Hegde"
              width={1000}
              height={1000}
              className="lg:w-[400px] lg:h-[400px] lg:px-0 px-5"
            />
            <div className="flex flex-col gap-5 text-[#646464] lg:px-0 px-5">
              <h6>
                Our Managing Director,{" "}
                <span className="font-bold">Mr. A. Bimal Hegde,</span> currently
                serves as the{" "}
                <span className="font-bold">
                  President-Elect of CREDAI Bengaluru,
                </span>{" "}
                continuing Chartered’s legacy of shaping not just structures,
                but standards across the real estate sector. We are proud that
                he has been instrumental in pioneering the{" "}
                <span className="font-bold">CREDAI Youth Wing </span>in
                Karnataka, empowering a new generation of ethical, future-ready
                developers.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Influence;
