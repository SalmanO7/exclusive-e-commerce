"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          }    md:flex md:items-center absolute top-40 right-1 md:top-0 md:right-0 md:relative justify-around w-full md:w-auto   md:mt-0`}
        >
          <ul className="flex bg-white p-4  absolute text-sm right-[7%] sm:right-[10%] flex-col md:flex-row lg:text-base md:text-black md:right-0 md:relative md:flex justify-center items-center gap-3 md:gap-4 lg:gap-8 md:text-base xl:text-lg ">
            <li>
              <Link href="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleNavbar}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleNavbar}>
                About
              </Link>
            </li>

            <li>
              <Link href="/signup" onClick={toggleNavbar}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-around items-center gap-10">
          <div className="flex justify-center items-center md:bg-gray-100 px-2">
            <input
              type="text"
              className=" p-2  focus:outline-none bg-gray-100 hidden md:block"
              placeholder="What are you looking for? "
            />
            <IoIosSearch className="text-2xl md:text-3xl mr-[-40px] md:mr-0" />
          </div>
          <div className="text-black flex justify-center items-center gap-5 text-3xl">
            <Link href="/wishlist">
              <IoMdHeartEmpty className="text-2xl md:text-3xl" />
            </Link>
            <Link href="/cart">
              <IoCartOutline className="text-2xl md:text-3xl" />
            </Link>
            <div className="md:hidden flex justify-center items-center">
              <button onClick={toggleNavbar}>
                {isOpen ? (
                  <IoMdClose className="text-2xl md:text-3xl" />
                ) : (
                  <IoMenu className="text-2xl md:text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="border border-[customBlack]"></div>
    </header>
  );
};

export default Navbar;
