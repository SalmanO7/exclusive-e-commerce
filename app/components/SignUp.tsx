import React from "react";
import PhoneCartImg from "@/public/assets/phone.png";
import Image from "next/image";
import Link from "next/link";
const SignUp = () => {
  return (
    <div className="flex justify-stretch gap-28 pt-20">
      <div className="w-[50%]">
        <Image src={PhoneCartImg} alt="Phone Cart Img" />
      </div>
      <div className="flex flex-col pt-11">
        <div className="flex flex-col gap-2 py-8">
          <h1 className="text-4xl">Create an account</h1>
          <p className="">Enter your details below</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-7">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="focus:outline-none w-[280px]"
            />
            <div className="border"></div>
          </div>
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
        <div className="flex flex-col gap-4 w-full my-8">
          <button className="bg-[#DB4444] text-white rounded-md p-1 py-2">
            Create Account
          </button>
          <button className="border border-black  p-1 rounded-md py-2">
            Sign up with Google
          </button>
        </div>
        <div>
          <p className="text-sm  text-gray-600 text-center">
            Already have account?{" "}
            <Link href="/logout" className="border-b-2 text-black">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
