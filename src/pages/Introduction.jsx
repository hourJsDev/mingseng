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
        <div className="flex sm:p-0 p-[10px] flex-col gap-[10px] sm:gap-[50px]">
          <h1 className="fadeUp text-3xl sm:text-4xl leading-none">About Me</h1>
          <div>
            <p className="fadeUp min-w-[100px] max-w-[600px] text-neutral-700 dark:text-neutral-300 text-sm md:text-base ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
              nesciunt magni quis ipsum totam minima aspernatur voluptatum est
              libero ab doloremque, magnam nulla. Cupiditate, maxime nostrum
              alias ipsam laudantium, est eum id labore commodi optio expedita
              repellat provident quo libero delectus molestias ducimus, officia
              quisquam aliquid architecto distinctio asperiores consequatur!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              numquam debitis, omnis quaerat ipsam aliquam, sit quo autem
              dignissimos aperiam voluptate at quia ipsum hic odit blanditiis
              ab! Sint, assumenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
