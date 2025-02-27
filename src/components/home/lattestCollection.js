import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "@/components/title/title";
import ProductItem from "@/components/productItem/productItem";

function lattestCollection() {
  const { products } = useContext(ShopContext);
  const [lattestProducts, setLattestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLattestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST "} text2={"COLLECTIONS"} />
          <p className="w-full m-auto text-[10px] sm:text-[16px] md:text-[18px] text-gray-600 leading-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            perspiciatis.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {lattestProducts.map((item, index) => (
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

export default lattestCollection;
