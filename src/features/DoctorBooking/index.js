import React,{useState} from 'react';

import { useTranslation } from 'react-i18next';
import {Calendar} from "antd"
const DoctorBooking = () => {
  
const {t} = useTranslation();



  return (
    <div className=' flex flex-col mt-7 mx-10 rounded-lg border-line_gray border'>

   <h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('selectHour')}</h1>

   <div className=' flex flex-row'>
<div className=' flex justify-center items-center w-[8%] py-1.5 font-abc text-[14px] font-semibold bg-[#022C4933] border-primary-color border-2 rounded-lg m-6'>
      <h1 className=' text-primary-color font-abc text-[13px] font-medium' >8:00 PM</h1>
        </div>
      
      <div className=' flex justify-center items-center w-[8%] py-1.5 font-abc text-[14px] font-semibold bg-[#022C4933] border-primary-color border-2 rounded-lg m-6'>
      <h1 className=' text-primary-color font-abc text-[13px] font-medium' >8:00 PM</h1>
        </div>
   </div>
    
<h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('selectDate')}</h1>

<Calendar
    onSelect={(date)=>{
        console.log(date)
    }}
    disabledDate={(date)=>{
        if(new Date(date).getDate > 24){
            return true
        }else{
            return false
        }
    }}

/>

    </div>
  )
}

export default DoctorBooking
