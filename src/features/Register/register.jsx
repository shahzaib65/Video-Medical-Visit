import React from 'react';
import {useTranslation} from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


const Register = () => {
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
    axios.post("https://medico-backend-production.up.railway.app/api/patient/register",data).then((response)=>{
     navigate("/forgotVerification");
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
      <h1 className=' text-black font-abc1 text-[32px] font-bold'>{t('Register')}</h1>
      <h3 className=' text-[16px] text-dark-gray font-abc1 font-medium'>{t('createAccount')}</h3>
      </div>

      <div className=' flex items-start justify-start flex-col w-full mx-16 my-10'>
       <form className=' w-[100%]' 
       onSubmit={handleSubmit(onSubmit)}
       >
           <h4 className=' text-sm font-abc1 text-black font-medium'>{t('firstName')}</h4>
           <div className="mt-2">
                <input
                  id="first"
                {...register("firstName", {
                        required: t('first_name_required')
                      })}
                  type="text"
                  placeholder='abc'
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] border-0 h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {errors.firstName && (
                  <p className="text-red">{errors.firstName.message}</p>
                )}
              </div>

   <h4 className=' text-sm font-abc1 text-black font-medium mt-6'>{t('lastName')}</h4>
<div className="mt-2">
                <input
                  id="last"
              {...register("lastName", {
                        required: t('last_name_required')
                      })}
                 type='text'
                  placeholder='abc'
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {errors.lastName && (
                  <p className="text-red">{errors.lastName.message}</p>
                )}
              </div>

               <h4 className=' text-sm font-abc1 text-black font-medium mt-6'>{t('Email')}</h4>
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
                 type='email'
                  placeholder='Example@gmail.com'
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
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
                  required: t(('password_required')),
                  minLength: 8
                })}
                 type='text'
                  placeholder='*******'
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {errors.password && (
                  <p className="text-red">{errors.password.message}</p>
                )}

   

              </div>

                  <h4 className=' text-sm font-abc1 text-black font-medium mt-6'>{t('phoneNo')}</h4>
<div className="mt-2">
                <input
                  id="phone"
                {...register("phoneNumber", {
              required: t('phone_required'),
            })}
                 type='text'
                  placeholder='123456789'
                  className="block w-[70%] font-abc1 font-normal rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
                />
                {errors.phoneNumber && (
                  <p className="text-red">{errors.phoneNumber.message}</p>
                )}
              </div>
        <button type='submit' className=' flex justify-center items-center w-[70%] bg-primary-color h-[56px] rounded-[4px] my-10'>
     <h1 className=' text-white font-abc1 text-[16px] font-bold'>{t('SignUp')}</h1>
        </button>

        <div className=' flex justify-center items-center flex-row w-[70%]'>
        <h6 className=' text-dark-gray font-abc1 font-normal text-sm'>{t('alreadyAccount')}</h6>
        <Link to="/" className=' text-primary-color font-abc1 font-semibold text-sm'>{t('SignIn')}</Link>
        </div>
              
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

export default Register


