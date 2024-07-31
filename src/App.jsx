import React,{useEffect} from 'react'
import P from '../src/components/P'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import  Genrals  from './pages/Genrals'
import  Womens  from './pages/Womens'
import  Mens  from './pages/Mens'
import  Cart  from './pages/Cart'
import { setCartSlice,addProduct } from './redux/createSlice/cart.Slice';
import { useSelector,useDispatch } from 'react-redux'
import DataFetch from './components/Data'
import NotFound from './components/NotFound'
export default function App() {
  const dispatch=useDispatch()
  const cart = useSelector(state => state.cartSlice.value);

  useEffect(() => {
    const cartss = localStorage.getItem('carts');
    const parsedCart = cartss ? JSON.parse(cartss) : [];
    dispatch(setCartSlice([...parsedCart]));
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <DataFetch/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Men' element={<Mens/>}/>
      <Route path='/Women' element={<Womens/>}/>
      <Route path='/Genral' element={<Genrals/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path= '*'element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

