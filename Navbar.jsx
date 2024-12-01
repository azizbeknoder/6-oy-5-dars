import React from "react";
import logo from './images/logo.svg'

export default function Navbar() {
  return (
    <div className="w-full h-20  flex justify-between">
      <div className="flex">
        <img
          className="pl-[146px] pt[19px]"
          src={logo}
          alt="bu yerda rasm bor"
        />
        <h1 className="font-poppins text-[30px] pl-4 font-bold text-[#173a56]">
          Product
        </h1>
      </div>
      <div className="pr-[234px] flex mt-4">
        <ul className="flex pr-12 mt-3">
          <li>
            <a href="#" className="#a22343d pr-5 font-bold font-poppins">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="#a22343d pr-5 font-poppins">
              Customers
            </a>
          </li>
          <li>
            <a href="#" className="#a22343d pr-5 font-poppins">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="#a22343d font-poppins">
              Resources
            </a>
          </li>
        </ul>
        <div className="">
          <button className="w-[102px] h-[43px] border-[#bcd0e5] rounded-lg border-[2px] size-4 font-poppins font-bold mr-4 ">
            Sign In
          </button>
          <button className="w-[102px] h-[43px] bg-[#02897a] rounded-lg border-[2px] size-4 font-poppins font-bold mr-4 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
