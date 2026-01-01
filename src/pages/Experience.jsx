import React from "react";
import Image from "../components/Image";
import { experiences } from "../data/experience.js";
import { Cover } from "@/components/ui/cover";
import { CometCard } from "@/components/ui/comet-card";
const Experience = () => {
  return (
    <div className="flex">
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div className="flex px-[100px] flex-col gap-[50px]">
          <h1 className="text-[100px] text-center leading-none text-[#aa531a]">
            <Cover>Experience</Cover>
          </h1>
          <div className="flex gap-[20px] flex-wrap">
            {experiences.map((exp) => (
              <CometCard key={exp.schoolName}>
                <div className="w-[400px]">
                  <p>
                    {exp.startYear} - {exp.endYear}
                  </p>
                  <h2 className="text-[30px] font-bold">{exp.schoolName}</h2>
                  <p className="mt-[10px] text-[gray]">{exp.description}</p>
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
