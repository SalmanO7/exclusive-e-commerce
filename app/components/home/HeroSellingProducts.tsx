import Image, { StaticImageData } from "next/image";
import React from "react";
import orangeColor from "@/public/assets/orngeColor.png";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import HoodieImg from "@/public/assets/hodie.png";
import GamePadImg from "@/public/assets/game.png";
import ChairImg from "@/public/assets/chair.png";
import TableImg from "@/public/assets/table.png";
import Star99 from "@/public/assets/fourHalfStar99.png";
import StarHalf99 from "@/public/assets/fourHalfStar99.png";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Star88 from "@/public/assets/FiveStar88.png";
import Star75 from "@/public/assets/fourStar75.png";


const Data: {
  id: number;
  img: StaticImageData;
  title: string;
  priceReal: number;
  stars: StaticImageData;
  priceFake?: string;
  isTrue?: boolean;
}[] = [
  {
    id: 1,
    img: HoodieImg,
    title: "The north coat",
    priceFake: "$360",
    priceReal: 260,
    stars: StarHalf99,
  },
  {
    id: 2,
    img: GamePadImg,
    title: "Gucci duffle bag",
    priceFake: "$1160",
    priceReal: 960,
    stars: Star99,
  },
  {
    id: 3,
    img: ChairImg,
    title: "RGB liquid CPU Cooler",
    priceFake: "$170",
    priceReal: 160,
    stars: Star75,
    isTrue: true,
  },
  {
    id: 4,
    img: TableImg,
    title: "Small BookSelf",
    priceReal: 360,
    stars: Star88,
  },
];

const HeroSellingProducts = () => {
  return (
    <div className="pt-20 pb-9">
      <div className="flex items-center px-2 sm:px-5 md:px-10">
        <Image src={orangeColor} alt="Today Sales" width={20} height={40} />
        <h1 className="text-[#DB4444] text-2xl font-semibold">This Month</h1>
      </div>
      <div className="flex justify-between items-center px-5 md:px-10 lg:my-4 my-2">
        <div className="flex justify-center lg:text-xl lg:gap-10 2xl:gap-20 items-center ">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-xl xl:text-3xl font-bold">
              Best Selling Products
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

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-7 px-2 2xl:px-10 my-10">
        {Data.map((card) => {
          return (
            <div key={card.id} className="my-10">
              <div className="flex flex-col bg-gray-100 pt-1   md:px-2 px-2 xl:px-4 ">
                <div className="flex justify-between items-center">
                  <div> </div>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <div className="bg-white p-1 lg:p-2 rounded-full">
                      <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                      <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center pb-2 2xl:px-7 2xl:py-5">
                  <Image
                    src={card.img}
                    alt={card.title}
                    className="px-12 md:px-10 mt-[-50px]"
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
    </div>
  );
};

export default HeroSellingProducts;
