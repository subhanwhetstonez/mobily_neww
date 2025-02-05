import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const AAE1Cable = () => {
  return (
    <div className="bg-[#edf7ff] overflow-hidden">
      <div className="relative flex flex-col gap-14 px-[4vw] pt-[2vw] z-10 overflow-hidden">
        <div>
          <p className="text-[#005FA6] text-[2vw] font-[700] ">AAE1 Cable</p>
        </div>
        <div className="grid grid-cols-2 gap-4 self-baseline x">
          <div className="col-span-1">
            <AnimatedDiv title={"25,000 Km"} subtitle={"Submarine Cable"} />
          </div>
          <div className="col-span-1">
            <AnimatedDiv title={"4/5"} subtitle={"Number of Fiber Pair"} />
          </div>
          <div className="col-span-1">
            <AnimatedDiv title={"80"} subtitle={"Initial Design WL per FB"} />
          </div>
          <div className="col-span-1">
            <AnimatedDiv
              title={"100 bps"}
              subtitle={"Wavelength Technology "}
            />
          </div>
        </div>
      </div>
      <div className="absolute flex w-full mt-[-40px] justify-center z-0">
        <video autoPlay loop muted playsInline height={"100px"} width={"900px"}>
          <source src="/pages/007.mp4" />
        </video>
      </div>
    </div>
  );
};

export default AAE1Cable;
