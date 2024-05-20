import React from 'react'
import Hero from '../../components/Hero'
import Card from '../../components/Card'
import { Navbar } from '../../components/Navbar'

const FavDoctor = () => {
  return (
    <div className='flex flex-col'>
    <Navbar/>
      <Hero/>

   <Card/>
    </div>
  )
}

export default FavDoctor
