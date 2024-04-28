import React,{useState} from 'react';
import { useTranslation } from 'react-i18next';
import {Calendar} from "antd"

const DoctorSlots = () => {


     const [activeTab, setActiveTab] = useState('visit');
    const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

const {t} = useTranslation();

const time = [
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
   
];

const slot = [

{
    "slot": "Evening"
},
{
    "slot": "Morning"
},
{
    "slot": "Afternoon"
}
]


  return (
      <div className=' flex flex-col mt-7 mx-10 rounded-lg border-line_gray border'>

   <h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('selectHour')}</h1>

 <div className=' flex flex-row'>
  {
    time.map((e)=>(
        
<div className=' flex justify-center items-center w-[8%] py-1.5 font-abc text-[14px] font-semibold bg-[#022C4933] border-primary-color border-2 rounded-lg m-6'>
      <h1 className=' text-primary-color font-abc text-[13px] font-medium' >{e.time}</h1>
        </div>
    ))
   }
 </div>

  <h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('selectSlot')}</h1>

 <div className=' flex flex-row'>
  {
    slot.map((e)=>(
        
<div className=' flex justify-center items-center w-[8%] py-1.5 font-abc text-[14px] font-semibold bg-[#022C4933] border-primary-color border-2 rounded-lg m-6'>
      <h1 className=' text-primary-color font-abc text-[13px] font-medium' >{e.slot}</h1>
        </div>
    ))
   }
 </div>

 <h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('visitPrice')}</h1>

   <div className=' container mx-auto mt-3'>
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
        console.log(date)
    }}
    disabledDate={(date)=>{
        if(new Date(date).getDate > 24){
            return true
        }else{
            return false
        }
    }}
/>

<div className=' my-4 bg-primary-color rounded-lg justify-center items-center w-[10%] mx-10'>
 <p className=' text-white font-abc1 font-semibold text-sm items-center text-center py-3'>{t('save')}</p>
  </div>

    </div>
  );
}

export default DoctorSlots
