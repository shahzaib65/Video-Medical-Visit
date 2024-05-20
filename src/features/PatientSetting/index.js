import React from 'react'
import profile from "../../assets/profile.svg"
import Language from "../../assets/language.svg"
import { useTranslation } from "react-i18next";
import { FaChevronRight } from "react-icons/fa";
import privacy from "../../assets/privacy.svg"
import termscondition from "../../assets/temscondition.svg"
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
const PatientSetting = () => {
     const { t } = useTranslation();

     const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };


  return (
    <>

    <Navbar/>
     <div className=' bg-line_gray h-[1px] mx-[0px]'></div>

<div className=' flex flex-col mx-[60px]'>
       
   <Link   to="/profile" className=' flex flex-row justify-between mx-[60px] mt-[50px] mb-[35px]'>
   <div className=' flex flex-row'>
     <img src={profile} alt='profile'/>
    <p className=' font-abc font-medium text-[16px] mx-[15px] text-[#000]'>{t('myProfile')}</p>
   </div>
    <FaChevronRight className=' flex justify-end items-end my-1' />
   </Link>

   <div className=' bg-line_gray h-[1px] mx-[60px]'></div>

   
    <div className=' flex flex-row justify-between mx-[60px] mt-[50px] mb-[35px]'>
   <div className=' flex flex-row'>
     <img src={Language} alt='language'/>
    <p className=' font-abc font-medium text-[16px] mx-[15px] text-[#000]'>{t('language')}</p>
   </div>
    <FaChevronRight className=' flex justify-end items-end my-1' />
   </div>

   <div className=' bg-line_gray h-[1px] mx-[60px]'></div>


    <div onClick={() => openInNewTab("https://res.cloudinary.com/dm5cvivrc/image/upload/v1716117064/Informativa_sulla_Privacy_gsajxd.pdf")} className=' cursor-pointer flex flex-row justify-between mx-[60px] mt-[50px] mb-[35px]'>
   <div className=' flex flex-row'>
     <img src={privacy} alt='Privacy'/>
    <p className=' font-abc font-medium text-[16px] mx-[15px] text-[#000]'>{t('privacy_policy')}</p>
   </div>
    <FaChevronRight className=' flex justify-end items-end my-1' />
   </div>

   <div className=' bg-line_gray h-[1px] mx-[60px]'></div>


  <div onClick={() => openInNewTab("https://res.cloudinary.com/dm5cvivrc/image/upload/v1716117500/ITA_Termini_e_Condizioni_rbomze.pdf")} className=' cursor-pointer flex flex-row justify-between mx-[60px] mt-[50px] mb-[35px]'>
   <div className=' flex flex-row'>
     <img src={termscondition} alt='Terms&Condition'/>
    <p className=' font-abc font-medium text-[16px] mx-[15px] text-[#000]'>{t('terms&condition')}</p>
   </div>
    <FaChevronRight className=' flex justify-end items-end my-1' />
   </div>

   <div className=' bg-line_gray h-[1px] mx-[60px]'></div>



    </div>
    </>
    
  )
}

export default PatientSetting
