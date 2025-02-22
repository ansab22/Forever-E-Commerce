import { createContext, useState } from "react";
import { products } from "@/assets/assets";

export const ShopContext = createContext();

const shopContextProvider = (props) => {
  const currency = "$";
  const delivery_free = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const value = {
    products,
    currency,
    delivery_free,
    products,
    currency,
    delivery_free,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default shopContextProvider;
