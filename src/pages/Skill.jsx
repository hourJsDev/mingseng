import React from "react";
import { skills } from "../data/Skill";
const Skill = () => {
  return (
    <div id="skill" className="flex sm:mt-0 mt-[20px] mx-auto px-4 max-w-7xl">
      <div className="flex flex-1 justify-center items-center">
        <div className="flex  flex-col gap-[20px] sm:gap-[50px]">
          <div>
            <p className="text-2xl sm:text-4xl">My Professional Skill</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              corporis!
            </p>
          </div>
          <div className="flex gap-[20px] items-center sm:flex-row flex-col flex-wrap">
            {skills.map((skill) => (
              <div
                className="w-[400px] border p-[20px] cursor-pointer relative"
                key={skill.title}
              >
                <h2 className="text-lg sm:text-2xl ">{skill.title}</h2>
                <span className="text-[#aa531a] text-sm sm:text-md">
                  {skill.exp} year{skill.exp > 1 ? "s" : ""} experienced
                </span>
                <p className="mt-[10px] text-[gray]  text-sm sm:text-md">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
