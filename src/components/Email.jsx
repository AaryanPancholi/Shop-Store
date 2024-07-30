import React from 'react'

export default function Email  () {
  return (
    <div>
    <div className='bg-black w-full pt-10 pb-8 flex-col justify-center items-center mb-20 mt-20'>
        <p className='text-white text-center text-2xl'>Enter your email to get updates about exclusive offers!</p>
        <form  className='text-center mt-6'>
       <input type='text' placeholder='Enter your email' className='bg-white w-[400px] h-10 border
       border-black text-center mr-4 hover:cursor-pointer '/>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Subscribe</button>

            

        </form>
    </div>
    </div>
  )
}
