import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full h-[200px] border-t-2 border-blue-900 py-5 flex justify-center">
      <div className=" w-[95%] h-full grid grid-rows-2">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <div>Content</div>
          <div className=" bg-blue-900 text-white py-2 px-4 rounded-tl-lg rounded-br-lg">
            Register Now
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <p className=" text-gray-500">@Copyright 2023. All Right Reserved.</p>
          <div className="flex gap-4">
            <div className=" w-[40px] h-[40px] text-white rounded-full flex items-center justify-center bg-blue-900">
              <FaFacebookF />
            </div>
            <div className=" w-[40px] h-[40px] text-white rounded-full flex items-center justify-center bg-blue-900">
              <FaTwitter />
            </div>
            <div className=" w-[40px] h-[40px] text-white rounded-full flex items-center justify-center bg-blue-900">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
