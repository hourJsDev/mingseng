import React from "react";
import Image from "../components/Image";
import SengImage from "../assets/seng-2.jpg";
import DitherShader from "@/components/ui/dither-shader";

const Introduction = () => {
  return (
    <div id="about-me" className="flex mt-[50px]">
      <div className="flex sm:flex-row flex-col-reverse gap-[40px] flex-1 justify-center items-center">
        <div>
          <DitherShader
            src={SengImage}
            gridSize={1}
            ditherMode="bayer"
            colorMode="duotone"
            primaryColor="#1e3a5f"
            secondaryColor="#f0e68c"
            threshold={0.45}
            className=" w-[400px] h-[500px]"
          />
        </div>
        <div className="flex sm:p-0 p-[10px] flex-col gap-[10px] sm:gap-[20px]">
          <h1 className="fadeUp text-3xl sm:text-4xl leading-none">About Me</h1>
          <div>
            <p className="fadeUp min-w-[100px] max-w-[500px] text-neutral-700 dark:text-neutral-300 text-sm md:text-base ">
              I have over 3 years of experience working in media, with a strong
              focus on video editing, shooting, script writing, photography, 3D
              animation, and color grading, My work reflects both technical
              skill and creative storytelling, developed through hands-on
              projects across various media platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
