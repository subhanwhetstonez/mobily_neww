import React from "react";

const KSA = () => {
  return (
    <div className="relative w-[100%] font-bold flex flex-col p-[3%] z-10">
      <div className="text-[#005FA6] text-[32px] mb-4">
        Terrestrial & Cross Borders
      </div>
      <div
        className="text-[#005FA6] w-[218px] h-[70px] bg-[#FFFFFF] text-[22px] font-semibold 
                    flex items-center justify-center mb-4"
      >
        KSA Terrestrial
      </div>
      <div className="text-[#005FA6] text-[32px] mb-14 z-10">
        Saudi National Fiber Network
      </div>
      <div className="flex justify-center mt-[-100px] z-0">
        <video autoPlay loop muted playsInline width={"800px"}>
          <source src="/pages/010.mp4" />
        </video>
      </div>
    </div>
  );
};

export default KSA;
