import React,{useState} from 'react';
import { useTranslation } from 'react-i18next';
import {Calendar} from "antd";
import axios from "axios";
import { DoctorNavbar } from '../../components/DoctorNavBar'

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
    "time": "10:00"
},
{
    "time": "11:00"
},
{
    "time": "12:00"
},
{
     "time": "13:00"
}
   
]);

const [slot, setSlot] = useState([
{
    "slot": "Evening"
},
{
    "slot": "Morning"
},
{
    "slot": "Afternoon"
}
])



  return (
    <div className=' flex flex-col'>
     <DoctorNavbar/>
<div className=' flex flex-col mt-7 mx-10 rounded-lg border-line_gray border'>
     
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

    </div>
    </div>
      
  );
}

export default DoctorSlots
