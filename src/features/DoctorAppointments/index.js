import React from 'react'
import CurrentAppointments from '../../components/CurrentAppointments'
import { DoctorNavbar } from '../../components/DoctorNavBar'
import Hero from '../../components/Hero'
import DoctorHero from '../../components/DoctorHero'

const DoctorAppointments = () => {
  return (
    <div className=' flex flex-col'>
    <DoctorNavbar/>
     <div className=" h-[1px] w-full bg-line_gray"></div>
    <DoctorHero/>
      <CurrentAppointments/>
    </div>
  )
}

export default DoctorAppointments
