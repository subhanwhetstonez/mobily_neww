import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const GlobalPoints = () => {
  return (
    <div className="bg-[#EDF7FF] w-[100%] font-bold flex flex-col p-[3%] ">
      <div className="text-[#005FA6] text-[36px] mb-4">
        Global Points of presence
      </div>
      <AnimatedDiv
        subtitle={"Global reach to key countries in Europe, Asia, GCC, Africa"}
      />
      <div className="flex justify-center">
        <img src="/pages/globalPoints.svg" width={"890px"} />
      </div>
    </div>
  );
};

export default GlobalPoints;
