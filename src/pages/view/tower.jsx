import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const Tower = () => {
  return (
    <div className="bg-[#EDF7FF]  w-[100%] font-bold flex flex-col">
      <div className="text-[#005FA6] text-[32px] px-[5%] pb-[40px] pt-[5%]">
        Towers
      </div>
      <div className="flex justify-between pl-[5%] w-full">
        <div className="flex flex-col gap-5">
          <AnimatedDiv title={"11,000"} subtitle={"Towers Business"} />
          <AnimatedDiv title={"IBS"} subtitle={"RAN Operation & Maintenance"} />
          <AnimatedDiv
            title={"Site Sharing"}
            subtitle={"Sharing Provide space on GSM Tower & Sites"}
          />
        </div>

        <div className="absolute flex justify-end right-0 bottom-0">
          <img
            src="/pages/tower.svg"
            className=" flex items-center justify-center"
            width={"590px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Tower;
