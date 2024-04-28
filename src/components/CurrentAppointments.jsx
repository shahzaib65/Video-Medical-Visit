import React,{useState} from 'react'
import { FaEye } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CurrentAppointments = () => {
    const {t} = useTranslation();
   

const data = [
    {
        "id": "1"
    }, 
    {
        id: "2"
    },
    {
        id: "3"
    },
    {
        "id": "4"
    }
]

return (
    <div className='flex flex-row'>
{
    data.map((e)=>(
        <>
             <div key={e.id} className=' rounded-lg m-2 border border-card_border w-96 h-auto flex flex-col'>
       <img className=' rounded-lg' src='./doctor_profile.svg' alt='doctor_profile'/>

     <div className=' flex w-full flex-col'>
     <h1 className=' w-[50%] font-abc font-bold mt-3 ml-2 text-[16px] text-[#000]'>Shahzaib</h1>
    <div className=' text-heart_outline font-abc font-medium text-[15px] mx-2'>
        Allergy checkup
     </div>

<div className=' flex flex-row justify-between mt-1 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>Payment ID: 3232</h1>
     <p className=' font-abc font-medium text-[13px] text-gray_rating'>12 April,2024</p>
     </div>

<div className=' flex flex-row mx-2 mt-2'>
    <img src='./location.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>Multan,Pakistan</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./clock.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>Appointment: 11:30PM</p>
    </div>

    <div className=' flex flex-row mx-3 my-2'>
     <div className=' flex flex-col w-[50%] mx-1'>
     
     <div className=' flex flex-col w-full'>
<h1 className=' font-abc font-medium text-[13px] text-primary-color'>{t('sex')}</h1>
     <p className=' font-abc font-normal text-[12px] text-gray_rating'>Male</p>
     <div className=' w-full bg-line_gray h-[1px]'/>
     </div>


         <div className=' flex flex-col w-full mt-[20px]'>
<h1 className=' font-abc font-medium text-[13px] text-primary-color'>{t('phoneNo')}</h1>
     <p className=' font-abc font-normal text-[12px] text-gray_rating'>123456</p>
     <div className=' w-full bg-line_gray h-[1px]'/>
     </div>


             <div className=' flex flex-col w-full mt-[20px]'>
<h1 className=' font-abc font-medium text-[13px] text-primary-color'>{t('weight/height')}</h1>
     <p className=' font-abc font-normal text-[12px] text-gray_rating'>26 kg / 3.6 cm</p>
     <div className=' w-full bg-line_gray h-[1px]'/>
     </div>




     </div>

<div className=' flex flex-col w-[50%] mx-1'>
     
     <div className=' flex flex-col w-full'>
<h1 className=' font-abc font-medium text-[13px] text-primary-color'>{t('dob')}</h1>
     <p className=' font-abc font-normal text-[12px] text-gray_rating'>12/12/2000</p>
     <div className=' w-full bg-line_gray h-[1px]'/>
     </div>


         <div className=' flex flex-col w-full mt-[20px]'>
<h1 className=' font-abc font-medium text-[13px] text-primary-color'>{t('postalCode')}</h1>
     <p className=' font-abc font-normal text-[12px] text-gray_rating'>123456</p>
     <div className=' w-full bg-line_gray h-[1px]'/>
     </div>


     </div>


    </div>

     </div>

    <div className=' flex flex-row justify-between w-full'>
    <div className=' rounded-lg bg-button_gray ml-2 my-2 py-2 px-4 flex flex-row justify-center items-center'>
     <img className=' mx-1' src='./cancel.svg' alt='Cancel'/>
      <p className=' font-abc text-sm text-primary-color font-semibold'>{t('cancel')}</p>
    </div>

     <div className=' rounded-lg bg-primary-color mr-2 my-2 py-2 px-3 flex flex-row justify-center items-center'>
     <img className=' mx-1' src='./call.svg' alt='Video'/>
      <p className=' font-abc text-sm text-white font-semibold'>{t('videoCall')}</p>
    </div>

    </div>
   

    </div>
        </>
    ))
   }
    </div>
   
  )
}

export default CurrentAppointments
