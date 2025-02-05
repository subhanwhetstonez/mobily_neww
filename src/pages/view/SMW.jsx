import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const SMW = () => {
  return (
    <div>
      <div className="relative flex flex-col gap-14 px-[4vw] pt-[4vw] z-10">
        <div>
          <p className="text-[#005FA6] text-[32px] font-[700] ">SMW6 (New)</p>
        </div>
        <div className="grid grid-cols-2 gap-4 self-baseline">
          <div>
            <AnimatedDiv title={"19,200 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv
              title={"120 Tbps"}
              subtitle={"Initial System Design Capacity"}
            />
          </div>
          <div>
            <AnimatedDiv
              title={"200 Gbps"}
              subtitle={"Wave Length Techmology "}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[-50px] z-0">
        <video autoPlay loop muted playsInline width={"700px"}>
          <source src="/pages/004.mp4" />
        </video>
      </div>
    </div>
  );
};

export default SMW;
