import Image, { StaticImageData } from "next/image";
import React from "react";
import orangeColor from "@/public/assets/orngeColor.png";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import GamePadImg from "@/public/assets/GamePad.png";
import Star88 from "@/public/assets/FiveStar88.png";
import Star75 from "@/public/assets/fourStar75.png";
import Star99 from "@/public/assets/fourHalfStar99.png";
import KeyboardImg from "@/public/assets/keyboard.png";
import LCDImg from "@/public/assets/led.png";
import ChairImg from "@/public/assets/chair.png";
import StarHalf99 from "@/public/assets/fourHalfStar99.png";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Data: {
  id: number;
  img: StaticImageData;
  title: string;
  priceReal: number;
  stars: StaticImageData;
  priceFake?: string;
  discount: string;
}[] = [
  {
    id: 1,
    img: GamePadImg,
    title: "HAVIT HV-G92 Gamepad",
    priceFake: "$160",
    priceReal: 120,
    stars: Star88,
    discount: "- 40%",
  },
  {
    id: 2,
    img: KeyboardImg,
    title: "AK-900 Wired Keyboard",
    priceFake: "$1160",
    priceReal: 960,
    stars: Star75,
    discount: "- 35%",
  },
  {
    id: 3,
    img: LCDImg,
    title: "IPS LCD Gaming Monitor",
    priceFake: "$400",
    priceReal: 370,
    stars: Star99,
    discount: "- 30%",
  },
  {
    id: 4,
    img: ChairImg,
    title: "S-Series Comfort Chair ",
    priceFake: "$400",
    priceReal: 375,
    stars: StarHalf99,
    discount: "- 25%",
  },
];

const HeroProducts = () => {
  return (
    <div className="pt-20">
      <div className="flex items-center px-2 sm:px-5 md:px-10">
        <Image src={orangeColor} alt="Today Sales" width={20} height={40} />
        <h1 className="text-[#DB4444] text-2xl font-semibold">Today’s</h1>
      </div>
      <div className="flex justify-between items-center px-5 md:px-10 lg:my-4 my-2">
        <div className="flex justify-center lg:text-xl lg:gap-10 2xl:gap-20 items-center ">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-xl xl:text-3xl font-bold">
              Flash Sales
            </h1>
          </div>
          <div className="lg:flex justify-center items-center gap-5 text-base lg:text-xl 2xl:text-2xl font-bold px-4 hidden">
            <div className="flex flex-col justify-center items-center  text-[12px] xl:text-xl 2xl:text-2xl">
              Days <span className="text-base xl:text-xl 2xl:text-3xl">03</span>
            </div>
            <span className="text-3xl text-[#DB4445] font-bold">:</span>
            <div className="flex flex-col justify-center items-center  text-[12px] xl:text-xl 2xl:text-2xl">
              Hours{" "}
              <span className="text-base xl:text-xl 2xl:text-3xl">23</span>
            </div>
            <span className="text-3xl text-[#DB4444] font-bold">:</span>
            <div className="flex flex-col justify-center items-center  text-[12px] xl:text-xl 2xl:text-2xl">
              Minutes{" "}
              <span className="text-base xl:text-xl 2xl:text-3xl">19</span>
            </div>
            <span className="text-3xl text-[#DB4444] font-bold">:</span>
            <div className="flex flex-col justify-center items-center  text-[12px] xl:text-xl 2xl:text-2xl">
              Seconds{" "}
              <span className="text-base xl:text-xl 2xl:text-3xl">56</span>
            </div>
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

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-7 px-2 2xl:px-10 my-10">
        {Data.map((card) => {
          return (
            <div key={card.id} className="my-10">
              <div className="flex flex-col bg-gray-100 pt-1 md:px-2 px-2 xl:px-4 ">
              {/* sm:h-[250px] md:h-[360px] lg:h-[300px] 2xl:h-[380px] */}
                <div className="flex justify-between items-center ">
                  <div>
                    <p className="bg-[#DB4444] text-[10px] 2xl:text-base text-white p-2 rounded-md flex justify-center">
                      {card.discount}
                    </p>
                  </div>
                  <div className="">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="bg-white p-1 lg:p-2 rounded-full">
                        <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                      </div>
                      <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                        <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-2">
                  <Image
                    src={card.img}
                    alt={card.title}
                    className="px-12 md:px-5 mt-[-20px]"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-base md:text-xl font-bold py-1 md:py-2">
                  {card.title}
                </h2>
                <div className="flex justify-start items-center gap-3">
                  <p className="text-[#DB4444] font-bold">{card.priceReal}</p>
                  <p className="text-gray-600 line-through">{card.priceFake}</p>
                </div>
                <div className="flex justify-start items-center">
                  <Image
                    src={card.stars}
                    alt={card.title}
                    className="max-w-[50%] sm:max-w-[40%]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center py-3">
        <button className="bg-[#DB4444] text-white text-sm md:text-xl px-12 py-3 rounded-[5px]">
          view All Products
        </button>
      </div>

      <div
        className="border-b py-10 
      "
      ></div>
    </div>
  );
};

export default HeroProducts;
