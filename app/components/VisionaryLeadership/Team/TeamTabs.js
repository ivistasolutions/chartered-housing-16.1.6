"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { team } from "@/app/utils/TeamData";

const TeamTabs = () => {
  const [active, setActive] = useState(team[0]);

  return (
    <section className="w-full pb-16 bg-white hidden lg:block container mx-auto">
      <div className=" grid md:grid-cols-2 gap-20 items-start">
        {/* Left Tabs */}
        <div className="space-y-6">
          {team.map((member) => (
            <div
              key={member.id}
              onClick={() => setActive(member)}
              className={`flex items-center cursor-pointer p-3 transition ${
                active.id === member.id ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]"
              }`}
            >
              <Image
                src={member.thumb}
                alt={member.alt}
                width={150}
                height={150}
                className="object-cover"
              />
              <div className="ml-4">
                <h4
                  className={`font-semibold text-2xl py-3 ${
                    active.id === member.id
                      ? "text-[#ED1C25]"
                      : "text-[#ED1C25]"
                  }`}
                >
                  {member.name}
                </h4>
                <h5 className="text-lg text-[#646464] uppercase">{member.role}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={active.img}
                alt={active.name}
                width={500}
                height={500}
                className="rounded-md object-contain mb-6 -mt-[300px]"
              />
              <h3 className="text-[#ED1C25] lg:text-4xl text-2xl mb-3 font-semibold">
                {active.name}
              </h3>
              <h5 className="text-lg text-[#646464] mb-5 uppercase">
                {active.role}
              </h5>
              <p className=" mb-5">{active.bio}</p>
              <p className="text-[#ED1C25] nunito-semibold mb-5">
                {active.quote}
              </p>
              <p className="mb-5">{active.bio2}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TeamTabs;
