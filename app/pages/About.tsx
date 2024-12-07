import Image from "next/image";
import WomanImg from "@/public/assets/ladies.png";
import AboutImg1 from "@/public/assets/aboutimg1.png";
import AboutImg2 from "@/public/assets/aboutimg2.png";
import AboutImg3 from "@/public/assets/aboutimg3.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi";
import { GiShop } from "react-icons/gi";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" py-12 px-5 sm:px-10 md:px-[60px] lg:px-[50px] xl:px-[75px] 2xl:px-[100px]">
        {/* Breadcrumb */}
        <div className="mb-6 text-gray-500 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          / <span>About</span>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-6 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-gray-700 mb-4">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-gray-700">
              Exclusive has more than 1 million products to offer, growing very
              fast. Exclusive offers a diverse assortment in categories ranging
              from consumer products.
            </p>
          </div>

          {/* Image */}
          <div>
            <Image
              src={WomanImg} // Replace with the actual image path
              alt="Shopping Women"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

          <div className="flex justify-center items-center flex-col hover:bg-red-600 border hover:border-red-500 border-black hover:text-white  p-4 text-center rounded-sm">
            <GiShop  className="text-3xl my-3"/>
            <h2 className="text-2xl font-bold hover:text-white">10.5k</h2>
            <p className="hover:text-white">Sellers active on our site</p>
          </div>
          <div className="flex justify-center items-center flex-col hover:bg-red-600 border hover:border-red-500 border-black hover:text-white p-4 text-center rounded-sm">
            <HiCurrencyDollar  className="text-3xl my-3 hover:text-white"/>
            <h2 className="text-2xl font-bold hover:text-white">33k</h2>
            <p className=" hover:text-white">Monthly Product Sale</p>
          </div>
          <div className="flex justify-center items-center flex-col hover:bg-red-600 border hover:border-red-500 border-black hover:text-white p-4 text-center rounded-sm">
            <RiShoppingBag3Fill  className="text-3xl my-3"/>
            <h2 className="text-2xl font-bold ">45.5k</h2>
            <p className="">Customers active on our site</p>
          </div>
          <div className="flex justify-center items-center flex-col  hover:bg-red-600 border hover:border-red-500 border-black hover:text-white p-4 text-center rounded-sm">
            <FaSackDollar className="text-3xl my-3" />
            <h2 className="text-2xl font-bold ">25k</h2>
            <p className="">Annual gross sales</p>
          </div>
        </div>

        <div className="mt-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-5 ">
            <div className="text-start">
              <div className="bg-gray-100 py-2 p-10">
                <Image
                  src={AboutImg1}
                  alt="Tom Cruise"
                  width={220}
                  height={250}
                  className="mx-auto "
                />
              </div>
              <h3 className="text-xl font-bold mt-4">Tom Cruise</h3>
              <p className="text-gray-600">Founder & Chairman</p>
              <div className="flex justify-start text-lg mt-2 space-x-4 text-gray-600">
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>

            <div className="text-start">
              <div className="bg-gray-100 py-2 p-10">
                <Image
                  src={AboutImg2}
                  alt="Emma Watson"
                  width={260}
                  height={200}
                  className="mx-auto "
                />
              </div>
              <h3 className="text-xl font-bold mt-4">Emma Watson</h3>
              <p className="text-gray-600">Managing Director</p>
              <div className="flex justify-start text-lg mt-2 space-x-4 text-gray-600">
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="text-start">
              <div className="bg-gray-100 py-2 p-5">
                <Image
                  src={AboutImg3} // Replace with the actual image path
                  alt="Will Smith"
                  width={300}
                  height={300}
                  className="mx-auto "
                />
              </div>
              <h3 className="text-xl font-bold mt-4">Will Smith</h3>
              <p className="text-gray-600">Product Designer</p>
              <div className="flex justify-start text-lg mt-2 space-x-4 text-gray-600">
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
