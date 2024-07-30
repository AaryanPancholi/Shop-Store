import React from 'react'
import TopStrip from '../components/TopStrip'
import  {Navbar}  from '../components/Navbar'
import Email from '../components/Email'
import Footer from '../components/Footer'
import {Men} from '../components/Men'
export default function Mens() {
  return (
    <div>
      <TopStrip/>
      <Navbar/>
      <Men/>
      <Email/>
      <Footer/>
    </div>
  )
}
