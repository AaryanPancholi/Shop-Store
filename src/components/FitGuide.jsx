import React from 'react'
import men from '../assets/WomenLogo.png'
import women from '../assets/MenLogo.png'
import Genral from '../assets/find-trending-products-sell-ecommerce.png'
import { Link } from 'react-router-dom'
const Products=[{
    img:men,
    Destination:'/Men',
    name:'Men'
},
{
    img:women,
    Destination:'/Women',
    name:'Women'
},
{
    img:Genral,
    Destination:'/Genral',
    name:'Genral'
},]
export default function FitGuide() {
    
  return (
    <div>
      <p className='text-center text-2xl '>Fit Guide</p>
      <div className='grid grid-cols-3 justify-around'>
      {Products.map((item,index)=>(
        <div key={index} className='grid  hover:scale-110 transition-all hover:ease-in-out hover:delay-150'>
      <Link to={item.Destination}>
      <div className='mt-10 mb-10 relative '>
        <img src={item.img} className='h-[70vh]  '/>
        <div className='bg-black text-3xl w-24 text-center m-auto text-white bg-opacity-50 absolute bottom-2 left-32'><p>{item.name}</p></div>
      </div>
      </Link>
      </div>
))}
    </div>
      </div>
  )    
}
