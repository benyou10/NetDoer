'use client'
import Link from 'next/link'

const Page = () => {

  return (<><div className="text-center">
  <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
  NetDoer
  </h2>
  <p className="mt-3 text-gray-500 dark:text-gray-300">
    Sign in to access your account
  </p>
</div>
<div className="mt-8">
  <form>
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-2xl text-gray-600 dark:text-gray-200"
      >
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@example.com"
        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <label
          htmlFor="password"
          className="text-2xl text-gray-600 dark:text-gray-200"
        >
          Password
        </label>
        <a
          href="#"
          className="text-2xl text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Your Password"
        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
    <div className="mt-6">
      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        Sign in
      </button>
    </div>
  </form>
  <p className="mt-6 text-2xl text-center text-gray-400">
    Don&apos;t have an account yet?{" "}
    <Link
      href="./signup"
      className="text-blue-500 focus:outline-none focus:underline hover:underline"
    >
      Sign up
    </Link>
    .
  </p>
</div></>
  )
}

export default Page