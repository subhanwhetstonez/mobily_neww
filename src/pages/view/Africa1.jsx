import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const Africa1 = () => {
  return (
    <div>
      <div className="relative flex flex-col gap-10 px-[4vw] pt-[3vw] z-10">
        <div>
          <p className="text-[#005FA6] text-[32px] font-[700] ">
            Africa1 (New)
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 self-baseline">
          <div>
            <AnimatedDiv title={"10,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv
              title={"60 Tbps"}
              subtitle={"Initial System Design Capacity"}
            />
          </div>
          <div>
            <AnimatedDiv
              title={"200 Gbps"}
              subtitle={"Wave Length Techmology"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[10px] z-0">
        <video autoPlay loop muted playsInline width={"800px"}>
          <source src="/pages/003.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Africa1;
