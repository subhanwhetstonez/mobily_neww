import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const LandingStation = () => {
  return (
    <div>
      <div className="relative w-[100%] font-bold flex flex-col p-[5%]  z-10">
        <div className="text-[#005FA6] text-[32px] mb-4">Landing Stations</div>

        <AnimatedDiv
          title={"4 Diverse "}
          subtitle={"Landing station in the kingdom"}
        />
      </div>
      <div className="flex justify-center mt-[-50px] z-0">
        <video autoPlay loop muted playsInline width={"800px"}>
          <source src="/pages/012.mp4" />
        </video>
      </div>
    </div>
  );
};

export default LandingStation;
