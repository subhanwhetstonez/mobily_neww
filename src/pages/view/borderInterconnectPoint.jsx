import React from "react";

const BorderPage = () => {
  return (
    <div>
      <div className=" w-[100%] font-bold flex flex-col p-[3%] relative">
        <div className="text-[#005FA6] text-[35px] mb-2">
          Terrestrial & Cross Borders
        </div>
        <div
          className="text-[#005FA6] w-[300px] h-[60px] bg-[#FFFFFF] text-[20px] font-semibold 
        flex items-center justify-center mb-4"
        >
          Border Interconnect Point
        </div>
        <div className="text-[#005FA6] text-[34px] mb-8">
          KSA Terrestrial Crossing
        </div>
      </div>
      <div className="flex justify-center mt-[-120px] z-0">
        <video autoPlay loop muted playsInline width={"700px"}>
          <source src="/pages/001.mp4" />
        </video>
      </div>
    </div>
  );
};

export default BorderPage;
