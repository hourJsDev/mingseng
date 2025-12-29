import React from "react";
import Image from "../components/Image";

const Home = () => {
  return (
    <div className="flex">
      <Image
        image={
          "https://i.pinimg.com/736x/7f/c3/1e/7fc31e1863c120c9fae63eb52c838757.jpg"
        }
      />
      <div className="flex h-[100dvh] flex-1 justify-center items-center">
        <div>
          <h1 className="fadeRight text-[140px] leading-none text-[#aa531a]">
            MINGSENG
          </h1>
          <h1 className="fadeLeft text-[140px] leading-none">
            PORTFOLIO
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
