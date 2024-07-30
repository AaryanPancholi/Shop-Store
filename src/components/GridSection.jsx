import React from 'react'
import image1 from '../assets/bigmenimge.jpg'
import image12 from '../assets/product_7.png'
import image13 from '../assets/product_8.png'
import image14 from '../assets/product_9.png'
import image15 from '../assets/product_10.png'
const girdArr=[image12,image13,image14,image15]
export default function GridSection() {
  return (
    <div className='mt-10 mb-10 '>
      <p className='text-center text-2xl z-50'>STYLISH PICKS FOR EVERY OCCASION</p>
      <div className='grid grid-cols-4 grid-rows-2 gap-3 mt-4 h-[90vh] w-[80vw] ml-36'>
        <div className='col-span-2 row-span-2 relative hover:scale-105 transition-all hover:ease-out hover:delay-150'>
          <img  className ='w-full h-full 'src={image1}/>
          <button className='absolute  text-white text-lg  opacity-[0.01] inset-0 hover:opacity-100 bg-black bg-opacity-50 z-10'>
            View Details
          </button>
        </div>
       {
        girdArr.map((item,index)=>(
          <div key={index} className=' relative hover:scale-105 transition-all hover:ease-out hover:delay-150'>
            <img className='w-full h-full  'src={item}></img>
             <button className='absolute  text-white text-lg  opacity-[0.01] inset-0 hover:opacity-100 bg-black bg-opacity-50 z-10'>
            View Details
          </button> 
            
            </div>
        ))
       }
      </div>
    </div>
  )
}