import React from "react";
import Title from "../title/title";
function whychoose() {
  return (
    <>
      <div className="mt-8 sm:mt-[50px] pb-10 lg:pb-20">
        <Title text1={"Why "} text2={"Choose US"} />
        <div className="grid grid-cols-1 sm:grid-cols-3 pt-3 md:pt-10">
          <div className="flex flex-col  border border-gray-200 lg:p-[60px] p-6 gap-3">
            <h4 className="font-semibold text-[14px]">Quality Assurance:</h4>
            <p className=" sm:text-[14px] text-[12px] ">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="flex flex-col  border border-gray-200 lg:p-[60px] p-6 gap-3">
            <h4 className="font-semibold text-[14px]">Convenience:</h4>
            <p className=" sm:text-[14px] text-[12px] ">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="flex flex-col  border border-gray-200 lg:p-[60px] p-6 gap-3">
            <h4 className="font-semibold text-[14px]">
              Exceptional Customer Service:
            </h4>
            <p className=" sm:text-[14px] text-[12px] ">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default whychoose;
