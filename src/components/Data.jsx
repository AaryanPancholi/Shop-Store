import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setMenCloth } from '../redux/createSlice/Men';
import { setWomenCloth } from '../redux/createSlice/Women';
import { setGenral } from '../redux/createSlice/Genral';
import {useDispatch} from  'react-redux'
const DataFetcher = () => {
 const dispatch=useDispatch()
  let array
  useEffect(() => {
    axios.all([
      axios.get('https://dummyjson.com/products/category/mens-shoes?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/mens-shirts?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/mens-watches?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/womens-bags?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/womens-dresses?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/womens-jewellery?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/womens-shoes?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/womens-watches?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/laptops?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/smartphones?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/furniture?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
      axios.get('https://dummyjson.com/products/category/groceries?limit=0&select=title,price,id,description,category,price,discountPercentage,rating,brand,images,thumbnail'),
    ]).then((responses) => {
      const [
        mensShoes,
        mensShirts,
        mensWatches,
        womensBags,
        womensDresses,
        womensJewellery,
        womensShoes,
        womensWatches,
        laptops,
        smartphones,
        furniture,
        groceries,
      ] = responses;
      
      dispatch(setMenCloth([...mensShirts.data.products, ...mensShoes.data.products, ...mensWatches.data.products]));
      dispatch(setWomenCloth([...womensDresses.data.products, ...womensBags.data.products, ...womensJewellery.data.products, ...womensShoes.data.products, ...womensWatches.data.products]));
      dispatch(setGenral([...laptops.data.products, ...smartphones.data.products, ...furniture.data.products, ...groceries.data.products]));
   
    }).catch((errors)=>{
      console.log(errors)
    })
  }, []);

  return null
    

};

export default DataFetcher;