import React from 'react';
import {useTranslation} from 'react-i18next';
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


const Login = () => {
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
    axios.post("https://medico-backend-production.up.railway.app/api/patient/login",data).then((response)=>{
      console.log(response.data.user.id)
      localStorage.setItem("patientId", response.data.user.id);
       navigate("/home");
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
      <h1 className=' text-black font-abc1 text-[32px] font-bold'>{t('Welcome')}</h1>
      <h3 className=' text-[16px] text-dark-gray font-abc1 font-medium'>{t('journey')}</h3>
      </div>

       <div className=' flex items-start justify-start flex-col w-full mx-16 my-10'>
       <form
        onSubmit={handleSubmit(onSubmit)}
        className=' w-[100%]'>
           <h4 className=' text-sm font-abc1 text-black font-medium'>{t('Email')}</h4>
           <div className="mt-2">
                <input
                  id="email"
                  {...register('email', {
                    required: t('email_required'),
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: t('email_validation'),
                    },
                  })}
                  type="email"
                  placeholder='Example@gmail.com'
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] border-0 h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {errors.email && (
                  <p className="text-red">{errors.email.message}</p>
                )}
              </div>

   <h4 className=' text-sm font-abc1 text-black font-medium mt-6'>{t('Password')}</h4>
<div className="mt-2">
                <input
                  id="password"
                {...register("password", {
                  required: t('password_required'),
                  minLength: 8
                })}
                 type='text'
                  placeholder='**********'
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {errors.password && (
                  <p className="text-red">{errors.password.message}</p>
                )}

   

              </div>

        <Link to="/forgot" className=' flex flex-row justify-end items-end w-[70%] my-4'>
       <h5 className=' font-abc1 text-sm font-normal text-primary-color'>{t('ForgotPassword')}</h5>
        </Link>

        <button type="submit" className=' flex justify-center items-center w-[70%] bg-primary-color h-[56px] rounded-[4px] my-10'>
     <h1 className=' text-white font-abc1 text-[16px] font-bold' >{t('Login')}</h1>
        </button>

        <div className=' flex justify-center items-center flex-row w-[70%]'>
        <h6 className=' text-dark-gray font-abc1 font-normal text-sm'>{t('NotAccount')}</h6>
        <Link to="/register" className=' text-primary-color font-abc1 font-semibold text-sm'>{t('SignUp')}</Link>
        </div>
              
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

export default Login
