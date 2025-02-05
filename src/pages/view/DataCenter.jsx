import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const DataCenter = () => {
  return (
    <div className="bg-[#EDF7FF] p-[4%] w-[100%] font-bold flex flex-col">
      <div className="text-[#005FA6] text-[34px] mb-4">Data Centers</div>
      <AnimatedDiv
        subtitle={"14 Tier-certified Data centers across the kingdom"}
      />
      <div className="flex justify-center  z-0">
        <video autoPlay loop muted playsInline width={"700px"}>
          <source src="/pages/011.mp4" />
        </video>
      </div>
    </div>
  );
};

export default DataCenter;
