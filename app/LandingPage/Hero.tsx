"use client";
import React from "react";
import pic from "../../public/PHOTO-2024-11-16-12-50-12.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" w-full h-[85vh] flex justify-center items-center py-10">
      <div className=" w-[93%] h-full grid grid-cols-2 gap-8">
        <div className="bg-red-500 h-full col-span-1"></div>
        <div className=" h-full col-span-1">
          <Image
            src={pic}
            alt="My Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
