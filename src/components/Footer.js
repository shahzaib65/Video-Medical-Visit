import React from 'react'
import Fb from "../assets/fb.svg"
import Twitter from "../assets/twitter.svg"
import Linkedin from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#00528A] mt-[120px] h-[380px]'>
   <div className='flex flex-row '>
       <div className=' ml-[60px] flex flex-col mt-[45px] w-[30%]'>
      <img className=' w-[85px] h-[85px]' src='./Logo.svg' alt=''/>
      <p className=' font-abc1 font-medium text-[12px] text-white mt-2'>
        Medical Video Visit  è un marchio di proprietà di HCLINC SRL, Via Polveriera n.49 95030 Mascalucia (CT), Aut. San. n.40676/DP del 27/01/2021 rilasciata dall’Azienda Sanitaria Provinciale di Catania.
      </p>

      <div className=' flex flex-row gap-[20px] mt-[60px]'>
    <img src={Fb} alt='facebook'/> 
    <img src={Twitter} alt='twitter'/>
    <img src={Linkedin} alt='linkedin'/>
      </div>

      </div>


  <div className=' w-[20%] flex flex-col items-center mt-14'>
  <p className=' font-abc1 font-semibold text-[20px] text-white'>
    Page
  </p>

  <p className=' mt-[18px] text-white font-abc1 font-medium text-[16px]'>Termini&Condizioni</p>

  </div>

  <div className=' w-[10%] flex flex-col items-start mt-14 '>
  <p className=' font-abc1 font-semibold text-[20px] text-white'>
    Book now
  </p>

  <p className=' mt-[18px] text-white font-abc1 font-medium text-[16px]'>Appointment</p>

  </div>

  <div className=' w-[30%] flex flex-col items-start mt-14'>
  <p className=' font-abc1 font-semibold text-[20px] text-white'>
    Contact US
  </p>

  <p className=' mt-[18px] text-white font-abc1 font-medium text-[16px]'>Via Polveriera,49, 95030 Mascalucia (CT) </p>

  <p className=' mt-[18px] text-white font-abc1 font-medium text-[16px]'>+39 3516966904</p>

  <p className=' mt-[18px] text-white font-abc1 font-medium text-[16px]'>info@medicalvideovisit.com</p>

  </div>

   </div>

  <div className=' mt-10 bg-white h-[1px] w-full'></div>

  <div className=' flex flex-row justify-center items-center gap-4'>
  <p className=' font-abc font-normal text-sm text-white mt-3'>Copyright@2024</p>
  <p className=' font-abc font-bold text-white text-[13px] mt-3'>Medical Video Visit</p>
  </div>
  

    </div>
  )
}

export default Footer
