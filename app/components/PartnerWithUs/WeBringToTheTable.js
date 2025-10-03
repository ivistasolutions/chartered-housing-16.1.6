import Image from "next/image"

const WeBringToTheTable = () => {
  const data = [
    "A legacy of timely, transparent delivery",
    "Robust architectural and project planning capabilities",
    "Ethical business practices and regulatory clarity",
    "Deep insight into Bengaluru’s real estate landscape",
    "A loyal customer base and strong market reputation",
  ]
  return (
    <div className="px-5 lg:px-4 lg:my-16 my-7">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div>
          <Image
            src="/partner-with-us/we-bring-to-the-table.png"
            width={600}
            height={575}
            alt="We bring to the table"
            className=""
          />
        </div>
        <div>
          <h2 className="text-[#ED1C25] lg:text-4xl text-3xl roboto-serif-regular py-7 lg:py-0">
            We Bring To The Table
          </h2>
          <ul className="flex flex-col gap-5 w-full lg:mt-10">
            {data.map((item, index) => (
              <li
                key={index}
                className="bg-[#EBEBEB] text-[#646464] font-playfair text-xl lg:text-2xl italic leading-9 px-4 py-5 w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-lg space-y-7 lg:mt-16 mt-7">
        <h2 className="lg:text-4xl text-3xl lg:text-center roboto-serif-regular text-[#ED1C25]">
          Joint Development Expertise
        </h2>
        <p>
          We bring decades of experience in steering complex real estate
          projects from idea to execution. Our team is skilled at identifying
          potential-rich land parcels, conducting feasibility studies, and
          crafting development strategies that maximise shared value.
        </p>
        <p>
          We thrive in collaborative environments, pooling resources and
          knowledge to deliver win-win outcomes.
        </p>
      </div>
    </div>
  )
}

export default WeBringToTheTable
