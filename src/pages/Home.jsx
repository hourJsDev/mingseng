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
const Home = () => {
  const words = ["Photographer", "Video Editor", "Content Creator"];
  return (
    <section>
      <div className="flex flex-col sm:h-[100dvh] gap-[30px] justify-center items-center">
        <div className="flex gap-3">
          <DitherShader
            src={SengImage}
            gridSize={1}
            ditherMode="bayer"
            colorMode="duotone"
            primaryColor="#1e3a5f"
            secondaryColor="#f0e68c"
            threshold={0.45}
            className="max-sm:hidden w-[400px] sm:w-[100] h-[500px]"
          />
          <PixelatedCanvas
            src={SengImage}
            width={400}
            height={500}
            cellSize={3}
            dotScale={0.9}
            shape="square"
            backgroundColor="#000000"
            dropoutStrength={0}
            interactive
            distortionStrength={3}
            distortionRadius={80}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.2}
            className="shadow-lg"
          />
          <DitherShader
            src={SengImage}
            gridSize={2}
            ditherMode="bayer"
            colorMode="grayscale"
            invert={false}
            animated={false}
            animationSpeed={0.02}
            primaryColor="#000000"
            secondaryColor="#f5f5f5"
            threshold={0.5}
            className="max-sm:hidden w-[400px] h-[500px]"
          />
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
      <Skill />
      <Experience />
      <Project />
      <Contact />
    </section>
  );
};

export default Home;
