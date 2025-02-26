import React from "react";
import Title from "../title/title";
import { assets } from "@/assets/assets";
function aboutUs() {
  return (
    <>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
        <div className="flex flex-col sm:flex-row gap-2 pt-6">
          <div className=" w-full sm:w-1/2">
            <img
              src={assets.about_img}
              alt=""
              className=" w-full sm:w-[90%] cursor-pointer "
            />
          </div>
          <div className="w-full sm:w-1/2 text-left justify-center flex flex-col gap-3 lg:gap-5">
            <p className="lg:text-[16px] text-[12px] sm:leading-6 leading-4  text-gray-600 font-medium">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="lg:text-[16px] text-[12px] sm:sm:leading-6 leading-4   text-gray-600">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <p className="lg:text-[16px] text-[12px] sm:sm:leading-6 leading-3   font-black">
              Our Mission
            </p>
            <p className="lg:text-[16px] text-[12px] sm:sm:leading-6 leading-4   text-gray-600">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default aboutUs;
