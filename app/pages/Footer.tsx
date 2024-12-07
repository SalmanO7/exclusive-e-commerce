import Image from "next/image";
import React from "react";
import QRImage from "@/public/assets/Qrcode 1.png";
import GooglePlayImg from "@/public/assets/googlePlay.png";
import AppStoreImg from "@/public/assets/appstore.png";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-14 px-5 sm:px-10 md:px-[60px] lg:px-[50px] xl:px-[75px] 2xl:px-[100px]">
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-5 text-sm">
        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="text-xl font-semibold">Exclusive</h2>
          <h4 className="text-[16px]">Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="flex justify-center items-center rounded-md py-1 border border-white text-white bg-black">
            <input
              type="text"
              placeholder="Enter Your email"
              className="w-4/6 text-white bg-black px-[2px] md:py-[5px]   focus:outline-none "
            />
            <TfiArrowCircleRight className="text-white text-base md:text-xl" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h2 className="text-base font-semibold">Support</h2>
          <p>111 bijoy sarani, Karachi, Pakistan</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-8888-9999</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h2 className="text-base font-semibold">Account</h2>
          <p>Login / Ragister</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>SHop</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h2 className="text-base font-semibold">Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h2 className="text-base font-semibold">Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="flex justify-center items-center gap-1">
            <Image src={QRImage} alt="QR img" width={60} />
            <div className="flex flex-col justify-center items-start">
              <Image src={GooglePlayImg} width={90} alt="Google Img" />
              <Image src={AppStoreImg} width={90} alt="App Store img" />
            </div>
          </div>
          <div className=" flex justify-start items-center gap-4 text-2xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
