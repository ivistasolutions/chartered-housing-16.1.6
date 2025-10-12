
import { ch1956projectDetails } from "@/app/utils/projectDetails"
import Image from "next/image"

const ProjectDetails = () => {
  return (
    <div className="relative hidden lg:block">
      <Image
        src="/chartered-1956/project-overview.png"
        alt="Project Overview Background"
        fill
        className="object-cover object-center -z-10 lg:block hidden"
      />
      <Image
        src="/chartered-1956/mobile-details.png"
        alt="Project Overview Background"
        fill
        className="object-cover object-center -z-10 lg:hidden"
      />
      <div className="relative max-w-7xl mx-auto py-40">
        <h3 className="lg:text-[40px] text-[30px] text-[#ffff] roboto-serif-medium text-center">
          Project Overview
        </h3>
        <div className="mt-10 border border-[#ED1C25] p-10 bg-white">
          <div className="grid grid-cols-5">
            {ch1956projectDetails.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3 p-5
              ${i % 5 !== 4 ? "border-r border-[#ED1C25]" : ""} 
              ${
                i <
                ch1956projectDetails.length -
                  (ch1956projectDetails.length % 5 || 5)
                  ? "border-b border-[#ED1C25]"
                  : ""
              }`}
              >
                <div className="h-14 flex">
                  <Image
                    src={item.icon}
                    width={50}
                    height={30}
                    alt={`icon ${i + 1}`}
                  />
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: item.title }}
                  className="text-[#646464]"
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
