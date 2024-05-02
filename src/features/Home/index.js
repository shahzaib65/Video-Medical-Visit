import React, { useState } from 'react';
import {useTranslation} from 'react-i18next';
import { LuHeart } from "react-icons/lu";

import { Navbar } from '../../components/Navbar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const {t} = useTranslation();
    const[doctors, setDoctors] = useState([])
    const [rating, setRating] = useState(4);
    const[doctorId, setDoctorId] = useState(null)

 const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   const onSubmit = async (data) => {
    console.log(data);
    axios.post("https://medico-backend-production.up.railway.app/api/service/findDoctor",data).then((response)=>{
     setDoctors(response.data.doctors)
      reset();
    }).catch((error)=>{
      console.log(error.message)
    });
   reset();
  };

 

  return (
    <div className=' flex flex-col w-full'>
    <Navbar/>
<main className='flex w-screen h-auto mx-auto bg-hero-bg'>
      <div className=' flex flex-row w-full'>
      <div className='flex flex-col w-[50%] ml-16 h-96 mt-[120px]'>
       <h1 className=' font-abc font-bold text-[48px] text-primary-color'>{t('heroTitle')}</h1>
       <h6 className=' font-abc font-medium text-[16px] text-[#000000]'>Connettiti con medici qualificati in pochi minuti, direttamente dal tuo dispositivo. La nostra piattaforma ti guiderà direttamente verso la soluzione di cui hai bisogno, con accesso istantaneo ai migliori specialisti e  tutto il supporto necessario per gestire la tua salute senza stress.</h6>
        <div className=' flex justify-center items-center bg-primary-color py-4 w-[40%] rounded-full my-10'>
      <h1 className=' text-white font-abc text-[16px] font-semibold' >{t('makeAppointment')}</h1>
        </div>
        <form
        onSubmit={handleSubmit(onSubmit)}
         className=' flex bg-white rounded-lg w-auto py-0 flex-row'>
        <div className=' w-[85%] h-full flex-row flex'>
        <input 
        {...register("specialist", {
                        required: "Specialist is required"
                      })}
        className=' h-full text-start w-[60%] px-2 border-0 outline-none mx-2 text-dark-gray font-abc font-medium text-[15px]' placeholder={t('specialist')}/>
        <div className=' w-[1px] h-[72px] bg-dark-gray'></div>
        <input
         {...register("firstName", {
                        required: "First name is required"
                      })}
        
         className=' h-full text-start w-[24%] px-2 border-0 outline-none mx-2 text-dark-gray font-abc font-medium text-[15px]' placeholder={t('firstName')}/>
        </div>
     <button type="submit" className=' w-[15%]  bg-primary-color rounded-lg mx-2 h-[52px] my-2.5 flex flex-row justify-center items-center'>
     <p className=' mx-2 text-white font-abc font-medium text-[15px] text-center'>{t('search')}</p>
     <img className='ml-2' src='./search.svg' alt='search'/>
     </button>
        </form>
      </div>
      <div className=' flex justify-center items-center'>
      <img src='./hero_bg.svg' alt='doctor image'/>
      </div>
      </div>
    </main>

  <div className=" grid grid-cols-3 gap-5 md:grid-cols-1 sm:grid-cols-1 p-2">
 {doctors.length>0 &&
                      doctors.map((e) => (
                      <>
             <div key={e._id} className=' rounded-lg m-2 border border-card_border w-96 h-auto flex flex-col'>
       <img className=' rounded-lg' src='./doctor_profile.svg' alt='doctor_profile'/>

     <div className=' flex flex-row justify-between mt-2 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>{e.firstName} {e.lastName}</h1>
     <LuHeart size={22} className=' text-heart_outline' />
     </div>

     <div className=' text-heart_outline font-abc font-medium text-[15px] mx-2'>
        {e.specialist}
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
    <p className=' text-sm font-abc text-gray_rating mx-1'>{e.location}</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./clock.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>Available on Friday March 12, 11:30PM</p>
    </div>

     {/* <div className=' flex flex-row mx-2 mt-2'>
    <img src='./payment.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>{}</p>
    </div> */}

    <div className=' flex flex-row justify-between w-full'>
    <Link to={`/booking/${e._id}`} className=' rounded-lg border border-primary-color ml-2 my-2 py-2 px-2 justify-center items-center'>
      <p className=' font-abc text-sm text-primary-color font-semibold'>{t('checkAvailability')}</p>
    </Link>

     <div  className=' cursor-pointer rounded-lg bg-primary-color mr-2 my-2 py-2 px-3 justify-center items-center'>
      <p className=' font-abc text-sm text-white font-semibold'>{t('bookNow')}</p>
    </div>

    </div>
   

    </div>
        </>
                      ))}
  </div>
 

    </div>
    
  )
}

export default Home
