import React from "react";
import Image from "../components/Image";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      <Image image="https://i.pinimg.com/736x/43/cb/61/43cb612f69cdb5d5bef317650528b302.jpg" />
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div className="flex flex-col gap-[50px]">
          <h1 className="text-[100px] leading-none text-[#aa531a]">
            LET'S <br />
            COLLABORATE
          </h1>
          <ul className="list-none flex-col flex gap-[10px]">
            {contacts.map((c, index) => (
              <li  className="flex group cursor-pointer items-center gap-[15px]">
                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center  bg-[black]">{c.icon}</span>
                <span className="text-[20px] group-hover:underline">{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
