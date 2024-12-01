import React from 'react'
import img1 from '../images/image1.png'
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";


export default function Blog7() {
  return (
    <div className="h-[556px] w-full  ml-[145px]">
      <p className="text-3xl font-bold mb-2">Contents Strategies</p>
      <p>
        We focus on ergonomics and meeting you where you work. It's only a
        keystroke away.{" "}
      </p>

      <div className='flex'>
        <div className="mt-[33px] mr-[32px]">
          <div>
            <img src={img1} alt="foto" className="" />
            <div className="pl-4 border-[2px] pt-4 w-[348px]">
              <p className="pb-4">
                By <span className="font-bold ">Wahid Ari</span> | 03 March 2019
              </p>
              <p className="font-bold text-2xl w-[294px]">
                Increasing Prosperity With Positive Thinking
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[33px] mr-[32px]">
          <div>
            <img src={img2} alt="foto" className="" />
            <div className="pl-4 border-[2px] pt-4 w-[348px]">
              <p className="pb-4">
                By <span className="font-bold ">Wahid Ari</span> | 03 March 2019
              </p>
              <p className="font-bold text-2xl w-[294px]">
                Increasing Prosperity With Positive Thinking
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[33px]">
          <div>
            <img src={img3} alt="foto" className="" />
            <div className="pl-4 border-[2px] pt-4 w-[348px]">
              <p className="pb-4">
                By <span className="font-bold ">Wahid Ari</span> | 03 March 2019
              </p>
              <p className="font-bold text-2xl w-[294px]">
                Increasing Prosperity With Positive Thinking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
