import React from "react";

const Logo = () => {
  return (
    <div className="flex w-[150px] flex-col gap-[2px] items-center border">
      <div className="w-1/2 rounded-[10px] h-[20px] bg-yellow-600 "></div>
      <div className="flex w-full gap-[2px]">
        <div className="flex-1  rounded-[10px] h-[20px] bg-red-600"></div>
        <div className="bg-black h-50px w-[4px]"></div>
        <div className="flex-1  rounded-[10px] h-[20px] bg-red-600"></div>
      </div>
    </div>
  );
};

export default Logo;
