import React from "react";

const MobileCable = () => {
  return (
    <div>
      <div className="absolute flex flex-col gap-14 px-[4vw] pt-[6vw]">
        <div>
          <p className="text-[#005FA6] text-[32px] font-[700] ">
            Mobily New Cable
          </p>
        </div>
        <div className="grid gap-6 ">
          <p className="text-[#005FA6] text-[20px] font-[700] ">
            Mobily’s new subsea <br /> crossing the Red Sea
          </p>
          <p className="text-[#001424] text-[14px] font-[400] ">
            The first Saudi subsea cable <br /> connecting Saudi Arabia and{" "}
            <br /> Egypt through the Red Sea
          </p>
          <p className="text-[#001424] text-[14px] font-[400] ">
            Connecting Asia and Africa and <br /> opening the way to Europe
          </p>
          <p className="text-[#001424] text-[14px] font-[400] ">
            Providing new connection <br /> routes to meet customer needs <br />{" "}
            inside and outside KSA
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <video autoPlay loop muted playsInline width={"700px"}>
          <source src="/pages/005.mp4" />
        </video>
      </div>
    </div>
  );
};

export default MobileCable;
