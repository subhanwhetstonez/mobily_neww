import React from "react";

const RCN = () => {
  return (
    <div className="w-full grid grid-cols-3">
      <div className="w-full col-span-1 gap-10 px-[4vw] pt-[4vw]">
        <div>
          <p className="text-[#005FA6] text-[32px] font-[700]">RCN</p>
        </div>
        <div className="grid gap-6">
          <p className="text-[#001424] text-[18px] font-[400]">
            The RCN Cable was established <br /> through an agreement in 2010,
            <br /> is a Terrestrial Cable that <br />
            connects the United Arab
            <br /> Emirates (UAE), Kingdom of
            <br /> Saudi Arabia (KSA), Jordan, Syria,
            <br /> and Turkey.
          </p>
          <p className="text-[#001424] text-[18px] font-[400]">
            In 2015, the segments of the
            <br /> cable in the UAE, KSA, and
            <br /> Jordan were partially put into
            <br /> service.
          </p>
        </div>
      </div>
      {/* Image Positioned at Bottom-Right */}
      <div className="col-span-2 ">
        <div className="flex justify-end">
          <img
            src="/pages/rcnmap.svg"
            className="max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] h-[100vh] "
          />
        </div>
      </div>
    </div>
    // <div className="w-full relative h-[100vh]">
    //   <div className="w-full flex flex-col gap-10 px-[4vw] pt-[4vw]">
    //     <div>
    //       <p className="text-[#005FA6] text-[32px] font-[700]">RCN</p>
    //     </div>
    //     <div className="grid gap-6">
    //       <p className="text-[#001424] text-[18px] font-[400]">
    //         The RCN Cable was established <br /> through an agreement in 2010,
    //         <br /> is a Terrestrial Cable that <br />
    //         connects the United Arab
    //         <br /> Emirates (UAE), Kingdom of
    //         <br /> Saudi Arabia (KSA), Jordan, Syria,
    //         <br /> and Turkey.
    //       </p>
    //       <p className="text-[#001424] text-[18px] font-[400]">
    //         In 2015, the segments of the
    //         <br /> cable in the UAE, KSA, and
    //         <br /> Jordan were partially put into
    //         <br /> service.
    //       </p>
    //     </div>
    //   </div>
    //   {/* Image Positioned at Bottom-Right */}
    //   <div className="absolute top-0 right-0 h-[100vh]">
    //     <img
    //       src="/pages/rcnmap.svg"
    //       className="max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] h-[100vh] "
    //     />
    //   </div>
    // </div>
  );
};

export default RCN;
