import React from "react";
import Image, { StaticImageData } from "next/image";
import OrangeColor from "@/public/assets/orngeColor.png";
import RadioImg from "@/public/assets/radio.png";
import TimeImg from "@/public/assets/time.png";
import DogFoodImg from "@/public/assets/DogFood.png";
import CameraImg from "@/public/assets/camera.png";
import LaptopImg from "@/public/assets/laptop.png";
import ShoesImg from "@/public/assets/shoes.png";
import Star3 from "@/public/assets/fourStar75.png";
import Star5 from "@/public/assets/fiveStar.png";
import Star4 from "@/public/assets/fourHalfStar99.png";
import Star6 from "@/public/assets/fourHalfStart.png";
import { CiHeart } from "react-icons/ci";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import CarImg from "@/public/assets/car.png";
import GamePad from "@/public/assets/game.png";
import GreenHodie from "@/public/assets/greenHodie.png";
import PinkCortImg from "@/public/assets/hodie.png";

const Data: {
  id: number;
  img: StaticImageData;
  title: string;
  priceReal: number;
  stars: StaticImageData;
}[] = [
  {
    id: 1,
    img: DogFoodImg,
    title: "Beed Dry Dog Food",
    priceReal: 100,
    stars: Star3,
  },
  {
    id: 2,
    img: CameraImg,
    title: "CANON EOS DSLR Camera",
    priceReal: 360,
    stars: Star5,
  },
  {
    id: 3,
    img: LaptopImg,
    title: "FHD Gamig Laptop",
    priceReal: 700,
    stars: Star4,
  },
  {
    id: 4,
    img: ShoesImg,
    title: "Jr. Zoom Soccer",
    priceReal: 360,
    stars: Star6,
  },
];

const HeroProductsExplore = () => {
  return (
    <>
      <div className="bg-black text-white border-2 border-blue-500 grid grid-cols-1 md:grid-cols-2 place-items-center py-4">
        <div className="flex flex-col justify-start items-start pl-12 gap-5 py-9 md:py-2">
          <p className="text-[#00FF66]">Categories</p>
          <h1 className="text-4xl font-semibold">
            Enhance Your Music Experience
          </h1>
          <Image src={TimeImg} alt="Time Img" className="max-w-[50%]" />
          <button className="px-7 py-3 bg-[#00FF66] rounded-md">Buy Now</button>
        </div>
        <div>
          <Image
            src={RadioImg}
            alt="Radio Img"
            className="shadow-lg px-3 py-2 pt-8 md:pt-0"
          />
        </div>
      </div>

      <div className="pt-20 pb-9">
        <div className="flex items-center px-2 sm:px-5 md:px-10">
          <Image src={OrangeColor} alt="Today Sales" width={20} height={40} />
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
          <div>
            <div className="bg-gray-100">
              <div className="flex justify-between items-center px-2">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="bg-white p-1 lg:p-2 rounded-full">
                    <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-xl" />
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                    <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-3">
                <Image
                  src={DogFoodImg}
                  alt="Dog Food"
                  className="w-[120px] mt-[-50px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base  font-bold py-1 md:py-2">
                Breed Dry Dog Food
              </h2>
              <div className="flex justify-start items-center gap-5">
                <p className="text-[#DB4444] font-bold ">$100</p>
                <Image
                  src={Star4}
                  alt="Stars"
                  className="max-w-[50%] sm:max-w-[40%]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-100">
              <div className="flex justify-between items-center px-2">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="bg-white p-1 lg:p-2 rounded-full">
                    <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-xl" />
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                    <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-3">
                <Image
                  src={CameraImg}
                  alt="Dog Food"
                  className="w-[120px] mt-[-10px] h-[150px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold py-1 md:py-2">
                CANON EOS DSLR Camera
              </h2>
              <div className="flex justify-start items-center gap-5">
                <p className="text-[#DB4444] font-bold">$360</p>
                <Image
                  src={Star5}
                  alt="Stars"
                  className="max-w-[50%] sm:max-w-[40%]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-100">
              <div className="flex justify-between items-center px-2">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="bg-white p-1 lg:p-2 rounded-full">
                    <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-xl" />
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                    <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-3">
                <Image
                  src={LaptopImg}
                  alt="Dog Food"
                  className="w-[120px] mt-[-30px] h-[170px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base  font-bold py-1 md:py-2">
                ASUS Gaming Laptop
              </h2>
              <div className="flex justify-start items-center gap-5">
                <p className="text-[#DB4444] font-bold">$700</p>
                <Image
                  src={Star3}
                  alt="Stars"
                  className="max-w-[50%] sm:max-w-[40%]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-100">
              <div className="flex justify-between items-center px-2">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="bg-white p-1 lg:p-2 rounded-full">
                    <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-xl" />
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                    <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-3">
                <Image
                  src={ShoesImg}
                  alt="Dog Food"
                  className="w-[120px] mt-[-10px] h-[150px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base  font-bold py-1 md:py-2">
                Jr. Zoom Soccer
              </h2>
              <div className="flex justify-start items-center gap-5">
                <p className="text-[#DB4444] font-bold">$500</p>
                <Image
                  src={Star5}
                  alt="Stars"
                  className="max-w-[50%] sm:max-w-[40%]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-100">
              <div className="flex justify-between items-center px-2">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="bg-white p-1 lg:p-2 rounded-full">
                    <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-xl" />
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                    <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-3">
                <Image
                  src={CarImg}
                  alt="Kids Electric Car"
                  className="w-[120px] mt-[-10px] h-[150px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold py-1 md:py-2">
                Kids Electric Car
              </h2>
              <div className="flex justify-start items-center gap-5">
                <p className="text-[#DB4444] font-bold">$960</p>
                <Image
                  src={Star5}
                  alt="Stars"
                  className="max-w-[50%] sm:max-w-[40%]"
                />
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="border-4 border-black rounded-full">
                  <div className="bg-red-600 rounded-full w-3 h-3"></div>
                </div>
                <div className="bg-red-600 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-100">
              <div className="flex justify-between items-center px-2">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="bg-white p-1 lg:p-2 rounded-full">
                    <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-xl" />
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                    <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-3">
                <Image
                  src={GamePad}
                  alt="GP11 Shooter USB Gamepad"
                  className="w-[120px] mt-[-10px] h-[150px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold py-1 md:py-2">
                GP11 USB Gamepad
              </h2>
              <div className="flex justify-start items-center gap-5">
                <p className="text-[#DB4444] font-bold">$660</p>
                <Image
                  src={Star5}
                  alt="Stars"
                  className="max-w-[50%] sm:max-w-[40%]"
                />
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="border-4 border-black rounded-full">
                  <div className="bg-[#333] rounded-full w-3 h-3"></div>
                </div>
                <div className="bg-red-600 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-100">
              <div className="flex justify-between items-center px-2">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="bg-white p-1 lg:p-2 rounded-full">
                    <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-xl" />
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                    <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-3">
                <Image
                  src={GreenHodie}
                  alt="Quilted Satin Jacket"
                  className="w-[120px] mt-[-10px] h-[150px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold py-1 md:py-2">
                Quilted Satin Jacket
              </h2>
              <div className="flex justify-start items-center gap-5">
                <p className="text-[#DB4444] font-bold">$960</p>
                <Image
                  src={Star5}
                  alt="Stars"
                  className="max-w-[50%] sm:max-w-[40%]"
                />
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="border-4 border-black rounded-full">
                  <div className="bg-green-700 rounded-full w-3 h-3"></div>
                </div>
                <div className="bg-red-600 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-100">
              <div className="flex justify-between items-center px-2">
                <div></div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="bg-white p-1 lg:p-2 rounded-full">
                    <CiHeart className="text-sm md:text-xl lg:text-xl xl:text-xl" />
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white p-1 rounded-full">
                    <IoEyeOutline className="text-sm md:text-xl lg:text-xl xl:text-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-3">
                <Image
                  src={PinkCortImg}
                  alt="The North Coat"
                  className="w-[120px] mt-[-10px] h-[150px]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold py-1 md:py-2">
                The North Coat
              </h2>
              <div className="flex justify-start items-center gap-5">
                <p className="text-[#DB4444] font-bold">$460</p>
                <Image
                  src={Star5}
                  alt="Stars"
                  className="max-w-[50%] sm:max-w-[40%]"
                />
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="border-4 border-black rounded-full">
                  <div className="bg-pink-800 rounded-full w-3 h-3"></div>
                </div>
                <div className="bg-red-600 rounded-full w-3 h-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroProductsExplore;
