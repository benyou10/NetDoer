import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'app/globals.css'
import Primenav from './primenav'
import About from './home'

const Content = (props : any) => {
  const {theme,settheme}=props;

  return (
    <>
    <Primenav theme={theme} settheme={settheme}     />
  
    <About theme={theme}   />

  </>
  
  )
}

export default Content