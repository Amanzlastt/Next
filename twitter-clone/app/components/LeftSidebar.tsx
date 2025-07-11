import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaHashtag } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md"; 
import { FaRegBookmark } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from 'next/link';
// import LeftSidebar from './components/LeftSidebar';

const NAVIGATION_BAR = [
  {
    title:"Twitter",
    icon:IoLogoTwitter
  },
  {
    title:"Home",
    icon:IoHome
  },
  {
    title:"Explore",
    icon:FaHashtag
  },
  {
    title:"Notification",
    icon:FaBell
  },
  {
    title:"Messages",
    icon:MdLocalPostOffice
  },
  {
    title:"Bookmarks",
    icon:FaRegBookmark
  },
  {
    title:"Profile",
    icon:IoMdContact
  },
]

const LeftSidebar=()=> {
  return (
    <section className='fixed w-72 flex flex-col  items-stretch h-full space-y-3 px-4'>
          <div className='flex flex-col  items-stretch h-[85vh] space-y-3 '>
            {NAVIGATION_BAR.map(items => (
              <Link href={`/${items.title.toLowerCase()}`} key={items.title} className='flex item-center text-2xl rounded-3xl justify-start space-x-4 hover:bg-white/10 py-1 px-6'>
                <div>
                  <items.icon/>
                </div>
                {items.title !== "Twitter" &&  <div>{items.title}</div>}
              </Link>
            ))
          }
            <button className='p-2 bg-blue-500 hover:bg-blue-600 rounded-3xl'>
              Tweet
            </button>
          </div>
          <button className='rounded-full flex items-center space-x-2 m-4 bg-white/5 px-4 py-2 text-xl text-center
          hover:bg-opacity-70 transition duration-200 justify-between'>
            <div className="flex items-center space-x-2">
              <div className='rounded-full bg-slate-400 w-8 h-8'></div>
              <div className='text-left text-xs'>
                <div className="font-semibold">club of Coders</div>
                <div className="text-xs">@clubofcoderscom</div>
              </div>
            </div>
            <BsThreeDotsVertical/>
          </button>
        </section>
  ) 
}

export default LeftSidebar;