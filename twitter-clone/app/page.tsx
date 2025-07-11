import React from 'react'
import LeftSidebar from './components/LeftSidebar';
import MainTweet from './components/MainTweet';
import TimeLine from './components/TimeLine';
import { BsThreeDots } from "react-icons/bs";
const Homepage=()=> {
  return (
    <div className='h-full w-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-lg w-full h-full flex p-4 relative'>
        <LeftSidebar/>
        <main className='ml-[275px] w-full max-w-[600px] flex flex-col h-full min-h-screen border-r border-l-[0.5px] border-gray-600 '>
          <h1 className='text-xl font-bold p-6 background-blur bg-black sticky top-0 z-10'>Home</h1>
          <MainTweet/>
            {Array.from({ length: 5 }).map((_, i) => (
              <TimeLine key={i} />
            ))}
        </main>
        <div>
          {/* Right section */}
        </div>
      </div>
    </div>
  ) 
}

export default Homepage;