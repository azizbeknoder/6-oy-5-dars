import React from 'react'
import img from '../images/amico3.svg'
import icon1 from '../images/blog4_foto1.svg'
import icon2 from "../images/blog4_foto2.svg";
import icon3 from "../images/blog4_foto3.svg";

export default function Blog4() {
  return (
    <div className="h-[500px] w-full flex mt-[150px]">
      <div className="ml-[145px] mr-[96px]">
        <img src={img} alt="" />
      </div>
      <div>
        <p className="font-bold">Easier decision making for</p>
        <p className="mt-3 text-3xl font-bold font-poppins mb-5">
          Customer Support
        </p>
        <p className="w-[468px] mb-[30px]">
          The Myspace page defines the individual, his or her characteristics,
          traits, personal choices and the overall personality of the person.{" "}
        </p>
        <div className="flex  mb-10">
          <img src={icon1} alt="foto" className='mr-6'/>
          <p className="w-[365px]">
            Never worry about overpaying for your energy again.{" "}
          </p>
        </div>
        <div className="flex ] mb-10">
          <img src={icon2} alt="foto" className='mr-6'/>
          <p className="w-[385px">
            We will only switch you to energy companies that we trust and will
            treat you right{" "}
          </p>
        </div>
        <div className="flex  mb-10">
          <img src={icon3} alt="foto" className='mr-6' />
          <p className="w-[385px]">
            We track the markets daily and know where the savings are.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
