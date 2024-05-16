import React from 'react'
import { GuestNavBar } from '../../components/GuestNavBar'
import Hero from '../../components/Hero'
import Features from '../../components/features'
import Footer from '../../components/Footer'


const Guest = () => {
  return (
    <div className=' flex flex-col'>
      <GuestNavBar/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Guest
