import React,{useEffect, useState} from "react";
import { Navbar } from "../../components/Navbar";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Profile = () => {

  const {t} = useTranslation();
   const [profileData, setProfileData] = useState('')
   useEffect(()=>{

     const data = {
      "id": localStorage.getItem("patientId")
     }
  axios.post("https://medico-backend-production.up.railway.app/api/patient/profile",data).then((response)=>{
   
    setProfileData(response.data.message);

  }).catch((error)=>{
    console.log(error.message)
  })
   },[]);


  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className=" h-[1px] w-full bg-line_gray"></div>

      <div className=" flex flex-col rounded-lg m-[60px] border border-line_gray">

        <div className=" flex justify-start items-start m-10">
          <img
            className=" rounded-full w-[100px] h-[100px] border-2 border-primary-color object-cover"
            src={profileData.picture_url ? profileData.picture_url : './doctor_profile.svg'}
            alt="profile"
          />
        </div>



    <div className=' flex flex-row mx-10 mb-9'>
    <div className=' w-[50%] flex flex-col justify-start items-start'>


    <h1 className=' font-abc font-medium text-[14px] text-primary-color'>{t('firstName')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">{profileData.firstName}</p>


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('Email')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">{profileData.email}</p>


    <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('location')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">{profileData.location}</p>

   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('dob')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">{profileData.dob ? profileData.dob : t('not_available')}</p>

{/* <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('aboutMe')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">Patient Information Form</p> */}
    </div>


    <div className=' w-[50%] flex flex-col justify-start items-start'>

    
    <h1 className=' font-abc font-medium text-[14px] text-primary-color'>{t('lastName')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">{profileData.lastName}</p>


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('phoneNo')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">{profileData.phoneNumber}</p>


    <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('postalCode')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">{profileData.postal_code}</p>

   {/* <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('weight')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">66</p> */}


   <h1 className=' font-abc font-medium text-[14px] mt-7 text-primary-color'>{t('sex')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3">{profileData.sex}</p>

    </div>


        </div>



      </div>

      
    </div>
  );
};

export default Profile;
