import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

function productItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <a href={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="font-medium text-sm">
        {currency}
        {price}
      </p>
    </a>
  );
}

export default productItem;
