'use client'
import React from 'react'
import Image from 'next/image'

const amenitiesData = [
  {
    icon: '/chartered-1956/hallway.svg', // your local icon path
    title: 'Imperial Hallway',
    description: `Grand double height entrance lobby with handpicked Italian/imported marble flooring exquisitely laid with high gloss finish complemented impeccably with exclusive wall cladding.`,
  },
  {
    icon: '/chartered-1956/court.svg',
    title: "King’s Court",
    description: `Opulent and well decked up double height party plaza.`,
  },
  {
    icon: '/chartered-1956/pool.svg',
    title: 'Regal Plunge',
    description: `Swimming pool with double height view.`,
  },
  {
    icon: '/chartered-1956/lounge.svg',
    title: 'Royal Lounge',
    description: `A well appointed open terrace at the tenth level for get-togethers under the night sky.
• Modern Gym
• Board Room`,
  },
]

const Amenities = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/chartered-1956/amenities-bg.png')" }} // Replace with your background image
    >
      {/* Overlay */}

      <div className="relative z-10 container mx-auto text-center text-white px-5 md:px-0">
        <h2 className="text-4xl font-light mb-12 roboto-serif-medium">Amenities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
          {amenitiesData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800  p-8 shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-start min-h-14">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h5 className="font-bold mb-3 text-[18px]">{item.title}</h5>
              <h5 className="text-[18px] leading-relaxed whitespace-pre-line">
                {item.description}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
