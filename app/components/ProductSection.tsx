import GamePadSide1Img from "@/public/assets/gamPad1.png";
import GamePadSide2Img from "@/public/assets/gamPad2.png";
import GamePadSide3Img from "@/public/assets/gamPad3.png";
import GamePadImg from "@/public/assets/mainPad.png";
import RadioSongImg from "@/public/assets/radioSongs.png";
import GamePad2Img from "@/public/assets/GamePad.png";
import Star88 from "@/public/assets/FiveStar88.png";
import Star75 from "@/public/assets/fourStar75.png";
import Star99 from "@/public/assets/fourHalfStar99.png";
import KeyboardImg from "@/public/assets/keyboard.png";
import LCDImg from "@/public/assets/led.png";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import OrangeColor from "@/public/assets/orngeColor.png"

const Data = [
  {
    id: 1,
    img: GamePad2Img,
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
    img: RadioSongImg,
    title: "Liquid CPU Cooler",
    priceFake: "$400",
    priceReal: 370,
    stars: Star99,
    isRadio: false,
  },
];

const ProductPage = () => {
  return (
    <div className="p-4 md:p-10 bg-white min-h-screen">
      <nav className="text-sm text-gray-500 mb-6 py-10 md:pb-16">
        Account / Gaming /{" "}
        <span className="font-semibold text-gray-800">
          Havic HV G-92 Gamepad
        </span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 sm:gap-y-44 gap-8">
        <div className="grid grid-cols-4 gap-4 pt-10">
          <div className="flex flex-col gap-4">
            {[
              GamePadSide1Img,
              GamePadSide2Img,
              GamePadSide3Img,
              GamePadSide2Img,
            ].map((image, index) => (
              <div
                key={index}
                className="w-[100%] sm:w-[70%] mt-5 md:mt-10 lg:mt-8 h-24 border bg-gray-100 rounded-lg p-2 flex items-center justify-center hover:shadow-lg"
              >
                <Image src={image} alt={`GamePad Side ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="col-span-3 flex justify-center items-center">
            <div className="w-[400px] h-[300px] md:w-[500px] md:h-[400px] border bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src={GamePadImg} alt="Main GamePad" />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Havic HV G-92 Gamepad
          </h1>
          <p className="text-yellow-500 mb-2 flex items-center">
            ★★★★☆{" "}
            <span className="text-sm text-gray-500 ml-2">(150 Reviews)</span>
            <span className="ml-4 text-green-600 text-sm font-medium">
              In Stock
            </span>
          </p>
          <p className="text-2xl font-semibold text-gray-800 mb-6">$192.00</p>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble-free install & mess-free removal.
            Pressure-sensitive.
          </p>

          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Colours:</p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-red-500"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">Size:</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className="px-4 py-2 text-sm border rounded-md cursor-pointer hover:bg-gray-200"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col  lg:flex-row justify-start items-start lg:items-center gap-5 lg:gap-12">
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 flex justify-center items-center bg-gray-100 border rounded-md text-gray-600 hover:bg-gray-200">
                -
              </button>
              <div className="px-4 py-2 border rounded-md">2</div>
              <button className="w-8 h-8 flex justify-center items-center bg-gray-100 border rounded-md text-gray-600 hover:bg-gray-200">
                +
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-full md:w-auto px-6 lg:px-8 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                Buy Now
              </button>
              <button className="w-full md:w-auto px-6 py-3 border rounded-md hover:bg-gray-100">
                ❤️
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              🚚 <span className="text-sm">Free Delivery</span>
              <span className="text-gray-400 text-sm">
                Enter your postal code for Delivery Availability
              </span>
            </div>
            <div className="flex items-center gap-3">
              ↩️ <span className="text-sm">Free 30 Days Delivery Returns</span>
              <span className="text-gray-400 text-sm">Details</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center px-2 sm:px-5 ">
          <Image src={OrangeColor} alt="Today Sales" width={20} height={40} />
          <h1 className="text-[#DB4444] text-2xl font-semibold">Related Item</h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-7 px-2 2xl:px-10 my-10">
          {Data.map((card) => {
            return (
              <div key={card.id} className="my-10">
                <div className="flex flex-col bg-gray-100 pt-1 md:px-2 px-2 xl:px-4 ">
                  {/* sm:h-[250px] md:h-[360px] lg:h-[300px] 2xl:h-[380px] */}
                  <div className="flex justify-between items-center ">
                    <div>
                      <div></div>
                      {card.discount && (
                        <p className="bg-[#DB4444] text-[10px] 2xl:text-base text-white p-2 rounded-md flex justify-center">
                          {card.discount}
                        </p>
                      )}
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
                    {card.isRadio ? (
                      <Image
                        src={card.img}
                        alt={card.title}
                        className="px-12 md:px-5 mt-[-20px] "
                      />
                    ) : (
                      <Image
                        src={card.img}
                        alt={card.title}
                        className="px-12 md:px-5 mt-[-20px] h-[160px]"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <h2 className="text-base md:text-xl font-bold py-1 md:py-2">
                    {card.title}
                  </h2>
                  <div className="flex justify-start items-center gap-3">
                    <p className="text-[#DB4444] font-bold">{card.priceReal}</p>
                    <p className="text-gray-600 line-through">
                      {card.priceFake}
                    </p>
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
    </div>
  );
};

export default ProductPage;
