import React from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import orangeColor from "@/public/assets/orngeColor.png";
import Image from "next/image";
import { FiSmartphone } from "react-icons/fi";
import { FaComputer } from "react-icons/fa6";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { PiHeadphonesLight } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";

const HeroCategory = () => {
  return (
    <div className="pt-16">
      <div>
        <div className="flex items-center px-2 sm:px-5 md:px-10">
          <Image src={orangeColor} alt="Today Sales" width={20} height={40} />
          <h1 className="text-[#DB4444] text-xl font-semibold">Categories</h1>
        </div>
        <div className="flex justify-between items-center px-5 md:px-10 lg:my-4 my-2">
          <div className="flex justify-center lg:text-xl lg:gap-10 2xl:gap-20 items-center ">
            <div>
              <h1 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold">
                Browse By Category
              </h1>
            </div>
          </div>
          <div className="flex justify-around items-center  gap-2 mr-[-10px]">
            <div className="bg-gray-100 rounded-full p-2">
              <HiArrowSmallLeft className="text-xl xl:text-3xl" />
            </div>
            <div className="bg-gray-100 rounded-full p-2">
              <HiArrowSmallRight className="text-xl xl:text-3xl " />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-16 px-10 pt-16">
        <div className="flex flex-col justify-center items-center gap-5  hover:text-white hover:bg-[#DB4444] hover:border-[#DB4444] border border-black py-5 shadow-xl">
          <FiSmartphone className="text-3xl" />
          <p className="text-base lg:text-xl">Phones</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5  hover:text-white hover:bg-[#DB4444] hover:border-[#DB4444] border border-black py-5 shadow-xl">
          <FaComputer className="text-3xl" />
          <p className="text-base lg:text-xl">Computers</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5  hover:text-white hover:bg-[#DB4444] hover:border-[#DB4444] border border-black py-5 shadow-xl">
          <IoWatchOutline className="text-3xl" />
          <p className="text-base lg:text-xl">SmartWatch</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5  hover:text-white hover:bg-[#DB4444] hover:border-[#DB4444] border border-black py-5 shadow-xl">
          <CiCamera className="text-3xl" />
          <p className="text-base lg:text-xl">Camera</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5  hover:text-white hover:bg-[#DB4444] hover:border-[#DB4444] border border-black py-5 shadow-xl">
          <PiHeadphonesLight className="text-3xl" />
          <p className="text-base lg:text-xl">HeadPhones</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5  hover:text-white hover:bg-[#DB4444] hover:border-[#DB4444] border border-black py-5 shadow-xl">
          <LuGamepad className="text-3xl" />
          <p className="text-base lg:text-xl">Gaming</p>
        </div>
      </div>
      <div className="border-b py-10"></div>
    </div>
  );
};

export default HeroCategory;
