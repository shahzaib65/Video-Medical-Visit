import React from 'react'
import { useTransition } from 'react'
import { useTranslation } from 'react-i18next'

const DoctorForm = () => {
  const {t} = useTranslation();
  return (
    <div className=' flex flex-col rounded-lg border border-line_gray mx-10 my-5'>
      
  <div className=' flex flex-row mx-10'>
    <div className=' w-[50%] flex flex-col justify-start items-start my-3'>

    <h1 className=' font-abc font-medium text-[14px] text-primary-color'>{t('firstName')}</h1>
    <input className='w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3' placeholder={t('enterFirst')}></input>


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('Email')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3" placeholder='shahzaib@gmail.com'></input>


    <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('locations')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3" placeholder={t('city')}></input>

   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('studiesYear')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></input>


<h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('specialist')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></input>

    <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('signature')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></input>

    </div>


    <div className=' w-[50%] flex flex-col justify-start items-start my-3'>

    
    <h1 className=' font-abc font-medium text-[14px] text-primary-color'>{t('lastName')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></input>


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('phoneNo')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></input>


    <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('postalCode')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></input>

   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('dob')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></input>


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('sex')}</h1>
    <input className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></input>

    </div>

    </div>


    <h1 className=' font-abc font-medium text-[14px] text-primary-color mx-10'>{t('aboutMe')}</h1>
    <textarea className='w-[90%] mx-10 font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-28 text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3' placeholder={t('enterFirst')}></textarea>

  <div className=' my-4 bg-primary-color rounded-lg justify-center items-center w-[10%] mx-10'>
 <p className=' text-white font-abc1 font-semibold text-sm items-center text-center py-3'>{t('Register')}</p>
  </div>
     
    </div>
  )
}

export default DoctorForm


  // <input ></input>