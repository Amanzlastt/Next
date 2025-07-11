import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BiRepost } from "react-icons/bi";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
const TimeLine = ()=>{
    return(
        <div className='flex space-x-4 p-2  border-b-[0.5px] border-gray-600'>
          <div className='w-10 h-10 bg-slate-200 rounded-full'>
            {/* <img src='peofile.png' className='w-10 h-10' /> */}
          </div>
          <div className='flex flex-col w-fit px-2'>
            <div className='flex items-center space-x-1 pb-2'>
              <div className='font-bold'>User Name</div>
              <div>@username</div>
              <div>.</div>
              <div>1hr ago</div>
              <BsThreeDots/>
            </div>
            <div className='text-white text-sm pb-2'>
              Lorem aalkdfakdjflkaj dfkaj df adlkfj adj faksd flakjsd f;akdj 
              Lorem aalkdfakdjflkaj dfkaj df adlkfj adj faksd flakjsd f;akdj 
              Lorem aalkdfakdjflkaj dfkaj df adlkfj adj faksd flakjsd f;akdj
            </div>
            <div className='bg-slate-400 aspect-square w-full h-80 rounded-2xl'>

            </div>
            <div className="flex item-center justify-evenly p-3 w-ful">
              <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer' >
                <FaCommentDots/>
              </div>
              <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'>
                <BiRepost/>
              </div>
              <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'>
                <CiHeart/>
              </div>
              <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'>
                <IoStatsChartOutline/>
              </div>
              <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'>
                <CiShare2/>
              </div>
            </div>
          </div>
        </div>
    )
};

export default TimeLine;