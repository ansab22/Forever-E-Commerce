import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "@/assets/assets";

function searchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Function to check the current path and update visibility
    const checkPath = () => {
      if (typeof window !== "undefined") {
        const pathname = window.location.pathname;
        if (pathname.includes("collections")) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    // Check the path when the component mounts
    checkPath();

    // Add an event listener for route changes
    window.addEventListener("popstate", checkPath);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", checkPath);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
}

export default searchBar;
