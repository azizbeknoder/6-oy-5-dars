import React from 'react'
import avator1 from '../images/Avator1.png'
import avator2 from "../images/Avator2.png";
import avator3 from "../images/Avator3.png";
import avator4 from "../images/Avator4.png";

export default function Blog6() {
  return (
    <div className="h-[581px] w-full mt-[200px] ">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-4">Quick & Easy Process</h1>
        <p className="w-[542px] ml-[650px] ">
          Do you require some help for your project: Conception workshop,
          prototyping, marketing strategy, landing page, Ux/UI?
        </p>
      </div>
      <div className="ml-[200px] mt-20">
        <div className="flex justify-between ">
          <div className="flex ml-20">
            <img src={avator1} alt="foto" />
            <p className="ml-10 mt-5  pt-4 pb-4 border-spacing-3">
              I can take care of your pitch
            </p>
          </div>
          <div className="flex mr-[500px]  ">
            <p className="mr-10 mt-9"> I can prototype your app</p>
            <img src={avator2} alt="foto" />
          </div>
        </div>
        <div className="flex justify-between mt-7">
          <div className="flex ml-40">
            <p className="mr-10 mt-9"> I can design you website</p>
            <img src={avator3} alt="foto" />
          </div>

          <div className="flex mr-[600px]  ">
            <img src={avator1} alt="foto" />
            <p className="ml-10 mt-5  pt-4 pb-4 border-spacing-3">
              I can help marketing strategy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
