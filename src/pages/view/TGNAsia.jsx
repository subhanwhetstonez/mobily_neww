import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const TGNAsia = () => {
  return (
    <div>
      <div className="relative z-10 flex flex-col gap-10 px-[4vw] pt-[4vw]">
        <div>
          <p className="text-[#005FA6] text-[30px] font-[700] ">
            TGN-Euro Asia
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 self-baseline">
          <div>
            <AnimatedDiv title={"15,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv
              title={"100 Gbps"}
              subtitle={"Wave Length Techmology"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[20px] z-0">
        <video autoPlay loop muted playsInline width={"800px"}>
          <source src="/pages/008.mp4" />
        </video>
      </div>
    </div>
  );
};

export default TGNAsia;
