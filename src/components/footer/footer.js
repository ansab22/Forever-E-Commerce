import { assets } from "@/assets/assets";
import React from "react";

function footer() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between  gap-4 sm:my-10 sm:mt-40 my-5 mt-20">
        <div className="w-full sm:w-[60%]">
          <a href="/">
            <img className="sm:w-[30%] w-36" src={assets.logo} alt="LOGO" />
          </a>
          <p className="text-gray-500 pt-2 leading-5 text-xs sm:text-sm md:text-sm lg:text-xl sm:leading-6 w-full md:w-3/4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-full sm:w-[20%]">
          <p className="text-gray-600 text-sm sm:text-sm md:text-sm lg:text-xl font-semibold">
            COMPANY
          </p>
          <ul className="sm:mt-7 mt-4 flex flex-col sm:gap-2  gap-1 text-sm sm:text-sm md:text-[16px] text-gray-500 cursor-pointer">
            <li className="hover:text-black">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-black">
              <a href="/about">About Us</a>
            </li>
            <li className="hover:text-black">Delivery</li>
            <li className="hover:text-black">Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full sm:w-[20%]">
          <p className="text-gray-600 text-sm sm:text-sm md:text-sm lg:text-xl font-semibold">
            GET IN TOUCH
          </p>
          <ul className="sm:mt-7 mt-4 flex flex-col sm:gap-2  gap-1 text-sm sm:text-sm md:text-[16px] text-gray-500 cursor-pointer ">
            <li className="hover:text-black">9-82387327-1</li>
            <li className="hover:text-black">
              <a href="https://trisagesolutions.com/">
                info@trisagesolution.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center py-2 md:py-5 sm:text-sm md:text-sm lg:text-sm text-[10px] text-gray-600">
          Copyright 2025 ©{" "}
          <a href="https://trisagesolutions.com/">TrisageSolutions.com</a> - All
          Right Reserved.
        </p>
      </div>
    </>
  );
}

export default footer;
