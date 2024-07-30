import React from 'react'
import { Navbar } from '../components/Navbar'
import Carousal from '../components/Carousal'
import GridSection from '../components/GridSection'
import Banner from '../components/Banner'
import FitGuide from '../components/FitGuide'
import Features from '../components/Features'
import Card from '../components/Card'
import TopStrip from '../components/TopStrip'
import Email from '../components/Email'
import Footer from '../components/Footer'
import HomeCard from '../components/HomeCard'

export const Home = () => {
  return (
    <div>
      <TopStrip/>
        <Navbar/>
        
        <Carousal/>
        <GridSection/>
        <Banner/>
        <FitGuide/>
        <Features/>
        <HomeCard/>
        <Email/>
     
        <Footer/>
    </div>
  )
}
