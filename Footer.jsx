import React from "react";
import logo from "./images/logo.svg";
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import facebook from './images/facebook.svg'

export default function Footer() {
  return (
    <div className="w-full h-[246px] pl-[145px] mt-20 flex">
      <div>
        <ul>
          <li className="flex">
            <img className=" pt[19px]" src={logo} alt="bu yerda rasm bor" />
            <h1 className="font-poppins text-[30px] pl-4 font-bold text-[#173a56]">
              Product
            </h1>
          </li>
          <li>
            <ul className="flex mt-[24px]">
              <li>
                <img src={instagram} alt="" />
              </li>
              <li className="mr-7 ml-7">
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={facebook} alt="" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="ml-[160px]">
        <ul>
          <li className="mb-3">
            <a href="#" className="font-bold">
              Resource
            </a>
          </li>
          <li className="mb-3">
            <a href="#">About Us</a>
          </li>
          <li className="mb-3">
            <a href="#">Blog</a>
          </li>
          <li className="mb-3">
            <a href="#">Contact</a>
          </li>
          <li className="mb-3">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="ml-[160px]">
        <ul>
          <li className="mb-3">
            <a href="#" className="font-bold">
              Legal Stuff
            </a>
          </li>
          <li className="mb-3">
            <a href="#">Disclaimer</a>
          </li>
          <li className="mb-3">
            <a href="#">Financing</a>
          </li>
          <li className="mb-3">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="mb-3">
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
      <div className="ml-24">
        <p className="text-2xl w-[280px]">
          knowing you're always on the best energy deal.
        </p>
        <div>
          <input
            type="text"
            className="w-[325px] h-[48px] border-[2px] mt-[30px] mb-5"
          />
        </div>
        <button className="w-[131px] h-10 bg-[#02897a] text-white">Sign Now</button>
      </div>
    </div>
  );
}
