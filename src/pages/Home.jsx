import React from "react";
import Image from "../components/Image";
import { FlipWords } from "@/components/ui/flip-words";
import SengImage from "../assets/seng.jpg";
import { Cover } from "@/components/ui/cover";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import DitherShader from "@/components/ui/dither-shader";
import Introduction from "./Introduction";
import Education from "./Education";
import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Background from "../assets/streetphoto/7.jpg";
import Background2 from "../assets/streetphoto/6.jpg";
import Background3 from "../assets/streetphoto/8.jpg";
const Home = () => {
  const words = ["Photographer", "Editing & Videographer", "Content Creator"];
  return (
    <section>
      <div className="flex sm:pt-0 pt-[50px] flex-col sm:h-[100dvh] gap-[30px] justify-center items-center">
        <div className="flex gap-[10px]">
          <div className="flex max-w-[500px] gap-3">
            <img className="w-full" src={Background} />
          </div>
          <div className="flex max-w-[500px] gap-3">
            <img className="w-full" src={Background2} />
          </div>
          <div className="flex max-w-[500px] gap-3">
            <img className="w-full" src={Background3} />
          </div>
        </div>
        <div className="">
          <div>
            <h1 className="text-[30px] sm:text-[40px]  leading-none">
              <FlipWords words={words} />
            </h1>
          </div>
        </div>
      </div>
      <Introduction />
      <Education />
      <Experience />
      <Contact />
    </section>
  );
};

export default Home;
