import React from "react";
import HeroSection from "../components/home/HeroSection";
import HeroProducts from "../components/home/HeroProducts";
import HeroCategory from "../components/home/HeroCategory";
import HeroSellingProducts from "../components/home/HeroSellingProducts";
import HeroProductsExplore from "../components/home/HeroProductsExplore";

const Home = () => {
  return (
    <>
      <div className="w-full sm:px-10 md:px-[60px] lg:px-[50px] xl:px-[70px] 2xl:px-[100px]">
        <HeroSection />
        <div className="px-5 sm:px-0">
          <HeroProducts />
          <HeroCategory />
          <HeroSellingProducts />
          <HeroProductsExplore />
        </div>
      </div>
    </>
  );
};

export default Home;
