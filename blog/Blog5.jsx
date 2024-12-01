import React from 'react'
import img from '../images/amico4.svg'

export default function Blog5() {
  return (
    <div className="h-[451px]  w-full ml-[145px] flex mt-[150px]">
      <div className="mr-[150px]">
        <p className="font-bold mb-2">Optimisation for</p>
        <p className="font-bold text-3xl mb-6">Collaborative</p>
        <p className="w-[486px] mb-[30px]">
          Few would argue that, despite the advancements of feminism over the
          past three decades, women still face a double standard when it comes
          to their behavior.{" "}
        </p>
        <p className="text-s font-bold mb-7">Accessory makers</p>
        <p className="w-[486px] mb-6">
          While most people enjoy casino gambling, sports betting, lottery and
          bingo playing for the fun
        </p>
        <p className="font-bold text-s mb-6">Alterationists</p>
        <p className="w-[486px]">
          If you are looking for a new way to promote your business that won’t
          cost you more money,
        </p>
      </div>
      <div className="">
        <img src={img} alt="foto" />
      </div>
    </div>
  );
}
