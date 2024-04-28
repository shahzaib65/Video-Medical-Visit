import React,{useState} from 'react';
import { useTranslation } from 'react-i18next';

const DoctorProfile = () => {
    const {t} = useTranslation();
    const [activeTab, setActiveTab] = useState('overview');

 const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=' flex flex-col'>

     <div className='flex flex-row justify-between mx-[60px] h-auto mt-[80px]'>

    <div className=' flex flex-row'>
    <img className=' rounded-full w-40 h-40 border-2 border-primary-color object-cover' src='./doctor_profile.svg' alt='profile'/>
    <div className=' flex flex-col mx-9 mt-2'>
    <h1 className=' font-abc font-semibold text-[24px] text-primary-color'>Dr.Shahzaib</h1>
    <h3 className=' font-abc font-normal text-[18px] text-gray_rating'>Dentist</h3>
    <h6 className=' font-abc font-normal text-[14px] text-gray_rating'>National lahore</h6>
    <div className=' flex flex-row mt-4'>

    <div className=' rounded-lg bg-primary-color text-center text-white px-3.5 py-1.5 font-abc font-medium text-[13px]'>
      $50/{t('session')}
    </div>

    <div className=' rounded-lg bg-primary-color text-center text-white px-3.5 py-1.5 font-abc font-medium text-[13px] mx-2'>
      $25/{t('followUp')}
    </div>

    </div>
    </div>
    </div>

 <div className=' flex justify-center items-center bg-primary-color px-3 h-11 rounded-lg my-10'>
      <h1 className=' text-white font-abc text-[13px] font-medium' >{t('bookAppointment')}</h1>
        </div>
     </div>

     <div className=' bg-line_gray h-px mt-4 mx-6'/>


    <div className=' flex flex-col rounded-lg border-line_gray border m-6'>

   <div className=' flex flex-row  my-3 mx-10'>

    <button
          className={`px-6 py-2 rounded-lg font-abc text-[16px] font-semibold ${activeTab === 'overview' ? ' bg-primary-color text-white' : ' bg-white text-tab_unselected'}`}
          onClick={() => handleTabChange('overview')}>
          {t('overview')}
        </button>

         <button
          className={`px-6 py-2 rounded-lg font-abc text-[16px] font-semibold ${activeTab === 'reviews' ? ' bg-primary-color text-white' : ' bg-white text-tab_unselected'}`}
          onClick={() => handleTabChange('reviews')}
        >
          {t('reviews')}
        </button>
   </div>


    <div className='flex flex-col justify-start text-start mx-10 my-4'>
    <h1 className=' font-abc font-bold text-[24px] text-[#000000]'>{t('aboutMe')}</h1>
    <p className=' font-abc font-medium text-[16px] text-gray_rating'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>

  
  <h1 className=' font-abc font-bold text-[24px] text-[#000000] mt-6'>{t('specialist')}</h1>
  <p className=' font-abc font-medium text-[16px] text-gray_rating'>Urologist</p>


  <h1 className=' font-abc font-bold text-[24px] text-[#000000] mt-6'>{t('specialist')}</h1>
  <p className=' font-abc font-medium text-[16px] text-gray_rating'>Urologist</p>


  <h1 className=' font-abc font-bold text-[24px] text-[#000000] mt-6'>{t('locations')}</h1>
  <p className=' font-abc font-medium text-[16px] text-gray_rating'>Glowing Smiles Family Dental Clinic</p>


  <h1 className=' font-abc font-bold text-[24px] text-[#000000] mt-6'>{t('businessHours')}</h1>
  <p className=' font-abc font-medium text-[16px] text-gray_rating'>12 am to 6 pm</p>


    </div>


    </div>

    </div>
  )
}

export default DoctorProfile
