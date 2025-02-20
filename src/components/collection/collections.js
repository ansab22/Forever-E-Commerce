import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "@/assets/assets";
import ProductItem from "@/components/productItem/productItem";
import Title from "@/components/title/title";

function collections() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Filter by category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Filter by subCategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Update the filtered products
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    setFilterProducts(products); // Initialize with all products
  }, [products]);

  useEffect(() => {
    applyFilter(); // Apply filters whenever category or subCategory changes
  }, [category, subCategory]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Section */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>
          <div
            className={`border border-gray-300 sm:block pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }`}
          >
            <p className="mb-3 text-sm font-semibold">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-4 accent-black cursor-pointer"
                  value="Men"
                  type="checkbox"
                  onChange={toggleCategory}
                  checked={category.includes("Men")}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-4 accent-black cursor-pointer"
                  value="Women"
                  type="checkbox"
                  onChange={toggleCategory}
                  checked={category.includes("Women")}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-4 accent-black cursor-pointer"
                  value="Kids"
                  type="checkbox"
                  onChange={toggleCategory}
                  checked={category.includes("Kids")}
                />
                Kids
              </p>
            </div>
          </div>
          <div
            className={`border border-gray-300 sm:block pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            }`}
          >
            <p className="mb-3 text-sm font-semibold">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-4 accent-black cursor-pointer"
                  value="Topwear"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  checked={subCategory.includes("Topwear")}
                />
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-4 accent-black cursor-pointer"
                  value="Bottomwear"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  checked={subCategory.includes("Bottomwear")}
                />
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-4 accent-black cursor-pointer"
                  value="Winterwear"
                  type="checkbox"
                  onChange={toggleSubCategory}
                  checked={subCategory.includes("Winterwear")}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL "} text2={"COLLECTIONS"} />
            {/* SORT OPTIONS */}
            <select className="border-[1px] w-[42%] sm:w-[18%] md:w-[40%] lg:w-[26%] border-gray-300 sm:text-sm text-xs px-0 sm:px-1">
              <option value="relavent">Sort by: Relavent</option>
              <option value="Low-high">Sort by: Low-High</option>
              <option value="high-low">Sort by: High-Low</option>
            </select>
          </div>
          {/* Map ALL Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default collections;
