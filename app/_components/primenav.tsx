'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Primenav = (props) => {
  const {theme,settheme}=props;
  const toggletheme =()=>{
settheme(!theme)
  }
  return (
    <div className='w-[100vw] h-[100vh]'>
    {/* component */}
    <div className={`    absolute top-[85%] left-[5%] right-[5%]  xl:left-[20%] xl:right-[20%]`} >
     <nav className={` ${theme ==true ? 'bg-white ':'bg-darkblue  text-white' } border-2 border-white  w-full flex rounded-full   justify-between items-center  md:pl-10 pr-40 h-20`}>
       <Link className='bg-white rounded-xl ' href='/'>
      {/* logo */}<Image  className="inline-flex"
            src={'Group 286.svg'}
            width={100}
            height={20}
            alt='logo'
            />
    </Link>
      {/* end logo */}
    
      {/* login */}
      <div className=" text-xs  xl:text-lg md:pl-5 md:p-5 flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="flex mr-4 items-center">
            <Link
              className="inline-block px-2 py-2  md:px-3 hover:bg-gray-200 rounded-full"
              href="/camp/tutorials"
            >
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                tutorials
              </div>
            </Link>
       
          </div>
          <div className="flex mr-4 items-center">
            <Link
              className="inline-block  px-2 py-2  md:px-3 hover:bg-gray-200 rounded-full"
              href="#"
            >
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                Blogs
              </div>
            </Link>
          
          </div>
          <div className="flex md:mr-4 items-center">
            <Link
              className="inline-block px-2 py-2  md:px-3 hover:bg-gray-200 rounded-full"
              href="#"
            >
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                Premuim
              </div>
            </Link>
          
          </div>
          <div className="flex  md:mr-4 items-center">
            <Link
              className="inline-block  px-2 py-2  md:px-3 hover:bg-gray-200 rounded-full"
              href="#"
            >
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                Curriculum
              </div>
            </Link>
          
          </div>
          <div className="flex  md:mr-4 items-center">
            <Link
              className="inline-block   px-2 py-2  md:px-3 hover:bg-gray-200 rounded-full"
              href="#"
            >
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                Donate
              </div>
            </Link>
          
          </div>
          <div className="block">
            <div className="inline relative">
               <Link href='authontication/login'>
              <button
                type="button"
                className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
              >
                <div className="pl-1">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: 16,
                      width: 16,
                      stroke: "currentcolor",
                      strokeWidth: 3,
                      overflow: "visible"
                    }}
                  >
                    <g fill="none" fillRule="nonzero">
                      <path d="m2 16h28" />
                      <path d="m2 24h28" />
                      <path d="m2 8h28" />
                    </g>
                  </svg>
                </div>
                <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "100%",
                      width: "100%",
                      fill: "currentcolor"
                    }}
                  >
                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                  </svg>
                </div>
              </button>
              </Link>
            </div>
          </div>
          <label className="  2xl:ml-6 theme">
          <input onChange={toggletheme}   className="input"  type="checkbox" />  <svg width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="icon icon-sun"><circle r="5" cy="12" cx="12"></circle><line y2="3" y1="1" x2="12" x1="12"></line><line y2="23" y1="21" x2="12" x1="12"></line><line y2="5.64" y1="4.22" x2="5.64" x1="4.22"></line><line y2="19.78" y1="18.36" x2="19.78" x1="18.36"></line><line y2="12" y1="12" x2="3" x1="1"></line><line y2="12" y1="12" x2="23" x1="21"></line><line y2="18.36" y1="19.78" x2="5.64" x1="4.22"></line><line y2="4.22" y1="5.64" x2="19.78" x1="18.36"></line></svg>
  <svg viewBox="0 0 24 24" className="icon icon-moon"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path></svg>
</label>
        </div>
      </div>
      {/* end login */}
    </nav></div></div>
  )
}

export default Primenav