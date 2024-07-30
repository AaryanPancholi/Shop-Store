import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { PiSignInBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import logo from "../assets/logo1.png";
import { Navitem } from "./Navitem";
import { useSelector } from "react-redux";
import Search from "./Search";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const cart = useSelector(state => state.cartSlice.value);
 let items=0
 for( let i of cart){
  items+=i.quantity
 }
 
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between  m-3 font-roberto hover:cursor-pointer bg-white items-center pt-4 mt-0 h">
        <div className="flex gap-3 items-center">
          <img className="w-16 h-8" src={logo} />
          <p className="font-semibold ">Shopping</p>
        </div>
        <Search/>
        <div className="flex gap-10 justify-around">
          <div className="">
            <PiSignInBold className="text-2xl" />

            <p className="hover:underline">Sign In </p>
          </div>
          <div>
            <CiHeart className="text-2xl" />
            <p className="hover:underline">Saved</p>
          </div>
          
          <div className="relative">
            <p style={{display:!items&&"none"}} className='bg-red-500 w-6 h-6  text-center rounded-full absolute text-white -left-2 -top-2'>{items
              }</p>
          <NavLink to='/Cart' activeClassName="active-cart">

            <FaBagShopping className="text-2xl" />
            <p className="hover:underline">Cart</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center mr-12 mt-4 font-base text-lg">
        
        <Navitem/>
        
        </div>
        <hr/>
    </div>
  );
};
