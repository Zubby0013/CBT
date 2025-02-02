import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" flex justify-center w-full h-[60px] bg-blue-900 text-white items-center">
      <div className=" w-[95%] flex justify-between items-center">
        <div>STEM CBT</div>
        <div className=" flex justify-between w-[300px]">
          <Link href="/">
            <div>Home</div>
          </Link>
          <Link href="/features">
            <div>Features</div>
          </Link>
          <Link href="/about">
            <div>About</div>
          </Link>
          <Link href="/contact">
            <div>Contact</div>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/register">
            <button className=" bg-white text-black py-1 px-3 rounded-lg">
              SignUp
            </button>
          </Link>
          <Link href="/signin">
            <button className=" py-1 px-2">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
