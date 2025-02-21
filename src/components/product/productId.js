import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/components/context/shopContext";

function ProductId({ slug }) {
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (slug && products) {
      const product = products.find((item) => item._id === slug);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      }
    }
  }, [slug, products]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-col">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product Image ${index + 1}`}
              />
            ))}
          </div>
          <img src={image} alt="Main Product" className="w-full" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{productData.name}</h1>
          <p className="text-gray-700">{productData.description}</p>
          <p className="text-lg font-semibold">${productData.price}</p>
          {/* Add more product details here */}
        </div>
      </div>
    </div>
  );
}

export default ProductId;
