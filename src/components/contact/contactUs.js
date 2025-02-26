import React from "react";
import Title from "../title/title";
import { assets } from "@/assets/assets";
function contactUs() {
  return (
    <>
      <div className="pt-10 pb-20 border-t border-gray-300 text-center">
        <Title text1={"CONTACT "} text2={"US"} />
        <div className="sm:pt-10 pt-5 flex flex-col-reverse sm:flex-row gap-10">
          <div className="w-full sm:w-1/2">
            <img src={assets.contact_img} alt="" className="w-[100%] " />
          </div>
          <div className="w-full flex flex-col sm:w-1/2 text-left gap-4 sm:gap-6 sm:justify-center ">
            <h2 className=" text-[16px] md:text-xl text-gray-600 font-semibold">
              Our Store
            </h2>
            <p>
              54709 Willms Station
              <br />
              Suite 350, Washington, USA
            </p>
            <p>
              <a className="text-sm lg:text-lg cursor-pointer">
                Tel: (415) 555-0132
              </a>
              <br></br>
              <a className="text-sm lg:text-lg cursor-pointer">
                Email: admin@forever.com
              </a>
            </p>
            <h3 className="text-[16px] lg:text-xl text-gray-600 font-semibold">
              Careers at Forever
            </h3>
            <p>Learn more about our teams and job openings.</p>
            <a
              className="text-center text-sm lg:text-lg border border-gray-950 sm:p-3 p-3 w-[40%] lg:w-[35%] md:w-[50%] hover:bg-black hover:text-gray-50 transition-all duration-500"
              href=""
            >
              Explore Jobs
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default contactUs;
