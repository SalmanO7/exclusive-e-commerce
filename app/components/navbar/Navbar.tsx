import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="w-full ">
      <div className="w-full bg-black text-white flex justify-around items-center px-[10px] md:pl-[20%] py-3">
        <h4 className="text-[10px] md:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="font-bold pl-3">ShopNow</span>
        </h4>
        <h4 className="flex justify-center items-center text-sm md:text-base">
          English
          <span>
            <MdKeyboardArrowDown className="text-2xl" />
          </span>
        </h4>
      </div>

      <nav className="flex justify-around items-center  py-7 pt-12">
        <div className="text-2xl font-semibold">Exclusive</div>
        <ul className="hidden md:flex justify-center items-center gap-8 md:text-base xl:text-lg text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Contact</li>
          <li>About</li>

          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
        <div className="flex justify-around items-center gap-10">
          <div className="flex justify-center items-center bg-gray-100 px-2">
            <input
              type="text"
              className=" p-2  focus:outline-none bg-gray-100 "
              placeholder="What are you looking for? "
            />
            <IoIosSearch className="text-3xl" />
          </div>
          <div className="text-black flex justify-center items-center gap-5 text-3xl">
            <IoMdHeartEmpty />
            <IoCartOutline />
          </div>
        </div>
      </nav>
      <div className="border border-[customBlack]"></div>
    </header>
  );
};

export default Navbar;
