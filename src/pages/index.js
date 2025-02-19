import React from "react";
import HeroBanner from "@/components/home/heroBanner";
import LatestCollection from "@/components/home/lattestCollection";
import BestSeller from "@/components/home/bestSeller";
import OurPolicy from "@/components/home/ourPolicy";
import NewsLetter from "@/components/home/newsLetter";
function index() {
  return (
    <>
      <HeroBanner />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </>
  );
}

export default index;
