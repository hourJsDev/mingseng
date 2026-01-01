import React from "react";
import Image from "../components/Image";
import SengImage from "../assets/seng-2.jpg";
import { Cover } from "@/components/ui/cover";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

const Introduction = () => {
  return (
    <div className="flex">
      <div className="flex gap-[40px] h-[100dvh] flex-1 justify-center items-center">
        <div>
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
          />
        </div>
        <div className="flex flex-col gap-[50px]">
          <h1 className="fadeUp text-[70px] leading-none text-[#aa531a]">
            <Cover>About Me</Cover>
          </h1>
          <div>
            <p className="fadeUp min-w-[100px] max-w-[600px] text-[20px]">
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
