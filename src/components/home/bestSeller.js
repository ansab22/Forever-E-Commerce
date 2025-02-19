import React, { useContext, useEffect, useState } from "react";
import Title from "../title/title";
import { ShopContext } from "../context/shopContext";
import ProductItem from "@/components/productItem/productItem";
function bestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  });
  return (
    <>
      <div className="my-10">
        <div className="text-center text 3xl py-8">
          <Title text1={"BEST "} text2={"SELLERS"} />
          <p className="w-full m-auto text-[10px] sm:text-[16px] md:text-[18px] text-gray-600 leading-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            perspiciatis.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default bestSeller;
