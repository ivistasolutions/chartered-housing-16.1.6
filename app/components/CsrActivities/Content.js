import React from "react";

const Content = () => {
  return (
    <>
      <div className="lg:px-0 px-5">
        <div className="container mx-auto lg:py-20 py-5">
          <div className="flex flex-col items-center justify-center gap-7">
            <h6 className=" lg:text-[30px] text-[20px] text-[#646464] text-left">
              At Chartered Housing, we believe real estate is not just about
              structures - it&apos;s about people. From the start, our mission
              has been clear: put ethics before profits, and impact before
              image. This commitment extends beyond homes and into communities,
              the environment, and everyday lives.
            </h6>
            <div>
              <h3 className="text-[#ED1C24] roboto-serif-light mb-5 tracking-wide text-3xl text-center">
                People Before Profit
              </h3>
              <h6 className=" lg:text-[30px] text-[20px] text-[#646464] text-left">
                Our CSR philosophy stems from our founding values. Whether it’s
                protecting green cover, uplifting rural communities, or
                nurturing children on-site, our initiatives are human-first.
                Every project, every action, is a step toward building a more
                compassionate and equitable future.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
