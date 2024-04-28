import React from 'react'
import { useTranslation } from 'react-i18next'


const Profile = () => {
    const {t} = useTranslation();
  return (
    <div className=' flex flex-col'>

    <div className=' flex justify-start items-start mx-10 my-5'>
<img className=' rounded-full w-40 h-40 border-2 border-primary-color object-cover' src='./doctor_profile.svg' alt='profile'/>
    </div>

    <div className=' flex flex-row mx-10'>
    <div className=' w-[50%] flex flex-col justify-start items-start'>


    <h1 className=' font-abc font-medium text-[14px] text-primary-color'>{t('firstName')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">Shah</p>


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('Email')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">shahzaib@gmail.com</p>


    <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('height')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">3.6</p>

   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('Age')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">36 yrs</p>


    </div>


    <div className=' w-[50%] flex flex-col justify-start items-start'>

    
    <h1 className=' font-abc font-medium text-[14px] text-primary-color'>{t('lastName')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">zaib</p>


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('phoneNo')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">12345678</p>


    <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('postalCode')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">3565</p>

   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('weight')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">66</p>


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('sex')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">Male</p>

    </div>

    </div>
      
    </div>
  )
}

export default Profile
