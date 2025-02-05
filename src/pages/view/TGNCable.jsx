import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const TGNCable = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 px-[4vw] pt-[4vw] bg-[#edf7ff]">
        <div>
          <p className="text-[#005FA6] text-[32px] font-[700] ">
            TGN-Euro Asia
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 self-baseline">
          <div>
            <AnimatedDiv title={"4,031 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div>
            <AnimatedDiv
              title={"100 Gbps"}
              subtitle={"Wave Length Techmology "}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <video autoPlay loop muted playsInline width={"900px"}>
          <source src="/pages/009.mp4" />
        </video>
      </div>
    </div>
  );
};

export default TGNCable;
