import React from 'react';
import {useTranslation} from 'react-i18next';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyOtp = () => {
     const {t} = useTranslation();
     const navigate = useNavigate();

const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   const onSubmit = async (data) => {
    console.log(data)
        let otp = data.one + data.two + data.three + data.four + data.five + data.six
        let code = {
          "otp": otp
        }
 axios.post("https://medico-backend-production.up.railway.app/api/patient/otp",code).then((response)=>{
  console.log(response.data.message)
     navigate("/resetPassword");
      reset();
    }).catch((error)=>{
      console.log(error.message)
    });
    
   reset();
  };


  return (
   <div className=' flex flex-row w-full h-auto'>
      <div className=' flex w-[50%] flex-col'>
      <div className=' flex items-center flex-col w-full mt-20'>
<img src='./Logo.svg' alt='Logo'/>
      <h1 className=' text-black font-abc1 text-[32px] font-bold'>{t('emailVerification')}</h1>
      <h3 className=' text-[16px] text-dark-gray font-abc1 font-medium w-[80%] text-center'>{t('otpCode')}</h3>
      </div>

       <div className=' flex items-start justify-start flex-row w-full mx-16 my-10'>
       <form
       onSubmit={handleSubmit(onSubmit)}
        className=' w-[100%]'>

       <div className=' flex flex-row mt-2 w-[70%] justify-center items-center'>
      
   <input
                 {...register("one", {
                        required: "Please enter the code",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         } 
                      })}
                      maxLength={1}
                  placeholder='0'
                  className="block w-[10%] mr-5 text-center font-abc1 font-normal rounded-[5px] border-0 h-[52px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {/* {errors.one && (
                  <p className="text-red">{errors.one.message}</p>
                )} */}

<input
                {...register("two", {
                        required: "Please enter the code",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         } 
                      })}
                      maxLength={1}
                  placeholder='0'
                  className="block w-[10%] mr-5 text-center font-abc1 font-normal rounded-[5px] border-0 h-[52px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {/* {errors.two && (
                  <p className="text-red">{errors.two.message}</p>
                )} */}

                <input
                {...register("three", {
                        required: "Please enter the code",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         } 
                      })}
                      maxLength={1}
                  placeholder='0'
                  className="block w-[10%] mr-5 text-center font-abc1 font-normal rounded-[5px] border-0 h-[52px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {/* {errors.three && (
                  <p className="text-red">{errors.three.message}</p>
                )} */}
                <input
                {...register("four", {
                        required: "Please enter the code",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         } 
                      })}
                      maxLength={1}
                
                  placeholder='0'
                  className="block w-[10%] mr-5 text-center font-abc1 font-normal rounded-[5px] border-0 h-[52px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {/* {errors.four && (
                  <p className="text-red">{errors.four.message}</p>
                )} */}


                <input
                {...register("five", {
                        required: "Please enter the code",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         } 
                      })}
                      maxLength={1}
                  placeholder='0'
                  className="block w-[10%] text-center font-abc1 font-normal rounded-[5px] border-0 h-[52px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {/* {errors.five && (
                  <p className="text-red-500">{errors.five.message}</p>
                )} */}


                <input
               {...register("six", {
                        required: "Please enter the code",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         } 
                      })}
                      maxLength={1}
                 
                  placeholder='0'
                  className="block w-[10%] mr-5 text-center ml-5 font-abc1 font-normal rounded-[5px] border-0 h-[52px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {/* {errors.six && (
                  <p className="text-red">{errors.six.message}</p>
                )} */}


       </div>
           
           

             

 

        <button type="submit" className=' flex justify-center  items-center w-[70%] bg-primary-color h-[56px] rounded-[4px] my-10'>
     <h1 className=' text-white font-abc1 text-[16px] font-bold' >{t('Confirm')}</h1>
        </button>

        
              
       </form>
   
      </div>

      </div>


      <div className='flex w-[50%] h-full relative'>
        <img src='./doctor.svg' alt='doctor' className=' container absolute bg-cover inset-0'/>   
    <div className="absolute inset-0 flex justify-between h-screen flex-col">
        <div className=' h-[50%] flex justify-center items-center bottom-0 flex-col'></div>
        <div className="flex justify-center items-center h-[50%]">
        <div className=' h-[50%] flex justify-center items-center bottom-0 flex-col'>
        <h1 className=' font-abc1 text-[#000] font-bold text-[22px]'>{t('ConnectDevice')}</h1>
        <p className=' font-abc1 text-[#000] text-[16px] font-medium'>{t('EveryThing')}</p>
        </div> 
      </div>
      </div>
      </div>

    </div>
  )
}

export default VerifyOtp
