import React from "react";
import PhoneCartImg from "@/public/assets/phone.png";
import Image from "next/image";

const LogOut = () => {
  return (
    <div className="flex justify-stretch gap-28 pt-20">
      <div className="w-[50%]">
        <Image src={PhoneCartImg} alt="Phone Cart Img" />
      </div>
      <div className="flex flex-col pt-11">
        <div className="flex flex-col gap-2 py-8">
          <h1 className="text-4xl">Log in to Exclusive</h1>
          <p className="">Enter your details below</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-7">
          <div>
            <input
              type="text"
              placeholder="Email or Phone number"
              className="focus:outline-none w-[280px]"
            />
            <div className="border"></div>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="focus:outline-none w-[280px]"
            />
            <div className="border"></div>
          </div>
        </div>
        <div className="flex justify-between gap-4 w-full my-8">
          <button className="bg-[#DB4444] text-white rounded-md p-1 py-2 px-8">
            Log in
          </button>
          <button className="text-[#DB4444]">Forget Password?</button>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
