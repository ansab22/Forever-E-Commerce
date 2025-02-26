import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/components/context/shopContext";
import { assets } from "@/assets/assets";
import RelatedProducts from "@/components/relatedProducts/relatedProducts";
import { toast } from "react-toastify";

function productId({ slug }) {
  const { products, currency, addToCart, cartItems } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

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

  // Calculate the total number of items in the cart
  const cartItemCount = Object.values(cartItems || {}).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image?.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product Image ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Main Product" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex flex-col items-start gap-1 mt-2">
            <div className="flex items-center gap-1">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes?.map((item, index) => (
                  <button
                    onClick={() => setSelectedSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === selectedSize ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (!selectedSize) {
                      toast.error(
                        "Please select a size before adding to cart!"
                      );
                      return;
                    }
                    addToCart(productData._id, selectedSize);
                    toast.success("Product added to cart successfully!");
                  }}
                  className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
                >
                  ADD TO CART
                </button>
              </div>
              <hr className="mt-8 sm:w-full" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash On delivery is availble on this product.</p>
                <p>Easy return and exchange policy within 7 Days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {/* Tab Headers */}
        <div className="flex border-b">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "description"
                ? "border-b-2 border-gray-700 text-Black-500"
                : "text-gray-500 hover:text-black-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "reviews"
                ? "border-b-2 border-gray-700 text-black-500"
                : "text-gray-500 hover:text-black-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "description" && (
            <div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                culpa accusamus illo magnam corporis cum explicabo recusandae
                consectetur facilis, optio voluptatem natus dolorum ea
                consequuntur, quidem nemo aspernatur in earum? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Porro culpa accusamus
                illo magnam corporis cum explicabo recusandae consectetur
                facilis, optio voluptatem natus dolorum ea consequuntur, quidem
                nemo aspernatur in earum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Porro culpa accusamus illo magnam corporis cum
                explicabo recusandae consectetur facilis, optio voluptatem natus
                dolorum ea consequuntur, quidem nemo aspernatur in earum?
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <p className="text-gray-700 text-xs sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                culpa accusamus illo magnam corporis cum explicabo recusandae
                consectetur facilis, optio voluptatem natus dolorum ea
                consequuntur, quidem nemo aspernatur in earum? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Porro culpa accusamus
                illo magnam corporis cum explicabo recusandae consectetur
                facilis, optio voluptatem natus dolorum ea consequuntur, quidem
                nemo aspernatur in earum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Porro culpa accusamus illo magnam corporis cum
                explicabo recusandae consectetur facilis, optio voluptatem natus
                dolorum ea consequuntur, quidem nemo aspernatur in earum? sit
                amet consectetur adipisicing elit. Porro culpa accusamus illo
                magnam corporis cum explicabo recusandae consectetur facilis,
                optio voluptatem natus dolorum ea consequuntur, quidem nemo
                aspernatur in earum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Porro culpa accusamus illo magnam corporis cum
                explicabo recusandae consectetur facilis, optio voluptatem natus
                dolorum ea consequuntur, quidem nemo aspernatur in earum?
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      ></RelatedProducts>
    </div>
  );
}

export default productId;
