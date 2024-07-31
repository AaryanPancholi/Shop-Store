import React, { useState ,useRef,useEffect} from 'react'
import ShoppingCart from './ShoppingCart'
import { setCartSlice,addProduct } from '../redux/createSlice/cart.Slice';
import { useDispatch, useSelector } from 'react-redux';
export default function CartProuduct() {
  const cart = useSelector(state => state.cartSlice.value);
  const scrollContainerRef = useRef(null)
  let price=0
  for(let i of cart){
    price += i.discountedPrice*i.quantity
   
  }
  let tax=price*.18
  let total=price+tax
  const dispatch=useDispatch()
  const [text,setText]=useState('No Products Added To Cart')
  const handleOrder=()=>{
    setText("Order Placed Sucessfully")
    dispatch(setCartSlice([]))
        localStorage.setItem('carts', JSON.stringify([]));
          
      
    scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(()=>{
      setText("No Products Added To Cart")
    },10000)
  }
 
  
  return (
    <div className=''>
        <h1 className='text-3xl m-10'>Shopping Cart</h1>
        {cart.length==0?<p className='text-3xl text-center text-orange-700 '>{text}</p>:
        <div className=''>
        <div ref={scrollContainerRef} className='grid grid-cols-1 gap-4 lg:grid lg:grid-cols-4 lg:gap-4 '>
         
        {cart.map((item,index)=>(
          <div key={index}> 
        <ShoppingCart name={item.name} imgs={item.image} discountedPrice={item.discountedPrice}/>
        </div>
        
        ))}
        </div>
        
        <div className='relative pt-32'>
        <p className='text-xl mb-7 text-cennter '>Order Summary</p>
       <div className='flex flex-col gap-3 m-6 border p-6'> 
        <div className='flex justify-between'>
        <p className='text-gray-600 '>Subtotal     </p><p className='text-gray-600'>₹{price}</p></div>
        <div className='flex justify-between'>
        <p className='text-gray-600 '>Tax (18%)     </p><p className='text-gray-600'>₹{Math.round(tax)}</p></div>
        <div className='flex justify-between text-black font-bold text-xl'>
        <p className=' '>Total     </p><p className=''>₹{Math.round(total)}</p></div>
        <button style={{backgroundColor:cart.length?"":'#fdffcd'}} className='w-full h-12  bg-red-700 text-white 'disabled={!cart.length} onClick={handleOrder}>Checkout</button></div></div>
        </div>}
    </div>
  )
}
