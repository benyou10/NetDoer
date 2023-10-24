'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { stringify } from 'querystring'
import React, { useState } from 'react'
const Page = () => {
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

const onSubmit =async (e : React.FormEvent)=>{
  e.preventDefault()
  try{
const res =await fetch('../../api/register',{
  method :'POST',
  body : JSON.stringify({
    email,
    password
  }),
  headers :{
    'content-type':'application/json'
  }

})
if(res.ok){
  console.log("ok")
  signIn();
}

  }catch(error){
    console.error(error)
  }
  console.log("regesterd")
}
  return (<><div className="text-center">
  <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
    NetDoer
  </h2>
  <p className="mt-3 text-gray-500 dark:text-gray-300">
    Create a new account
  </p>
</div>
<div className="mt-8">
  <form onSubmit={onSubmit} >
    <div>
      <label
        htmlFor="email"
        className="text-3xl block mb-2  text-gray-600 dark:text-gray-200"
      >
        Email Address
      </label>
      <input
      required
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
        type="text"
       
        placeholder="example@example.com"
        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>

    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <label
          htmlFor="password"
          className="text-3xl text-gray-600 dark:text-gray-200"
        >
          Password
        </label>
     
      </div>
      <input
      required
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
        type="password"
       
        placeholder="Your Password"
        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
    
    <div className="mt-6">
      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        Create
      </button>
    </div>
  </form>
  <p className="mt-6 text-2xl text-center text-gray-400">
    you do have an account{" "}
    <Link
      href="./login"
      className="text-blue-500 focus:outline-none focus:underline hover:underline"
    >
     login
    </Link>
    .
  </p>
</div></>
  )
}

export default Page