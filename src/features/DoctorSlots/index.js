import React,{useState} from 'react';
import { useTranslation } from 'react-i18next';
import {Calendar} from "antd";
import axios from "axios";
import { DoctorNavbar } from '../../components/DoctorNavBar'

import { CiLocationOn } from "react-icons/ci";
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const DoctorSlots = () => {


    const [activeTab, setActiveTab] = useState('visit');
    const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

 const [selectedSlot, setSelectedSlot] = useState(null);
 const [selectedTime, setSelectedTime] = useState(null);

const [timeSlot, setTimeSlot] = useState(null);
 const [hourTime, setHourTime] = useState(null);
 const[availableDate , setAvailableDate] = useState(null);


  const handleSlot = (index) => {
    setSelectedSlot(index);
  };

  const handleTime = (index) => {
    setSelectedTime(index);
  };

  

   const  save =()=>{

    const data = {
      "time": hourTime,
      "slot": timeSlot,
      "date": availableDate,
    "doctorId": localStorage.getItem("doctorId")   
   }

   

    axios.post("https://medico-backend-production.up.railway.app/api/slots/register",data).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error.message)
    });
     }


const {t} = useTranslation();














const [time, setTime] = useState([
{
    "time": "8:00 - 9:00"
},
{
    "time": "9:00 - 10:00"
},
{
    "time": "10:00 - 11:00"
},
{
    "time": "11:00 - 12:00"
},
{
  "time": "12:00 - 13:00"
},
{
  "time": "13:00 - 14:00"
},
{
  "time": "14:00 - 15:00 "
},
{
  "time": "15:00 - 16:00"
},
{
  "time": "16:00 - 17:00"
},
{
  "time": "17:00 - 18:00"
}, 
{
  "time": "18:00 - 19:00"
},
{
  "time": "19:00 - 20:00"
},
{
  "time": "20:00 - 21:00"
}
]);



  const handleDate = (index) =>{
    setSelectedDate(index);
  }
  const [selectedDate, setSelectedDate] = useState(null);

 const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in the month

  const currentMonthDays = [];
  for (let day = 1; day <= daysInMonth; day++) {
    currentMonthDays.push(new Date(year, month, day)); // Push each day of the month into the array
  }

    const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 7; // Number of items to display at a time

  const handleScrollLeft = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };

  const handleScrollRight = () => {
    setStartIndex(Math.min(currentMonthDays.length - itemsPerPage, startIndex + itemsPerPage));
  };


  return (
    <div className=' flex flex-col'>
     <DoctorNavbar/>


    <div className=' flex flex-row mx-[60px]'>
    <img className=' rounded-full w-40 h-40 border-2 border-primary-color object-cover' src='./doctor_profile.svg' alt='profile'/>
    <div className=' flex flex-col mx-9 mt-2'>
    <h1 className=' font-abc font-semibold text-[24px] text-primary-color'>Dr.Shahzaib</h1>
    <h3 className=' font-abc font-normal text-[18px] text-gray_rating'>Dentist</h3>
    <div className=' flex flex-row'>
<CiLocationOn className=' text-primary-color' size={20} />
 <h6 className=' font-abc font-normal text-[14px] text-gray_rating mx-1'> National lahore</h6>
    </div>
   
    <div className=' flex flex-row mt-4'>
    <div className=' rounded-lg bg-primary-color text-center text-white px-3.5 py-1.5 font-abc font-medium text-[13px]'>
      $50/{t('session')}
    </div>
    <div className=' rounded-lg bg-button_gray text-center text-black px-3.5 py-1.5 font-abc font-medium text-[13px] mx-2'>
      $25/{t('followUp')}
    </div>

    </div>
    </div>
    </div>

       <div className=' bg-line_gray h-px mt-4 mx-6'/>

{/* <div className=' flex flex-col mt-7 mx-10 rounded-lg border-line_gray border'>
     
   <h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('selectHour')}</h1>

 <div className=' flex flex-row'>
  {
    time.map((e,index)=>(
        
<div key={index}
 onClick={() => {
  handleTime(index);
  setHourTime(e.time);

 }}
  className={` w-[8%] rounded-lg  border-2 py-1.5 m-6  cursor-pointer text-[#000] font-abc text-[14px] font-semibold ${
              selectedTime === index ? 'bg-[#022C4933] text-primary-color border-primary-color' : 'bg-white text-[#000] border-[#000]'
            }`}
 >
      <h1 className=' text-primary-color font-abc text-[13px] text-center font-medium' >{e.time}</h1>
        </div>
    ))
   }
 </div>

  <h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('selectSlot')}</h1>

 <div className=' flex flex-row'>
  {
    slot.map((e,index)=>(
        
<div 
key={index} 
 onClick={() => {
  handleSlot(index);
  setTimeSlot(e.slot);
 }}
 className={` w-[8%] rounded-lg  border-2 py-1.5 m-6  cursor-pointer text-[#000] font-abc text-[14px] font-semibold ${
              selectedSlot === index ? 'bg-[#022C4933] text-primary-color border-primary-color' : 'bg-white text-[#000] border-[#000]'
            }`}>
      <h1 className=' text-primary-color text-center font-abc text-[13px] font-medium' >{e.slot}</h1>
        </div>
    ))
   }
 </div>

 <h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('visitPrice')}</h1>

   <div className=' container mx-4 mt-3'>
      <div className='flex'>
      <button
          className={`px-6 py-2 rounded-lg font-abc text-[16px] font-semibold ${activeTab === 'visit' ? ' bg-primary-color text-white' : ' bg-white text-tab_unselected'}`}
          onClick={() => handleTabChange('visit')}
        >
           $50/{t('session')}
        </button>

  <button
          className={`px-6 py-2 rounded-lg ont-abc text-[16px] font-semibold ${activeTab === 'followUp' ? 'bg-primary-color text-white' : 'bg-white text-tab_unselected'}`}
          onClick={() => handleTabChange('followUp')}
        >
         $25/{t('followUp')}
        </button>

      </div>
      </div>
<h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('selectDate')}</h1>
<Calendar className=' my-2'
    onSelect={(date)=>{
        setAvailableDate(date.format('DD/MMMM/YYYY'));
    }}
    disabledDate={(date)=>{
        if(new Date(date).getDate > 24){
            return true
        }else{
            return false
        }
    }}
/>

<div onClick={save} className=' my-4 cursor-pointer bg-primary-color rounded-lg justify-center items-center w-[10%] mx-10'>
 <p className=' text-white font-abc1 font-semibold text-sm items-center text-center py-3'>{t('save')}</p>
  </div>

    </div> */}


  <div className=' flex flex-col rounded-md border border-line_gray mx-[60px] my-2'>
   <div className=' flex flex-row justify-between h-14'>
<button onClick={handleScrollLeft} ><FaChevronLeft size={24} className=' text-primary-color font-medium font-abc ml-4 my-1.5'/></button>

<div className=' flex flex-row w-auto justify-center items-center h-full'>
{
  currentMonthDays.slice(startIndex, startIndex + itemsPerPage).map((item,index)=>(
    <div className=' flex flex-col'>
<div key={index} onClick={()=>{
  handleDate(index);
}}  
className={`font-abc cursor-pointer flex flex-col  font-medium text-[20px] text-dark-gray py-2.5 mt-1 mx-10 ${
              selectedDate === index ? ' text-primary-color border-b-2 border-primary-color' : ' text-[#000] border-[#fff]'
            }`} 
>
      {item.toLocaleDateString('it-IT', { month: 'long', day: 'numeric', locale: 'it-IT' })}
    </div>  
    </div>
  ))
}
</div>
<button onClick={handleScrollRight} ><FaChevronRight size={24} className=' text-primary-color font-normal  font-abc mr-4 my-1.5'/></button>
   </div>
    <div className=' bg-line_gray h-px mt-2 mx-0'/>

  
  <div className=' flex flex-col'>
<p className=' text-primary-color font-abc font-bold text-[24px] m-5'>{t('chooseSlot')}</p>


  <div className=' flex flex-row w-full'>
  <div className=' grid lg:grid-cols-6 gap-5 md:grid-cols-1 sm:grid-cols-1 p-2"'>
 {
    time.map((index)=>(
<div className=' flex flex-col h-24 justify-between w-52 mx-5'>
 <div className=' rounded-tl-md rounded-tr bg-primary-color h-[72px]'>
  
 </div>

 <div className=' rounded-bl-md rounded-br bg-[#E1E6E9] h-[72px]  justify-center items-center'>
  <p className=' items-center text-center h-full font-abc font-bold text-lg mt-2 w-full'>{index.time}</p>
 </div>

 </div>
    ))
  }
  </div>

  </div>
 

 

</div>


<p className=' text-primary-color font-abc font-bold text-[24px] m-5'>{t('setSessionPayment')}</p>

<div className='flex flex-row mx-5 mb-9'>
<div className=' w-[50%] flex flex-col justify-start items-start'>
<h1 className=' font-abc font-semibold text-[14px]  text-primary-color'>{t('session')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></p>
</div>

<div className=' w-[50%] flex flex-col justify-start items-start'>
<h1 className=' font-abc font-semibold text-[14px]  text-primary-color'>{t('followUp')}</h1>
    <p className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"></p>
</div>
  
</div>

  <div className=" flex justify-end items-end mx-4 my-2">
          <button
            type="submit"
            className=" bg-primary-color px-6 py-2 m-4 rounded-lg items-end font-abc font-bold text-white text-sm"
          >
             {t("save")}
          </button>
        </div>

  </div>



    </div>
      
  );
}

export default DoctorSlots
