import React from 'react';
import {useTranslation} from 'react-i18next';
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


const ResetPassword = () => {
    const {t} = useTranslation();
    let navigate = useNavigate();

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   const onSubmit = async (data) => {
    console.log(data);
    if(data.password !== data.confirm){
        alert("Password does not match")
    }else{

     const change = {
        "id": localStorage.getItem("patientId"),
        "password": data.password
     }

 axios.put("https://medico-backend-production.up.railway.app/api/patient/forgot",change).then((response)=>{
       navigate("/login");
      reset();
    }).catch((error)=>{
      console.log(error.message)
    });
    }
   
   reset();
  };

  return (
    <div className=' flex flex-row w-full h-auto'>

      <div className=' flex w-[50%] flex-col'>

      <div className=' flex items-center flex-col w-full mt-20'>
<img src='./Logo.svg' alt='Logo'/>
      <h1 className=' text-black font-abc1 text-[32px] font-bold'>{t('changePassword')}</h1>
      <h3 className=' text-[16px] text-dark-gray font-abc1 font-medium text-center'>{t('changePasswordSubtitle')}</h3>
      </div>

       <div className=' flex items-start justify-start flex-col w-full mx-16 my-10'>
       <form
        onSubmit={handleSubmit(onSubmit)}
        className=' w-[100%]'>
           <h4 className=' text-sm font-abc1 text-black font-medium'>{t('Password')}</h4>
           <div className="mt-2">
                <input
                  id="email"
                  {...register("password", {
                  required: "Password is required",
                  minLength: 8,
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message:
                      "must contain at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
                  },
                })}
                  type="text"
                  
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] border-0 h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {errors.password && (
                  <p className="text-red">{errors.password.message}</p>
                )}
              </div>

   <h4 className=' text-sm font-abc1 text-black font-medium mt-6'>{t('Confirm Password')}</h4>
<div className="mt-2">
                <input
                  id="password"
                {...register("confirm", {
                  required: "confirm password is required",
                  minLength: 8,
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message:
                      "must contain at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
                  },
                })}
                 type='text'
                 
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {errors.confirm && (
                  <p className="text-red">{errors.confirm.message}</p>
                )}

   

              </div>

       

        <button type="submit" className=' flex justify-center items-center w-[70%] bg-primary-color h-[56px] rounded-[4px] my-10'>
     <h1 className=' text-white font-abc1 text-[16px] font-bold' >{t('changePassword')}</h1>
        </button>

       </form>
   
      </div>

      </div>


      <div className='flex w-[50%] h-full relative'>
        <img src='./doctor.svg' alt='doctor' className=' container absolute bg-cover inset-0'/>   
    <div className="absolute inset-0 flex justify-between h-screen flex-col">
        <div className=' h-[50%] flex justify-center items-center bottom-0 flex-col'>
          <div className=' h-[50%] flex justify-center items-center bottom-0 flex-col'>
        <h1 className=' font-abc1 text-[#000] font-bold text-[22px]'>{t('ConnectDevice')}</h1>
        <p className=' font-abc1 text-[#000] text-[16px] font-medium'>{t('EveryThing')}</p>
        </div> 
        </div>
        <div className="flex justify-center items-center h-[50%]">
        
      </div>
      </div>
      </div>

    </div>
  )
}

export default ResetPassword
