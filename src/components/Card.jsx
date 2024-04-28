import React,{useState} from 'react'
import { LuHeart } from "react-icons/lu";
import { IoHeartSharp } from "react-icons/io5";
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const Card = () => {

const [rating, setRating] = useState(4);

const data = [
    {
        "id": "1"
    }, 
    {
        id: "2"
    },
    {
        id: "3"
    },
    {
        "id": "4"
    }
]

const {t} = useTranslation();
  return (
    <div className='flex flex-row'>
{
    data.map((e)=>(
        <>
             <div key={e.id} className=' rounded-lg m-2 border border-card_border w-96 h-auto flex flex-col'>
       <img className=' rounded-lg' src='./doctor_profile.svg' alt='doctor_profile'/>

     <div className=' flex flex-row justify-between mt-2 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>Dr.Shahzaib</h1>
     <LuHeart size={22} className=' text-heart_outline' />
     </div>

     <div className=' text-heart_outline font-abc font-medium text-[15px] mx-2'>
        MBBS, MS - General Surgery
     </div>

 <div className='flex flex-row mx-2 mt-1'>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <FaStar
              className="star"
              color={ratingValue <= (rating) ? "#009D2C" : "#A9A9A9"}
              size={20}
            />
          </label>
        );
      })}
      <p className=' font-abc text-[12px] text-gray_rating font-medium mt-[2px] mx-[2px]'>(4)</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./location.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>Multan,Pakistan</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./clock.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>Available on Friday March 12, 11:30PM</p>
    </div>

     <div className=' flex flex-row mx-2 mt-2'>
    <img src='./payment.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>$120</p>
    </div>

    <div className=' flex flex-row justify-between w-full'>
    <div className=' rounded-lg border border-primary-color ml-2 my-2 py-2 px-2 justify-center items-center'>
      <p className=' font-abc text-sm text-primary-color font-semibold'>{t('checkAvailability')}</p>
    </div>

     <div className=' rounded-lg bg-primary-color mr-2 my-2 py-2 px-3 justify-center items-center'>
      <p className=' font-abc text-sm text-white font-semibold'>{t('bookNow')}</p>
    </div>

    </div>
   

    </div>
        </>
    ))
   }
    </div>
   
  )
}

export default Card
