import React from "react";
import Image from "../components/Image";
import { skills } from "../data/Skill";
import { Cover } from "@/components/ui/cover";
import { CometCard } from "@/components/ui/comet-card";
const Skill = () => {
  return (
    <div className="flex">
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div className="flex px-[100px] flex-col gap-[50px]">
          <h1 className="text-[130px] text-center leading-none ">
            <Cover>SKIll</Cover>
          </h1>
          <div className="flex gap-[20px] flex-wrap">
            {skills.map((skill) => (
              <CometCard key={skill.title}>
                <div className="w-[400px] relative" key={skill.title}>
                  <h2 className="text-[30px] ">{skill.title}</h2>
                  <span className="text-[#aa531a]">
                    {skill.exp} year{skill.exp > 1 ? "s" : ""} experienced
                  </span>
                  <p className="mt-[10px] text-[gray]">{skill.description}</p>
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
