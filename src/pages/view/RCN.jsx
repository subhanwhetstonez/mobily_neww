import React from "react";

const RCN = () => {
  return (
    <div>
      <div className="absolute flex flex-col gap-10 px-[4vw] pt-[6vw] ">
        <div>
          <p className="text-[#005FA6] text-[32px] font-[700] ">RCN</p>
        </div>
        <div className="grid gap-6 ">
          <p className="text-[#001424] text-[18px] font-[400] ">
            The RCN Cable was established <br /> through an agreement in 2010,
            <br /> is a Terrestrial Cable that <br />
            connects the United Arab
            <br /> Emirates (UAE), Kingdom of
            <br /> Saudi Arabia (KSA), Jordan, Syria,
            <br /> and Turkey.
          </p>
          <p className="text-[#001424] text-[18px] font-[400] ">
            In 2015, the segments of the
            <br /> cable in the UAE, KSA, and
            <br /> Jordan were partially put into
            <br /> service.
          </p>
        </div>
      </div>
      <div className=" flex justify-end">
        <img src="/pages/rcnmap.svg" width={"41.7%"} />
      </div>
    </div>
  );
};

export default RCN;
