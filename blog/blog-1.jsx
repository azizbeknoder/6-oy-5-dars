import React from "react";
import amico from "../images/amico.svg";

export default function Blog1() {
  return (
    <div className="ml-[159px]  flex ">
      <div className="mt-[145px]">
        <h1 className="text-3xl font-bold font-poppins mb-[18px]">
          Work at the speed <br /> of thought
        </h1>
        <p className=" w-[458px] text-lg mb-[46px]">
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div>
          <button className="bg-[#02897a] w-[175px] h-[53px] mr-[30px] text-white">
            Get started
          </button>
          <a href="#" className="text-[#02897a]">
            Watch the video
          </a>
        </div>
      </div>
      <img src={amico} alt="" className="w-[600px] h-[555px] mr-20 mt-[25px] ml-24" />
    </div>
  );
}
