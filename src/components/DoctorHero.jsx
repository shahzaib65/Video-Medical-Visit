import React from 'react'
import {useTranslation} from 'react-i18next';
const DoctorHero = () => {

    const {t} = useTranslation();

  return (
    <main className='flex w-screen h-auto mx-auto bg-hero-bg'>
      <div className=' flex flex-row w-full'>
      <div className='flex flex-col w-[50%] ml-16 h-96 mt-[120px]'>
       <h1 className=' font-abc font-bold text-[48px] text-primary-color'>{t('heroTitle')}</h1>
       <h6 className=' font-abc font-medium text-[16px] text-[#595B5C]'>Connettiti con medici qualificati in pochi minuti, direttamente dal tuo dispositivo. La nostra piattaforma ti guiderà direttamente verso la soluzione di cui hai bisogno, con accesso istantaneo ai migliori specialisti e  tutto il supporto necessario per gestire la tua salute senza stress.</h6>
        
        <div className=' flex bg-white rounded-lg w-auto py-0 flex-row mt-20'>
        <div className=' w-[85%] h-full flex-row flex'>
       
        <input className=' h-full text-start w-[24%] px-2 border-0 outline-none mx-2 text-dark-gray font-abc font-medium text-[15px]' placeholder={t('patientName')}/>
        </div>
     <div className=' w-[15%]  bg-primary-color rounded-lg mx-2 h-[52px] my-2.5 flex flex-row justify-center items-center'>
     <p className=' mx-2 text-white font-abc font-medium text-[15px] text-center'>{t('search')}</p>
     <img className='ml-2' src='./search.svg' alt='search'/>
     </div>
        </div>
      </div>
      <div className=' flex justify-center items-center'>
      <img src='./hero_bg.svg' alt='doctor image'/>
      </div>
      </div>
    </main>
  );
}

export default DoctorHero
