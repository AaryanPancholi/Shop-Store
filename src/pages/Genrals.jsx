import React from 'react'
import TopStrip from '../components/TopStrip'
import  {Navbar}  from '../components/Navbar'
import Email from '../components/Email'
import Footer from '../components/Footer'
import {Genral} from '../components/Genral'
export default function Genrals() {
  return (
    <div>
      <TopStrip/>
      <Navbar/>
      <Genral/>
      <Email/>
      <Footer/>
    </div>
  )
}

