import "@/styles/globals.css";
import NavBar from "@/components/navbar/navBar";
import ShopContextProvider from "@/components/context/shopContext";

export default function App({ Component, pageProps }) {
  return (
    <ShopContextProvider>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </ShopContextProvider>
  );
}
