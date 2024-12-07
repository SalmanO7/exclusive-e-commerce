import Image from "next/image";
import React from "react";
import LCDImg from "@/public/assets/led.png";
import GamePadImg from "@/public/assets/GamePad.png";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pb-32">
      <div className="bg-white w-full max-w-[1200px] px-5">
        <div className="flex justify-start items-center gap-1 py-12">
          <Link href="/" className="text-gray-400">
            Home
          </Link>
          <span> / </span>
          <span className="font-semibold"> Cart</span>
        </div>

        <table className="w-full table-auto  text-sm md:text-base">
          <thead>
            <tr className="text-gray-700 border-none shadow-sm">
              <th className="p-2 md:pr-20">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center shadow-sm">
              <td className="p-2 flex items-center justify-center md:justify-start">
                <Image src={LCDImg} width={60} height={60} alt="LCD Monitor" />
                <span className="ml-2 md:ml-4 text-[12px] sm:text-sm md:text-base">
                  LCD Monitor
                </span>
              </td>
              <td className="p-2">$650</td>
              <td className="p-2">
                <input
                  type="number"
                  defaultValue="1"
                  className="w-12 text-center border border-gray-300 rounded"
                />
              </td>
              <td className="p-2">$650</td>
            </tr>

            <tr className="text-center shadow-sm">
              <td className="p-2 flex items-center justify-center md:justify-start">
                <Image src={GamePadImg} width={60} height={60} alt="GamePad" />
                <span className="ml-2 text-[12px] sm:text-sm md:text-base md:ml-4">
                  HI Gamepad
                </span>
              </td>
              <td className="p-2">$550</td>
              <td className="p-2">
                <input
                  type="number"
                  defaultValue="2"
                  className="w-12 text-center border border-gray-300 rounded"
                />
              </td>
              <td className="p-2">$1100</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <button className="border-2 text-black px-4 py-2 rounded hover:bg-[#DB4444] hover:text-white w-full md:w-auto">
            Return to Shop
          </button>
          <button className="border-2 text-black px-4 py-2 rounded hover:bg-[#DB4444] hover:text-white w-full md:w-auto">
            Update Cart
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mt-8 gap-6">
          <div className="w-full md:w-1/2 flex justify-start items-center gap-6">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-[50%] border border-gray-300 rounded p-2 "
            />
            <button className="bg-[#DB4444] text-white px-4 py-2 rounded hover:bg-white hover:text-[#DB4444] hover:border hover:border-[#DB4444] w-200px md:w-auto">
              Apply Coupon
            </button>
          </div>

          <div className="w-full mt-10 md:pt-0 md:w-1/3 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="border-b-2 mb-[2px] "></div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="border-b-2  mb-[2px] "></div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>$1750</span>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4 hover:bg-red-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
