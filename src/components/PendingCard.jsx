import React,{useState} from 'react'
import { IoHeartSharp } from "react-icons/io5";
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PendingCard = () => {
    const {t} = useTranslation();
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

return (
    <div className='flex flex-row'>
{
    data.map((e)=>(
        <>
             <div key={e.id} className=' rounded-lg m-2 border border-card_border w-96 h-auto flex flex-col'>
       <img className=' rounded-lg' src='./doctor_profile.svg' alt='doctor_profile'/>

     <div className=' flex flex-row justify-between mt-2 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>Dr.Shahzaib</h1>
     <IoHeartSharp size={22} className=' text-primary-color' />
     </div>

     <div className=' text-heart_outline font-abc font-medium text-[15px] mx-2'>
        MBBS, MS - General Surgery
     </div>

<div className=' flex flex-row justify-between mt-1 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>Payment ID: 3232</h1>
     <p className=' font-abc font-medium text-[13px] text-gray_rating'>12 April,2024</p>
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

    

    <div className=' flex flex-row justify-between w-full'>
    <div className=' rounded-lg bg-button_gray ml-2 my-2 py-2 px-4 flex flex-row justify-center items-center'>
     <img className=' mx-1' src='./cancel.svg' alt='Cancel'/>
      <p className=' font-abc text-sm text-primary-color font-semibold'>{t('cancel')}</p>
    </div>

     <div className=' rounded-lg bg-[#ff0000] mr-2 my-2 py-2 px-3 flex flex-row justify-center items-center'>
     <img className=' mx-1' src='./call.svg' alt='Video'/>
      <p className=' font-abc text-sm text-white font-semibold'>{t('wait')}</p>
    </div>

    </div>
   

    </div>
        </>
    ))
   }
    </div>
   
  )
}

export default PendingCard
