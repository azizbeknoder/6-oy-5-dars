import React from 'react'

export default function blog8() {
  return (
    <div className="h-[589px]  ml-[145px]">
      <div className="ml-[404px] mb-16">
        <p className="text-3xl font-bold mb-2">Price Table</p>
        <p>We offer competitive price</p>
      </div>
      <div className='flex'>
        <div className="w-[322px] h-[456px] border-[2px] text-center">
          <p className="font-bold text-2xl mt-[24px] mb-2">Free</p>
          <p className="mb-4">Brief price description</p>
          <div className="flex ml-[88px]">
            <p className="font-bold text-5xl text-[#02897a]">0</p>
            <div>
              <p className="text-[#02897a] font-bold">$</p>
              <p className="ml-3 text-gray-400">per/month</p>
            </div>
          </div>
          <p className="mt-5 mb-5">Only 2 Operators</p>
          <p>Notifications</p>
          <p className="mt-5 mb-5">Landing Pages</p>
          <button className="bg-[#02897a] w-[139px] h-11 border-xl text-white">
            Order Now
          </button>
        </div>

        <div className="w-[322px] h-[456px] border-[2px] text-center bg-[#02897a] ml-10 mr-10">
          <p className="font-bold text-2xl mt-[24px] mb-2 text-white">Free</p>
          <p className="mb-4 text-white">Brief price description</p>
          <div className="flex ml-[88px]">
            <p className="font-bold text-5xl text-white">5</p>
            <div>
              <p className="text-white font-bold">$</p>
              <p className="ml-3 text-white-400 text-white">per/month</p>
            </div>
          </div>
          <p className="mt-5 mb-5 text-white">Only 2 Operators</p>
          <p className='text-white'>Notifications</p>
          <p className="mt-5 mb-5 text-white">Landing Pages</p>
          <button className="bg-white w-[139px] h-11 border-xl text-[#02897a]">
            Order Now
          </button>
        </div>

        <div className="w-[322px] h-[456px] border-[2px] text-center">
          <p className="font-bold text-2xl mt-[24px] mb-2">Free</p>
          <p className="mb-4">Brief price description</p>
          <div className="flex ml-[88px]">
            <p className="font-bold text-5xl text-[#02897a]">10</p>
            <div>
              <p className="text-[#02897a] font-bold">$</p>
              <p className="ml-3 text-gray-400">per/month</p>
            </div>
          </div>
          <p className="mt-5 mb-5">Only 2 Operators</p>
          <p>Notifications</p>
          <p className="mt-5 mb-5">Landing Pages</p>
          <button className="bg-[#02897a] w-[139px] h-11 border-xl">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
