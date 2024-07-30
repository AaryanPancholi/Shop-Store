import React from 'react'
import TopStrip from '../components/TopStrip'
import  {Navbar}  from '../components/Navbar'
import Email from '../components/Email'
import Footer from '../components/Footer'
import CartProuduct from '../components/CartProuduct'

export default function Mens() {
  return (
    <div>
      <TopStrip/>
      <Navbar/>
      <CartProuduct/>
      <Email/>
      <Footer/>
    </div>
  )
}