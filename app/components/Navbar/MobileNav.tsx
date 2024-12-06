import React from "react";
import Link from "next/link";


const MobileNav = () => {
  return (
    <div>
      <div className="flex border-b border-gray-300 pb-2 items-center justify-center space-x-[24px] text-[16px] text-[#b5b2b2] md:hidden">
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
    </div>
  );
};

export default MobileNav;
