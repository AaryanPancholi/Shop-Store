import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
export default function HomeCard() {
   let index1,index2,index3
  
       const men=useSelector((state)=> state.MensCloth.value)
       
    
        let  mens=men.slice(1,4)
       

    
  return (
    <div>
        
        <div className="grid grid-cols-3 justify-around gap-2 ml-2 ">
        {mens?.length>0 && mens?.map((item)=>(
            <div key={item.id} className='border border-zinc-500 shadow-lg'>
                <Card image={item.images[0]} name={item.title} orignalPrice={Math.floor(item.price*100)} discount={item.discountPercentage} discountedPrice={Math.floor(item.price*100-(item.price*100*(item.discountPercentage/100)))} ratingValue={item.rating}/>
                </div>
        ))}
        </div>
    </div>
  )
}
