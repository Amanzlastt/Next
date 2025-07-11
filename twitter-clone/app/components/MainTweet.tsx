import React from 'react';
const MainTweet = ()=>{
    return(
        <div className=' flex items-start space-x-2 w-full border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative py-2 px-4'>
            <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
            <div className='flex items-center justify-between w-full'>
              <div className='w-full'>
                <input className='p-4 text-xl w-full h-full bg-transparent outline-none border-none'
                 placeholder='What is happerning?' 
                 type='text' />
              </div>
              <div className='w-full justify-between items-center flex p-4'>
                <div></div>
                <div className='w-full max-w-[100px]'>
                  <button className="bg-blue-500 text-lg text-center rounded-full py-2 px-4 
                  hover:bg-blue-600 transition-200 font-bold">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
    )
};
export default MainTweet;