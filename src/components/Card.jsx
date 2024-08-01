import React, { useState } from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { setCartSlice, addProduct } from "../redux/createSlice/cart.Slice";
import { increaseCount } from "../redux/createSlice/cart.Slice";
import Typography from "@mui/material/Typography";
import img from "../assets/product_7.png";
import { useSelector, useDispatch } from "react-redux";
export default function Card({
  image,
  name,
  orignalPrice,
  discountedPrice,
  discount,
  ratingValue,
  image1,
}) {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartSlice.value);
  let array = [{ image, image1, name, discountedPrice, quantity: 1 }];
  const itemCount = useSelector((state) => state.cartSlice.itemCount);
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    dispatch(addProduct(array));
    console.log(image1);
  };
  const handleMouseEnter = () => {
    console.log("Mouse entered");
    
    setHover(true);
  };

  const handleMouseOut = () => {
    console.log("Mouse out");
    setHover(false);
  };
  const hoverImage = new Image();
  hoverImage.src = image1;
  hoverImage.style.display = "none";
  return (
    <div className="w-full">
      <div className="relative">
        <div>
          <img
            className="h-[350px]  m-auto"
            src={hover ? image1 : image}
            alt="Loading "
            loading="lazy"
            key={hover ? image1 : image}
          />
           <img src={image1} style={{ display: "none" }} />
        </div>
        <div className="text-center">
          <Rating name="read-only" value={ratingValue} readOnly />
        </div>
        <div className="    inset-0 flex  justify-center items-end absolute  hover:-translate-y-[84px] transition-all hover:ease-out hover:delay-100 hover:bg-opacity-50 group w-full"  onMouseEnter={handleMouseEnter}       onMouseOver={handleMouseEnter}       onMouseOut={handleMouseOut}>
          <button
            className="text-white 
        group-hover:opacity-100  opacity-[0.01] bg-black bg-opacity-50 w-full  h-[50px]"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
        <p className="text-center font-semibold text-2xl">{name}</p>
        <div className="text-center mt-6 font-bold">
          <s className="text-red-600  pr-2 text-center">Rs {orignalPrice}</s>
          <span className="text-center">Rs {discountedPrice}</span>
        </div>
        <div className="absolute top-2 left-2 bg-red-500 bg- w-fit h-7 text-center">
          -{discount}%
        </div>
      </div>
    </div>
  );
}
