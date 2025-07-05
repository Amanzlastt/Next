import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaHashtag } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md"; 
import { FaRegBookmark } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import Link from 'next/link';

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

const Homepage=()=> {
  return (
    <div className='h-full w-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-lg w-full h-full flex p-4 relative'>
        <section className='fixed w-72 flex flex-col h-screen'>
          {NAVIGATION_BAR.map(items => (
              <Link href={`/${items.title.toLowerCase()}`} className='flex item-center text-2xl rounded-3xl justify-start space-x-4 hover:bg-white/10 py-2 px-6'>
                <div>
                  <items.icon/>
                </div>
                {items.title !== "Twitter" &&  <div>{items.title}</div>}
              </Link>
            ))
          }
          <button>

          </button>
        </section>
        {/* <main>Home time</main> */}
        <div>
          {/* Right section */}
        </div>
      </div>
    </div>
  ) 
}

export default Homepage