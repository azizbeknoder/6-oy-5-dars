import React from 'react'
import img from '../images/amico2.svg'

export default function Blog3() {
  return (
    <div className="w-full h-[473px] mt-[150px] ml-[145px] flex">
      <div>
        <p className="text-[#22343d] text-xm font-bold mb-2">
          Effortless Validation for
        </p>
        <p className="text-3xl font-bold mb-[23px]">Management</p>
        <p className=" w-[486px] h-[78px]" >
          The Myspace page defines the individual, his or her characteristics,
          traits, personal choices and the overall personality of the person.{" "}
        </p>
        <p className='font-bold mb-[18px]'>Accessory makers</p>
        <p className='w-[486px] h-[52px] mb-[25px]'>
          While most people enjoy casino gambling, sports betting, lottery and
          bingo playing for the fun
        </p>
        <p className='font-bold'>Alterationists</p>
        <p className='w-[486px]'>
          If you are looking for a new way to promote your business that won’t
          cost you more money,
        </p>
      </div>
      <img src={img} alt="photo" className='ml-[180px]' />
    </div>
  );
}
