import React from "react";

const EcoSystem = () => {
  return (
    <div className="bg-[#EDF7FF]  w-[100%] font-bold flex flex-col">
      <div className="text-[#005FA6] text-[34px] px-[3%] py-[2%]">
        Equinix Jeddah Internet Exchange
      </div>
      <div
        className="text-[#005FA6] w-[290px] h-[70px] bg-[#FFFFFF] text-[24px] font-semibold 
                flex items-center justify-center mb-12 mx-[3%] "
      >
        Exchange Ecosystem
      </div>
      <div className="flex justify-center gap-4">
        <div className="grid grid-cols-3 gap-4 self-baseline">
          <div className="  ">
            <img
              src="/pages/ecosystem/content.svg"
              className=""
              width={"250px"}
            />
          </div>
          <div className=" ">
            <img
              src="/pages/ecosystem/network.svg"
              className=""
              width={"250px"}
            />
          </div>
          <div className=" ">
            <img
              src="/pages/ecosystem/cloud.svg"
              className=""
              width={"250px"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              src="/pages/ecosystem/enterprise.svg"
              className=""
              width={"250px"}
            />
          </div>
          <div className=" ">
            <img
              src="/pages/ecosystem/financial.svg"
              className=""
              width={"250px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoSystem;
