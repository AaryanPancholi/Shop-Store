import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export const Genral  = () => {
    const Genral=useSelector((state)=> state.Genral.value)
  return (
    <div>{Genral?.length==0&& <div className='flex justify-center'><Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box></div>}
          <div className="grid grid-cols-3 justify-around gap-2 ml-2 ">
        {Genral?.length>0 &&Genral?.map((item)=>(
            <div key={item.id} className='border border-zinc-500 shadow-lg'>
                <Card image={item.images[0]} name={item.title} orignalPrice={Math.floor(item.price*100)} discount={item.discountPercentage} discountedPrice={Math.floor(item.price*100-(item.price*100*(item.discountPercentage/100)))} ratingValue={item.rating}/>
                </div>
        ))}
        </div>
    </div>
  )}