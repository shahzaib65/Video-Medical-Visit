import React from 'react'
import { DoctorNavbar } from '../../components/DoctorNavBar'

import DoctorHero from '../../components/DoctorHero';
import patient from "../../assets/patient.svg";
import appointments from "../../assets/appointments.svg";
import earning from "../../assets/earning.svg"
import { useTranslation } from 'react-i18next';


const DoctorDashboard = () => {


    const  data = [
{
  "id": "1"
},
{
  "id": "2"
},
{
  "id": "3"
},
{
  "id": "4"
}
    ]

   const  data1 = [
{
  "id": "1"
},
{
  "id": "2"
},
{
  "id": "3"
},
{
  "id": "4"
}
    ]


  const {t} = useTranslation();
  return (
    <div className=' flex flex-col'>
    <DoctorNavbar/>
       <div className=" h-[1px] w-full bg-line_gray"></div>
   
   <DoctorHero/>
   
   <div className=' flex flex-row m-[60px] justify-evenly'>

   <div className=' flex flex-col rounded-[15px] bg-[#BDEA73] w-1/4 h-[140px] justify-center items-center'>
     <img src={patient} alt='patient'/>
     <h4 className=' font-abc font-medium text-[16px] text-[#000] my-2'>{t('totalPatients')}</h4>
       <h1 className=' font-abc font-bold text-[18px] text-[#000] my-0'>200k</h1>
   </div>

  
   <div className=' flex flex-col rounded-[15px] bg-[#B5CCFA] w-1/4 h-[140px] justify-center items-center'>
     <img src={appointments} alt='patient'/>
     <h4 className=' font-abc font-medium text-[16px] text-[#000] my-2'>{t('totalAppointment')}</h4>
       <h1 className=' font-abc font-bold text-[18px] text-[#000] my-0'>200k</h1>
   </div>


    <div className=' flex flex-col rounded-[15px] bg-[#D3A5E9] w-1/4 h-[140px] justify-center items-center'>
     <img src={earning} alt='patient'/>
     <h4 className=' font-abc font-medium text-[16px] text-[#000] my-2'>{t('totalIncome')}</h4>
       <h1 className=' font-abc font-bold text-[18px] text-[#000] my-0'>200k</h1>
   </div>


   </div>

   <div className=' flex flex-row justify-between mx-40 mb-4'>

     {/* <div className=' rounded-md border-2 w-1/2 mr-5 border-line_gray flex flex-col'>
     <div className=' flex flex-row justify-between m-5'>
     <p className=' text-[#000] font-abc font-bold text-[16px]'>{t('appointmentRequest')}</p>
     <p className=' text-[#9C9C9C] font-abc font-semibold text-[16px]'>{t('seeAll')}</p>
     </div>

    {
      data.map((index)=>(
        <div key={index} className=' flex flex-row justify-between mx-5 my-2'>
    <div className=' flex flex-row'>
    <img className=' rounded-full w-[60px] h-[60px] object-cover' src='./doctor_profile.svg' alt='patient'/>
    <div className=' flex flex-col mx-3 my-1.5'>
    <p className=' font-abc1 font-bold text-md text-[#000]'>Handy Toy</p>
    <p className=' font-abc1 font-medium text-[12px] text-[#616161]'>21 Maggio,2024 6:00-8:00</p>
    </div>
    </div>
   <div className=' flex flex-row'>
 <div className=" flex py-2 mr-1 px-8 bg-red rounded-lg font-abc font-semibold text-white text-sm justify-center items-center h-10 mt-2">
           {t("declined")}
        </div>

        <div className=" flex py-2 ml-1 px-8 bg-[#0EBE7F] rounded-lg font-abc font-semibold text-white text-sm justify-center items-center h-10 mt-2">
           {t("confirmed")}
        </div>
   </div>
    </div>
      ))
    }

     </div> */}


      <div className=' rounded-md border-2  m-[10px] w-full border-line_gray flex flex-col'>
      <div className=' flex flex-row justify-between m-5'>
     <p className=' text-[#000] font-abc font-bold text-[16px]'>{t('todayAppointment')}</p>
     <p className=' text-[#9C9C9C] font-abc font-semibold text-[16px]'>{t('seeAll')}</p>
     </div>

      {
      data1.map((index)=>(
        <div key={index} className=' flex flex-row justify-between mx-5 my-2'>
    <div className=' flex flex-row'>
    <img className=' rounded-full w-[60px] h-[60px] object-cover' src='./doctor_profile.svg' alt='patient'/>
    <div className=' flex flex-col mx-3 my-1.5'>
    <p className=' font-abc1 font-bold text-md text-[#000]'>Handy Toy</p>
    <p className=' font-abc1 font-medium text-[12px] text-[#616161]'>Asthama</p>
    </div>
    </div>
   <div className=' flex flex-row'>
 <p className=" flex py-2 mr-1 px-0  font-abc font-semibold text-[#000] text-sm justify-center items-center h-10 mt-2">
           6:00-8:00
        </p>

        
   </div>
    </div>
      ))
    }

    

     </div>



   </div>
      
    </div>
  )
}

export default DoctorDashboard
