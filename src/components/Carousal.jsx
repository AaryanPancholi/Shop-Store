import React from 'react'
import { CCarousel,CImage,CCarouselItem } from '@coreui/react';
import img1 from '../assets/beg.png'
import img2 from '../assets/men.png'
import img3 from '../assets/women.png'
import '@coreui/coreui/dist/css/coreui.min.css'
import img4 from '../assets/logo1.png'
 const Carousal = () => {
  return (
    <div className='mt-10'>
    <CCarousel controls  indicators interval={2000} className='text-black'>
  <CCarouselItem>
    <CImage className="d-block w-[100vw] h-[70vh]" src={img1} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-[100vw] h-[70vh] " src={img2} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-[100vw] h-[70vh]" src={img3} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
    </div>
  )
}
export default Carousal

