import React from "react";

const InternetGateways = () => {
  return (
    <div>
      <div className="relative grid gap-10 pt-[6%] bg-[#edf7ff] z-10">
        <div className="px-[4%]">
          <p className="text-[#005FA6] font-[700] text-[2vw]">
            Internet Gateways
          </p>
        </div>
      </div>
      <div className="flex justify-center z-0">
        <video autoPlay loop muted playsInline width={"800px"}>
          <source src="/pages/014.mp4" />
        </video>
      </div>
    </div>
  );
};

export default InternetGateways;
