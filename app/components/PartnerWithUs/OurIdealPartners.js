import { ourIdealPartners } from "@/app/utils/OurIdealPartners";

const OurIdealPartners = () => {
  return (
    <div className="px-5 lg:px-4 lg:mt-16 mt-7">
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="text-[#ED1C25] lg:text-4xl text-3xl lg:text-center roboto-serif-regular">
          Advantages to Landowners
        </h2>
        <p className="text-primary-gray text-lg lg:text-center">
          Chartered projects command a higher prestige and better value in the
          market due to following reasons
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {ourIdealPartners.map((item, i) => (
            <div key={i} className="border border-[#ED1C25] p-5 space-y-1">
              <h3 className="text-[#ED1C25] lg:text-3xl text-2xl font-medium">
                {item.title}
              </h3>
              <p className="text-primary-gray text-lg py-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurIdealPartners;
