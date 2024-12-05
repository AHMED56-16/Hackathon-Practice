import Link from "next/link";
import React from "react";
import { poppins } from "@/app/fonts/font";
import {
  ChevronDownIcon,
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";

const Nav = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full h-[48px] bg-[#000000] text-[#FAFAFA] text-[14px]">
        <div className="h-full flex items-center justify-between px-4">
          {/* Empty Left Space */}
          <div className="w-[231px]"></div>

          {/* Center Section */}
          <div className="flex items-center justify-center flex-grow text-center">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis hidden md:flex">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span className="inline-block w-[8px]"></span>
              <Link
                className={`${poppins.className} font-semibold underline`}
                href={"#"}
              >
                Shop Now
              </Link>
            </p>
          </div>

          {/* Right Section */}
          <div className="w-[231px] flex justify-end items-center pr-4 md:pr-8 lg:pr-20">
            <p className="mr-1">English</p>
            <ChevronDownIcon className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Navbar */}

      <div className="bg-[#FFFFFF] border-b border-gray-300 h-[75px] flex items-center justify-center mt-[10px] px-[135px]">
        {/* Inner container */}
        <div className="w-[1170px] h-[38px] flex items-center justify-between">
          {/* Left Section: Logo */}
          <div
            className={`text-[24px] text-[#000000] font-bold ${poppins.className}`}
          >
            Exclusive
          </div>

          {/* Center Section: Nav Links */}
          <div className="hidden md:flex items-center space-x-[48px] text-[16px] text-[#b5b2b2]">
            <Link
              href="/"
              className="relative group text-[#b5b2b2] transition duration-300"
            >
              Home
              {/* Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="relative group text-[#b5b2b2] transition duration-300"
            >
              Contact
              {/* Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#"
              className="relative group text-[#b5b2b2] transition duration-300"
            >
              About
              {/* Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/signup"
              className="relative group text-[#b5b2b2] transition duration-300"
            >
              Sign Up
              {/* Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Section: Search Bar and Icons */}
          <div className="flex items-center space-x-[20px]">
            {/* Search Bar */}
            <div className="hidden w-[243px] h-[38px] lg:flex items-center bg-gray-100 px-3 py-1 rounded-md">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm w-48"
              />
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-[15px]">
              <HeartIcon className="w-6 h-6 text-black cursor-pointer" />
              <ShoppingCartIcon className="w-6 h-6 text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
