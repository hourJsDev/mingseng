import React from "react";
import Image from "../components/Image";

const Vision = () => {
  return (
    <div className="flex">
      <Image
        image={
          "https://i.pinimg.com/474x/e6/6e/30/e66e30c5d78259ede6b820baee3def4c.jpg"
        }
      />
      <div className="flex gap-[20px] flex-col h-[100dvh] flex-1 justify-center items-center">
        <div className="flex flex-col gap-[20px]">
          <h1 className="fadeLeft text-[60px] leading-none text-[#aa531a]">Vision</h1>
          <div>
            <p className="fadeRight w-[700px] text-[20px]">
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
        <div className="flex flex-col gap-[20px]">
          <h1 className="fadeRight text-[60px] leading-none">Mission</h1>
          <div>
            <p className="fadeLeft w-[700px] text-[20px]">
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

export default Vision;
