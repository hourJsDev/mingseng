import React from "react";
import Image from "../components/Image";
import { educations } from "../data/Education";
const Education = () => {
  return (
    <div className="flex">
      <Image image="https://i.pinimg.com/736x/43/cb/61/43cb612f69cdb5d5bef317650528b302.jpg" />
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div className="flex px-[100px] flex-col gap-[50px]">
          <h1 className="text-[100px] leading-none text-[#aa531a]">
            EDUCATION
          </h1>
          <div className="flex gap-[20px] flex-wrap">
            {educations.map((edu) => (
              <div className="w-[400px]" key={edu.schoolName}>
                <p>
                  {edu.startYear} - {edu.endYear}
                </p>
                <h2 className="text-[30px] font-bold">{edu.schoolName}</h2>
                <p className="mt-[10px] text-[gray]">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
