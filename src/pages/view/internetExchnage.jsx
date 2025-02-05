import React from "react";
import AnimatedDiv from "../components/AnimatedDiv";

const InternetExchange = () => {
  return (
    <div>
      <div className="relative  w-[100%] font-bold flex flex-col z-10">
        <div className="text-[#005FA6] text-[34px] px-[3%] pt-[2%]">
          Equinix Jeddah Internet Exchange
        </div>
        <div className="justify-between items-center p-[3%]">
          <div
            className="text-[#005FA6] w-[250px] h-[70px] bg-[#FFFFFF] text-[22px] font-semibold 
                flex items-center justify-center mb-4"
          >
            Internet Exchange
          </div>
          <div>
            <AnimatedDiv
              title={"Located at Mobily JED 1,  A neutral Data Center"}
            />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center mt-[-40px]">
        <video autoPlay loop muted playsInline width={"800px"}>
          <source src="/pages/002.mp4" />
        </video>
      </div>
    </div>
  );
};

export default InternetExchange;
