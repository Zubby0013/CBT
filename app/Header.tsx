"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const headerChange = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerChange);
    return () => {
      window.removeEventListener("scroll", headerChange);
    };
  }, []);

  return (
    <div
      className={`fixed flex justify-center w-full h-[60px] items-center transition-all duration-500 ${
        scroll
          ? "bg-blue-900 text-white shadow-md"
          : "bg-transparent text-black border-b"
      }`}
    >
      <div className="w-[95%] flex justify-between items-center">
        <div className="text-lg font-bold">STEM CBT</div>

        <div className="flex justify-between w-[300px]">
          <Link href="/">
            <div className="cursor-pointer">Home</div>
          </Link>
          <Link href="/features">
            <div className="cursor-pointer">Features</div>
          </Link>
          <Link href="/about">
            <div className="cursor-pointer">About</div>
          </Link>
          <Link href="/contact">
            <div className="cursor-pointer">Contact</div>
          </Link>
        </div>

        <div className="flex gap-4">
          <Link href="/auth/register">
            <button
              className={`${
                scroll ? "bg-white " : "bg-blue-900 text-white"
              } text-black py-1 px-3 rounded-lg hover:bg-gray-300 transition`}
            >
              Sign Up
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="border border-white py-1 px-3 rounded-lg hover:bg-white hover:text-black transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
