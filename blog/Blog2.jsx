import React from 'react'
import img1 from '../images/icon.svg'
import img2 from "../images/icon1.svg";
import img3 from "../images/icon2.svg";
import img4 from "../images/icon3.svg";

export default function Blog2() {
  return (
    <div className="w-full h-[543px] pt-[114px]">
      <div className="w-full text-center">
        <h1 className="font-poppins text-3xl font-bold">
          Product was Built Specifically <br />
          for You
        </h1>
      </div>

      <div className="flex ml-[350px] mt-[114px]">
        <div className="mr-[46px]">
          <img src={img1} alt="" className="mb-[30px]" />
          <p className="font-poppins text-2xl font-bold mb-[13px]">
            First click tests
          </p>
          <p className="w-[240px]">While most people enjoy casino gambling,</p>
        </div>
        <div className="mr-[46px]">
          <img src={img2} alt="" className="mb-[30px]" />
          <p className="font-poppins text-2xl font-bold mb-[13px]">
            Design surveys
          </p>
          <p className="w-[240px]">
            Sports betting, lottery and bingo playing for the fun
          </p>
        </div>
        <div className="mr-[46px]">
          <img src={img3} alt="" className="mb-[30px]" />
          <p className="font-poppins text-2xl font-bold mb-[13px]">
            Preference tests
          </p>
          <p className="w-[240px]">The Myspace page defines the individual.</p>
        </div>
        <div>
          <img src={img4} alt="" className="mb-[30px]" />
          <p className="font-poppins text-2xl font-bold mb-[13px]">
            Five second tests
          </p>
          <p className="w-[240px]">
            Personal choices and the overall personality of the person.{" "}
          </p>
        </div>
      </div>
      <div className='text-center mt-[48px] text-white'>
        <button className='w-[175px] h-[53px] bg-[#02897a]'>
            Sign Now
        </button>
      </div>
    </div>
  );
}
