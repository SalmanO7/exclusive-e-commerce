import Image from "next/image";
import React from "react";
import HeroImg from "@/public/assets/heroImg.png";
import AppleIcon from "@/public/assets/appleIcon.png";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center ">
        <div className=" hidden md:flex justify-around items-center ">
          <div className="flex flex-col items-start justify-start md:text-[12px]  xl:text-base gap-3">
            <p className="flex justify-between items-center md:gap-[56px] lg:gap-7 xl:gap-10 gap-16">
              Woman’s Fashion
              <span>
                <RiArrowDropRightLine className="text-3xl " />
              </span>
            </p>
            <p className=" flex justify-between items-center md:gap-[70px] lg:gap-12 xl:gap-[70px] ">
              Men’s Fashion
              <span>
                <RiArrowDropRightLine className="  text-3xl" />
              </span>
            </p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby’s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>
          <div className="w-[1px]  border border-[customBlack] h-[370px] mx-4 mb-6"></div>
        </div>
        <div className="xl:p-8">
          <div className="bg-black text-white flex justify-center items-center px-12">
            <div className="flex flex-col justify-start items-start gap-4 py-2">
              <div className="flex justify-center items-center gap-2 xl:gap-4 ">
                <Image
                  src={AppleIcon}
                  alt="Apple Icon"
                  className="max-w-[20px] xl:w-[40px] "
                />
                <div className="text-[10px] sm:text-sm">iPhone 14 Series</div>
              </div>

              <div className="text-base text-balance sm:text-lg xl:text-4xl 2xl:text-5xl font-semibold">
                Up to 10% off Voucher
              </div>
              <div className="flex justify-center items-center gap-2">
                <Link
                  href="#"
                  className="border-b-2 text-[8px] sm:text-sm md:text-base"
                >
                  Shop Now
                </Link>
                <IoIosArrowRoundForward className="text-3xl" />
              </div>
            </div>
            <div className="w-[full] sm:max-w-[300px] md:max-w-[270px] lg:max-w-[400px] xl:max-w-[500px] py-2">
              <Image src={HeroImg} alt="Hero Img" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
