import React from "react";
import Image from "../components/Image";

const Introduction = () => {
  return (
    <div className="flex">
      <Image image="https://i.pinimg.com/736x/43/cb/61/43cb612f69cdb5d5bef317650528b302.jpg" />
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div className="flex flex-col gap-[50px]">
          <h1 className="fadeUp text-[100px] leading-none text-[#aa531a]">About Me</h1>
          <div>
            <p className="fadeUp min-w-[100px] max-w-[800px] text-[20px]">
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
