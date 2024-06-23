import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'app/globals.css'
import Primenav from './primenav'
import About from './home'

const Content = (props : any) => {
  const {theme,settheme}=props;
  const toggletheme =()=>{
    settheme(!theme)
      }
  return (
    <>
    <div className='w-[100vw] h-[100vh] flex flex-col justify-between '>
      <div className='flex justify-between'>
      <div className='' >
      <h1 className='m-5 text-5xl text-white  font-extrabold '>NetDoer</h1>
      </div><div className='flex justify-around m-5'>
        <h1 className='text-white mr-8'>contact</h1>
      <h1 className='text-white mr-8'>about</h1>
      <h1 className='text-white mr-8'>scheduel</h1>
     
<label className="  2xl:ml-6 theme">
          <input onChange={toggletheme}   className="input"  type="checkbox" />  <svg width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="icon icon-sun"><circle r="5" cy="12" cx="12"></circle><line y2="3" y1="1" x2="12" x1="12"></line><line y2="23" y1="21" x2="12" x1="12"></line><line y2="5.64" y1="4.22" x2="5.64" x1="4.22"></line><line y2="19.78" y1="18.36" x2="19.78" x1="18.36"></line><line y2="12" y1="12" x2="3" x1="1"></line><line y2="12" y1="12" x2="23" x1="21"></line><line y2="18.36" y1="19.78" x2="5.64" x1="4.22"></line><line y2="4.22" y1="5.64" x2="19.78" x1="18.36"></line></svg>
  <svg viewBox="0 0 24 24" className="icon icon-moon"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path></svg>
</label>
</div></div>
<div className='ml-5 mb-10 text-xl '>
<h1 className='text-white  mr-8'>scheduel a meeting with one of our experts</h1></div>
    </div>
  
    <About theme={theme}   />

  </>
  
  )
}

export default Content