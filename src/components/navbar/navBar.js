import React, { useState } from "react";
import Link from "next/link";
function navBar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium bg-white">
        <img src={`/images/logo.png`} alt="" className="w-36" />
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <li className="text-[16px] text-gray-600 active:text-black cursor-pointer  ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[16px] text-gray-600 active:text-black cursor-pointer ">
            <Link href="/">Collection</Link>
          </li>
          <li className="text-[16px] text-gray-600 active:text-black cursor-pointer ">
            <Link href="/">About</Link>
          </li>
          <li className="text-[16px] text-gray-600 active:text-black cursor-pointer ">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <img src={`/images/search_icon.png`} alt="" className="w-[18px]" />
          <div className="group relative">
            <img
              src={`/images/profile_icon.png`}
              alt=""
              className="w-[18px] "
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Order</p>
                <p className="cursor-pointer hover:text-black">Log out</p>
              </div>
            </div>
          </div>
          <div className="group relative">
            <a href="">
              <img src={`/images/cart_icon.png`} alt="" className="w-[18px]" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                10
              </p>
            </a>
          </div>
          <img
            onClick={() => setVisible(true)}
            src={`/images/menu_icon.png`}
            alt=""
            className="w-5 cursor-pointer sm:hidden"
          />
        </div>

        {/* Create Header for Small Devices */}

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-1000 ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 p-3"
            >
              <img
                onClick={() => setVisible(true)}
                src={`/images/cross_icon.png`}
                alt=""
                className="h-4 cursor-pointer"
              />
              <p>Close</p>
            </div>
            <ul className="sm:flex gap-5 text-sm text-gray-700 p-3">
              <li
                onClick={() => setVisible(false)}
                className="text-[18px] text-gray-800  active:text-white active:bg-black cursor-pointer py-2  "
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setVisible(false)}
                className="text-[18px] text-gray-800  active:text-white active:bg-black cursor-pointer py-2 "
              >
                <Link href="/">Collection</Link>
              </li>
              <li
                onClick={() => setVisible(false)}
                className="text-[18px] text-gray-800 active:text-white active:bg-black  cursor-pointer py-2  "
              >
                <Link href="/">About</Link>
              </li>
              <li
                onClick={() => setVisible(false)}
                className="text-[18px] text-gray-800  active:text-white active:bg-black cursor-pointer py-2 "
              >
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default navBar;
