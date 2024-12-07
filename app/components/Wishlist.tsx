import Image from "next/image";
import HandBagImg from "@/public/assets/handBag.png";
import RadioSongImg from "@/public/assets/radioSongs.png";
import GamePagImg from "@/public/assets/game.png";
import HoodieImg from "@/public/assets/greenHodie.png";
import { FaTrash } from "react-icons/fa";
import LaptopImg from "@/public/assets/laptop.png";
import LCDImg from "@/public/assets/led.png";
import GamePadImg from "@/public/assets/GamePad.png";
import KeyBoardImg from "@/public/assets/keyboard.png";
import { FaStar } from "react-icons/fa";
import OrangeColor from "@/public/assets/orngeColor.png";

const products = [
  {
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: HandBagImg,
  },
  {
    name: "RGB Liquid CPU Cooler",
    price: 1960,
    image: RadioSongImg,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: GamePagImg,
  },
  {
    name: "Quilted Satin Jacket",
    price: 750,
    image: HoodieImg,
  },
];

const NewProducts = [
  {
    name: "ASUF Gaming Laptop",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: LaptopImg,
  },
  {
    name: "LED Gaming Monitr",
    price: 1150,
    image: LCDImg,
  },
  {
    name: "HV-G92 GamePad",
    price: 560,
    new: "New",
    image: GamePadImg,
  },
  {
    name: "Al-900 Wired Keyboard",
    price: 260,
    image: KeyBoardImg,
  },
];

const Wishlist = () => {
  return (
    <div className="py-4">
      <section className="px-5 sm:px-10 md:px-[60px] lg:px-[50px] xl:px-[75px] 2xl:px-[100px]">
        <div className="flex justify-between items-center mb-4 pt-8 pb-16">
          <h2 className="text-xl ">Wishlist ({products.length})</h2>
          <button className="px-4 py-2 bg-black text-white rounded">
            Move All To Bag
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-4">
          {products.map((product, index) => (
            <div key={index}>
              <div className="bg-gray-100 overflow-hidden relative">
                <div className="flex justify-between items-center px-3 pt-3 ">
                  <div>
                    {product.discount && (
                      <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  <FaTrash />
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full max-h-[70%] sm:h-52 p-5"
                />
                <button className="w-full bg-black text-white py-2 mt-2 rounded">
                  Add To Cart
                </button>
              </div>

              <h3 className="text-sm md:text-base font-semibold py-2">
                {product.name}
              </h3>
              <div className="flex justify-start items-center gap-3">
                <div className="text-red-500 font-bold">${product.price}</div>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through text-sm">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 px-5 sm:px-10 md:px-[60px] lg:px-[50px] xl:px-[75px] 2xl:px-[100px] pb-28">
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-start items-center gap-3 py-3">
            <Image src={OrangeColor} alt="Today Sales" width={20} height={40} />
            <h1 className="text-[#DB4444] text-2xl font-semibold">
              Just For You
            </h1>
          </div>
          <button className="px-4 py-2 border rounded">See All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-4">
          {NewProducts.map((product, index) => (
            <div key={index}>
              <div className="bg-gray-100 overflow-hidden relative">
                <div className="flex justify-between items-center px-3 pt-3 ">
                  <div>
                    <div>
                      {product.discount && (
                        <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                          -{product.discount}%
                        </span>
                      )}
                    </div>
                    <div>
                      {product.new && (
                        <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">
                          {product.new}
                        </span>
                      )}
                    </div>
                  </div>
                  <FaTrash />
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full max-h-[70%] sm:h-52 p-5"
                />
                <button className="w-full bg-black text-white py-2 mt-2 rounded">
                  Add To Cart
                </button>
              </div>

              <h3 className="text-sm md:text-base font-semibold py-2">
                {product.name}
              </h3>
              <div className="flex flex-col justify-center items-start g">
                <div className="flex justify-center items-center gap-2">
                  <div className="text-red-500 font-bold">${product.price}</div>
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through text-sm">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
                <div className="text-yellow-400 text-xl flex justify-center items-center py-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
