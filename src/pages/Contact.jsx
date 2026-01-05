import React from "react";
import Image from "../components/Image";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SengImage from "../assets/seng-3.jpg";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { Cover } from "@/components/ui/cover";
import DitherShader from "@/components/ui/dither-shader";
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
    <div id="contact" className="flex mt-[50px] px-0">
      <div className="flex w-full mt-[30px] mb-[30px] flex-1 justify-center items-center">
        <div className="flex flex-col gap-[10px]">
          <p className="text-center text-[30px]">LET'S COLLABORATE</p>

          <DitherShader
            src={SengImage}
            gridSize={1}
            ditherMode="bayer"
            colorMode="duotone"
            primaryColor="#1e3a5f"
            secondaryColor="#f0e68c"
            threshold={0.45}
            className="shadow-lg w-[400px] h-[200px] sm:w-[800px] sm:h-[400px]"
          />
          <ul className="list-none flex-col flex gap-[10px]">
            {contacts.map((c, index) => (
              <li
                key={index}
                className="flex fadeUp group cursor-pointer items-center gap-[15px]"
              >
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
