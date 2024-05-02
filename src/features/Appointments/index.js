import React,{useState,useEffect} from 'react'
import Hero from '../../components/Hero';
import PendingCard from '../../components/PendingCard';
import ConfirmCard from '../../components/ConfirmCard';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../../components/Navbar';
import { IoHeartSharp } from "react-icons/io5";
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import JitsiMeetComponent from '../../components/JitsiMeetComponent';
import { Link } from 'react-router-dom';




const Appointments = () => {
  const {t} = useTranslation();
   const [activeTab, setActiveTab] = useState('pending');
    const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [appointments ,setAppointments] = useState([])
   const [rating, setRating] = useState(4);

  useEffect(()=>{
   
  const id = localStorage.getItem("patientId")

  axios.post(`https://medico-backend-production.up.railway.app/api/booking/patientBookings/${id}`).then((response)=>{
   setAppointments(response.data.appointment);

  }).catch((error)=>{
    console.log(error)
  })
},[]);


const [showJitsiMeet, setShowJitsiMeet] = useState(false);

  const handleToggleJitsiMeet = () => {
    setShowJitsiMeet(!showJitsiMeet);
  };


  return (
    <div className='flex flex-col'>
    <Navbar/>
      <Hero/>
      {/* <div className=' container mx-auto mt-3'>
      <div className='flex'>
      <button
          className={`px-6 py-2 rounded-lg font-abc text-[16px] font-semibold ${activeTab === 'pending' ? ' bg-primary-color text-white' : ' bg-white text-tab_unselected'}`}
          onClick={() => handleTabChange('pending')}
        >
          {t('pending')}
        </button>

  <button
          className={`px-6 py-2 rounded-lg ${activeTab === 'confirm' ? 'bg-primary-color text-white' : 'bg-white text-tab_unselected'}`}
          onClick={() => handleTabChange('confirm')}
        >
          {t('confirm')}
        </button>

      </div>
      </div> */}

       {/* <div className="bg-gray-100 p-4">
        {activeTab === 'pending' && <PendingCard />}
        {activeTab === 'confirm' && <ConfirmCard />}
      </div> */}

      <div className=' flex flex-row w-full'>
       <div className=" grid lg:grid-cols-4 gap-5 md:grid-cols-1 sm:grid-cols-1 p-2 mx-1">
 {appointments.length>0 &&
                      appointments.map((e) => (
               <>
             <div key={e._id} className=' rounded-lg m-2 border border-card_border w-96 h-auto flex flex-col'>
       <img className=' rounded-lg' src='./doctor_profile.svg' alt='doctor_profile'/>

     <div className=' flex flex-row justify-between mt-2 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>Dr.{e.doctor_name}</h1>
     <IoHeartSharp size={22} className=' text-primary-color' />
     </div>

     <div className=' text-heart_outline font-abc font-medium text-[15px] mx-2'>
        {e.specialist}
     </div>

<div className=' flex flex-row justify-between mt-1 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>Booking ID: {e._id}</h1>
     <p className=' font-abc font-medium text-[13px] text-gray_rating'></p>
     </div>


 <div className='flex flex-row mx-2 mt-1'>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <FaStar
              className="star"
              color={ratingValue <= (rating) ? "#009D2C" : "#A9A9A9"}
              size={20}
            />
          </label>
        );
      })}
      <p className=' font-abc text-[12px] text-gray_rating font-medium mt-[2px] mx-[2px]'>(4)</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./location.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>{e.doctor_location}</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./clock.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>{e.date} {e.time}</p>
    </div>

    

    <div className=' flex flex-row justify-between w-full'>
    <div className=' rounded-lg bg-button_gray ml-2 my-2 py-2 px-4 flex flex-row justify-center items-center'>
     <img className=' mx-1' src='./cancel.svg' alt='Cancel'/>
      <p className=' font-abc text-sm text-primary-color font-semibold'>{t('cancel')}</p>
    </div>

     <Link to="/calling" className=' cursor-pointer rounded-lg bg-primary-color mr-2 my-2 py-2 px-3 flex flex-row justify-center items-center'>
     <img className=' mx-1' src='./call.svg' alt='Video'/>
      <p className=' font-abc text-sm text-white font-semibold'>{t('consultNow')}</p>
    </Link>
 {/* {showJitsiMeet && <JitsiMeetComponent roomName="your-room-name" />} */}
    </div>
   

    </div>
        </>
                      ))}
  </div>

      </div>
      
    </div>
  )
}

export default Appointments
