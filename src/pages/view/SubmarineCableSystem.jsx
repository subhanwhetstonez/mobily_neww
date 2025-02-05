import React from "react";

const SubmarineCableSystem = () => {
  return (
    <div className="bg-[#edf7ff]">
      <div className="flex justify-center mt-[-40px] z-0">
        <video autoPlay loop muted playsInline width={"1000px"}>
          <source src="/pages/013.mp4" />
        </video>
      </div>
      <div className="flex w-full justify-between px-[5%] items-center">
        <div>
          <p className="text-[36px] text-[#005FA6] font-[700]">
            Submarine Cable <br /> Systems
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex bg-[#E274381A] py-[1%] px-[3%] rounded-[8px] items-center gap-[10px]">
            <div className="w-[50px] h-[50px] bg-[#E27438] rounded-[8%]"></div>
            <p className="text-[#E27438] text-[16px] font-[700]">AAE1 Cable</p>
          </div>
          <div className="flex bg-[#81C2E51A] py-[1%] px-[3%] rounded-[8px] items-center gap-[10px]">
            <div className="w-[50px] h-[50px] bg-[#81C2E5] rounded-[8%]"></div>
            <p className="text-[#81C2E5] text-[1.3vw] font-[700]">Africa1</p>
          </div>
          <div className="flex bg-[#62B9441A] py-[1%] px-[3%] rounded-[8px] items-center gap-[10px]">
            <div className="w-[50px] h-[50px] bg-[#62B944] rounded-[8%]"></div>
            <p className="text-[#62B944] text-[16px] font-[700]">
              TGN-Eurasia Cable
            </p>
          </div>
          <div className="flex bg-[#B7B4CE1A] py-[1%] px-[3%] rounded-[8px] items-center gap-[10px]">
            <div className="w-[50px] h-[50px] bg-[#9E9AC0] rounded-[8%]"></div>
            <p className="text-[#9E9AC0] text-[16px] font-[700]">SMW6</p>
          </div>
          <div className="flex bg-[#BFDEAA1A] py-[1%] px-[3%] rounded-[8px] items-center gap-[10px]">
            <div className="w-[50px] h-[50px] bg-[#9EC385] rounded-[8%]"></div>
            <p className="text-[#9EC385] text-[16px] font-[700]">
              TGN-Gulf Cable
            </p>
          </div>
          <div className="flex bg-[#845EC21A] py-[1%] px-[3%] rounded-[8px] items-center gap-[10px]">
            <div className="w-[50px] h-[50px] bg-[#845EC2] rounded-[8%]"></div>
            <p className="text-[#845EC2] text-[16px] font-[700]">RCN</p>
          </div>
          <div className="flex col-span-2 bg-[#121E631A] py-[1%] px-[1.4%] rounded-[8px] items-center gap-[10px]">
            <div className="w-[50px] h-[50px] bg-[#121E63] rounded-[8%]"></div>
            <p className="text-[#121E63] text-[16px] font-[700]">
              Mobily New Cable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmarineCableSystem;
