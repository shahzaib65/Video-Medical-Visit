import React from 'react'
import CurrentAppointments from '../../components/CurrentAppointments'
import { DoctorNavbar } from '../../components/DoctorNavBar'
import Hero from '../../components/Hero'
import DoctorHero from '../../components/DoctorHero'

const DoctorAppointments = () => {
  return (
    <div>
    <DoctorNavbar/>
    <DoctorHero/>
      <CurrentAppointments/>
    </div>
  )
}

export default DoctorAppointments
