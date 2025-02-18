import React from "react";

function hero() {
  return (
    <>
      <div className="flex flex-col sm:flex-row border border-gray-400 ">
        {/* hero left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="cursor-pointer font-semibold text-sm md:text-base transform hover:scale-105 transition-transform duration-300">
                SHOP NOW
              </p>
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
        {/* hero right side */}
        <img className="w-full sm:w-1/2" src={`/images/hero_img.png`} alt="" />
      </div>
    </>
  );
}

export default hero;
