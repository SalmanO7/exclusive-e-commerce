import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

const Contact = () => {
  return (
    <div className=" min-h-screen">
      {/* Breadcrumb */}
      <div className="px-[8%] flex justify-start items-center gap-1 py-12">
        <Link href="/" className="text-gray-400">
          Home
        </Link>
        <span> / </span>
        <span className="font-semibold">Contact us</span>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-10 px-4 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-28 md:gap-3">
          {/* Left Section */}
          <div className="max-[full] xl:w-1/2">
            {/* Call To Us */}
            <div className="bg-white shadow-md p-6 ">
              <div className="flex items-center gap-4">
                <div className="bg-[#DB4444] rounded-full p-2 text-white text-3xl">
                  <FiPhone />
                </div>
                <h2 className="text-lg md:text-xl font-bold">Call To Us</h2>
              </div>
              <p className="mt-4 text-sm md:text-base">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-800 font-semibold mt-2 text-sm md:text-base">
                Phone: +880161112222
              </p>
            </div>

            <div className="px-20 bg-white">
              <div className="border-b border-2"></div>
            </div>

            {/* Write To Us */}
            <div className="bg-white shadow-md p-6 ">
              <div className="flex items-center gap-4">
                <div className="bg-[#DB4444] rounded-full p-2 text-white text-3xl">
                  <IoMailOutline />
                </div>
                <h2 className="text-lg md:text-xl font-bold">Write To Us</h2>
              </div>
              <p className=" mt-4 text-sm md:text-base">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-800  mt-2 md:text-[15px] ">
                Emails: customer@exclusive.com
              </p>
              <p className="text-gray-800  text-sm md:text-[15px]">
                support@exclusive.com
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:col-span-2"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4 text-sm"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white py-3 px-6 rounded-lg w-full hover:bg-red-600 transition text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
