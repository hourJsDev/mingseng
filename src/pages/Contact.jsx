import React from "react";
import Image from "../components/Image";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SengImage from "../assets/seng-3.jpg";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { Cover } from "@/components/ui/cover";
const Contact = () => {
  const contacts = [
    {
      icon: <FaPhoneAlt fill="white" />,
      text: "+855 61208322",
    },
    {
      icon: <FaGlobe fill="white" />,
      text: "mingseng.netlify.app",
    },
    {
      icon: <MdEmail fill="white" />,
      text: "hourjs168@gamil.com",
    },
  ];
  return (
    <div className="flex">
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div className="flex flex-col gap-[10px]">
          <PixelatedCanvas
            src={SengImage}
            width={800}
            height={400}
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
          <h1 className="text-[40px]">
            <Cover>LET'S COLLABORATE</Cover>
          </h1>
          <ul className="list-none flex-col flex gap-[10px]">
            {contacts.map((c, index) => (
              <li className="flex group cursor-pointer items-center gap-[15px]">
                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center  bg-[black]">
                  {c.icon}
                </span>
                <span className="text-[20px] group-hover:underline">
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
