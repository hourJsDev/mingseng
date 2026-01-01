import React from "react";
import Image from "../components/Image";
import { educations } from "../data/Education";
import { Cover } from "@/components/ui/cover";
import { CometCard } from "@/components/ui/comet-card";
const Education = () => {
  return (
    <div className="flex">
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div className="flex px-[100px] flex-col gap-[50px]">
          <h1 className="text-[100px] text-center leading-none text-[#aa531a]">
            <Cover>EDUCATION</Cover>
          </h1>
          <div className="flex gap-[20px] flex-wrap">
            {educations.map((edu) => (
              <CometCard className={"p-[20px]"}>
                <div className="w-[400px]" key={edu.schoolName}>
                  <p>
                    {edu.startYear} - {edu.endYear}
                  </p>
                  <h2 className="text-[30px] font-bold">{edu.schoolName}</h2>
                  <p className="mt-P[10px] text-[gray]">{edu.description}</p>
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
