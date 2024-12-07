import Image from "next/image";
import React from "react";
import orangeColor from "@/public/assets/orngeColor.png";
// import GirlBlackBgImg from "@/public/assets/womanBlackbg.png";
// import GamePS4Img from "@/public/assets/psGaming.png";
// import PoderImg from "@/public/assets/poder.png";
// import PerfumImg from "@/public/assets/perfume.png";



const HeroLastSection = () => {
  return (
    <div className="pt-20 pb-20 w-full px-5 sm:px-10 md:px-[60px] lg:px-[50px] xl:px-[75px] 2xl:px-[100px]">
      <div className="flex items-center px-2 sm:px-5 md:px-10">
        <Image src={orangeColor} alt="Today Sales" width={20} height={40} />
        <h1 className="text-[#DB4444] text-xl  font-semibold">Featured</h1>
      </div>
      <div className="flex justify-between items-center px-5 md:px-10 lg:my-4 my-2">
        <div>
          <h1 className="text-xl md:text-xl lg:text-xl xl:text-2xl font-bold">
          New Arrival
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 ">
        <div
          className="w-full lg:w-[48%] h-[500px] relative rounded-lg bg-cover bg-center shadow-md"
          style={{ backgroundImage: "url('/assets/psGaming.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
            <h2 className="text-xl font-semibold">PlayStation 5</h2>
            <p className="text-sm mb-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className=" text-white px-4 py-2 rounded">Shop Now</button>
          </div>
        </div>

        <div className="w-full lg:w-[48%] flex flex-col gap-6">
          <div
            className="h-56 relative rounded-lg bg-cover bg-center shadow-md"
            style={{ backgroundImage: "url('/assets/womanBlackbg.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl font-semibold">Women's Collections</h2>
              <p className="text-sm mb-4">
                Featured women's collections that give you another vibe.
              </p>
              <button className=" text-white px-4 py-2 rounded">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center sm:flex-row gap-6">
            <div
              className="w-full sm:w-1/2 h-64 relative rounded-lg bg-cover bg-center shadow-md"
              style={{ backgroundImage: "url('/assets/poder.png')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 text-white">
                <h2 className="text-lg font-semibold">Speakers</h2>
                <p className="text-sm mb-4">Amazon wireless speakers.</p>
                <button className=" text-white px-4 py-2 rounded">
                  Shop Now
                </button>
              </div>
            </div>

            <div
              className="w-full sm:w-1/2 h-64 relative rounded-lg bg-cover bg-center shadow-md "
              style={{ backgroundImage: "url('/assets/perfume.png')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 text-white">
                <h2 className="text-lg font-semibold">Perfume</h2>
                <p className="text-sm mb-4">GUCCI INTENSE OUD EDP.</p>
                <button className=" text-white px-4 py-2 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HeroLastSection;
