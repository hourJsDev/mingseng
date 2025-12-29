import React from "react";
import Image from "../components/Image";
import { skills } from "../data/Skill";
const Skill = () => {
  return (
    <div className="flex">
      <Image image="https://i.pinimg.com/736x/43/cb/61/43cb612f69cdb5d5bef317650528b302.jpg" />
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div className="flex px-[100px] flex-col gap-[50px]">
          <h1 className="text-[130px] leading-none ">SKIll</h1>
          <div className="flex gap-[20px] flex-wrap">
            {skills.map((skill) => (
              <div className="w-[400px] relative" key={skill.title}>
                <h2 className="text-[30px] ">{skill.title}</h2>
                <span className="text-[#aa531a]">
                  {skill.exp} year{skill.exp > 1 ? "s" : ""} experienced
                </span>
                <p className="mt-[10px] text-[gray]">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
