import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setCartSlice } from '../redux/createSlice/cart.Slice';
import img from '../assets/product_7.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function ShoppingCart({imgs,name,discountedPrice}) {
 const dispatch=useDispatch()
  
  const itemCount = useSelector(state => state.cartSlice.itemCount);
  // setCount(itemCount)
  const cart = useSelector(state => state.cartSlice.value);
  const cartItem=cart.find(item=>item.name===name)
  const [quantity, setQuantity] = useState(cartItem.quantity);
  console.log(quantity) 
  const removeHandler=(name)=>{
    const newCart=cart.filter((item)=>
      item.name!==name

    )
   
  dispatch(setCartSlice([...newCart]))}
 const handleQuantity=(quant)=>{
  setQuantity(quant);
  
   
  
    dispatch(setCartSlice(cart.map((item) => item.name === name? {...item, quantity: quant } : item)))}; 

  

  
  
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 300 }}
      image={imgs}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        {name?.length>25?name.slice(0,22)+"...":name}
      </Typography>
      <Typography variant="body2" color="text.primary" style={{textAlign:'center',fontWeight:'bold',fontSize:'20px', marginTop:'20px'}}>
      ₹{discountedPrice}
        </Typography>
    </CardContent>
    <div className=''>
    <CardActions style={{display:'flex',justifyContent:'center'}}>
      <Button style={{fontSize:'40px' }} size="small" onClick={()=>{handleQuantity(quantity-1)}} disabled={quantity<2}>-</Button>
      <p>{quantity}</p>
      <Button size="small"style={{fontSize:'25px'}}onClick={()=>handleQuantity(quantity+1)}>+</Button>
    </CardActions></div>
    <div className='flex justify-center mb-2'>
   <button className='bg-red-600 w-24 h-12 rounded-lg text-white ' onClick={()=>removeHandler(name)}>Remove</button></div>
  </Card>
);
}
