import React,{useEffect, useState} from 'react'
import { Navbar } from '../../components/Navbar'
import Hero from '../../components/Hero'
import { LuHeart } from 'react-icons/lu'
import axios from "axios"

const BookingPayments = () => {

    const [appointments ,setAppointments] = useState([])

useEffect(()=>{
   
  const id = localStorage.getItem("patientId")

  axios.post(`https://medico-backend-production.up.railway.app/api/booking/patientBookings/${id}`).then((response)=>{
   setAppointments(response.data.appointment);

  }).catch((error)=>{
    console.log(error.message)
  })
},[]);

 const makePayment = async(doctorId,name,price,service) => {
  console.log(doctorId,price,name)

   const patientId = localStorage.getItem("patientId")
       try {
        const res = await fetch("https://medico-backend-production.up.railway.app/api/payment/checkout",{
            method: "POST",
            headers: { 
              'content-type': 'application/json' },
            mode: "cors", 
            body: JSON.stringify({
              items: [
                {
                    id: 1,
                quantity: 1,
                price: price,
                name: name,
                description: "testing the data"
                }
            ],
             patientId: patientId,
             doctorId: doctorId,
             visit_fee: price,
             service: service
           }),
        });
        const data = await res.json()
        console.log(data)
        window.location = data.url
       } catch (error) {
        console.log(error.message)
       }

 }


  return (
    <div className=' flex flex-col'>
      <Navbar/>
      <Hero/>

 

 <div className=' flex flex-row w-full'>
 <div className=" grid lg:grid-cols-4 gap-5 md:grid-cols-1 sm:grid-cols-1 p-2">
 {appointments.length>0 &&
                      appointments.map((e) => (
                      <div className=' flex flex-row'>
             <div key={e._id} className=' rounded-lg m-2 border border-card_border w-96 h-auto flex flex-col'>
       <img className=' rounded-lg' src={e.doctor_picture_url ? e.doctor_picture_url : './doctor_profile.svg'} alt='doctor_profile'/>

     <div className=' flex flex-row justify-between mt-2 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>Dr. {e.doctor_name}</h1>
     <LuHeart size={22} className=' text-heart_outline' />
     </div>

     <div className=' text-heart_outline font-abc font-medium text-[15px] mx-2'>
        {e.specialist}
     </div>


    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./location.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>{e.doctor_location}</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./clock.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>{e.date} {e.time}</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <p className=' text-sm font-abc text-primary-color mx-1'>Booking Id: {e._id}</p>
    </div>

    <div onClick={()=>{
      makePayment(e.doctorId,e.doctor_name,e.session_fee,e.specialist);
    }}  className=' cursor-pointer  rounded-lg bg-primary-color mx-2 my-2 py-2 px-3 justify-center items-center'>
      <p className=' font-abc text-sm text-white text-center items-center font-semibold'>{e.payment_status}</p>
    </div>
   

    </div>
        </div>
                      ))}
  </div>

 </div>


    </div>
  )
}

export default BookingPayments
