import React from 'react'
import Psycology from "../assets/psycology.png";
import Dermatology from "../assets/dermatology.png"
import Pedriatic from "../assets/pediatric.png";
import Odontoiatria from "../assets/odontoiatria.png";
import Medicana from "../assets/medicina.png"
import Oftalmolgia from "../assets/oftalmologia.png"
import Doctor from "../assets/doctor1.png"
import Medicine from "../assets/medicine.png"
import Aid from "../assets/medical_aid.png"
import Girl from "../assets/girl.svg"
import Medical from "../assets/medical.svg"
import Tick from "../assets/tick.svg"
import New from "../assets/new.svg"
import Second from "../assets/second.svg";


const Features = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <p className=' font-bold text-[48px] text-primary-color mt-[90px]'>Cerca il tuo Medico per Specializzazione</p>
      <div className=' flex flex-row justify-evenly mx-10 gap-[65px] mt-[65px]'>

       <div className=' flex flex-col mt-4 justify-center items-center'>
       <img className=' h-[70px] w-[70px]' src={Psycology} alt='psycology'/>
       <p className=' font-abc font-medium text-[#757575] text-[18px] mt-[5px]'>Psicologia</p>
       </div>

       <div className=' flex flex-col mt-4 justify-center items-center'>
       <img className=' h-[70px] w-[70px]' src={Dermatology} alt='dermatology'/>
       <p className=' font-abc font-medium text-[#757575] text-[18px] mt-[5px]'>Dermatologia</p>
       </div>


        <div className=' flex flex-col mt-4 justify-center items-center'>
       <img className=' h-[70px] w-[70px]' src={Pedriatic} alt='psycology'/>
       <p className=' font-abc font-medium text-[#757575] text-[18px] mt-[5px]'>Pediatria</p>
       </div>


      

        <div className=' flex flex-col mt-4 justify-center items-center'>
       <img className=' h-[70px] w-[70px]' src={Odontoiatria} alt='psycology'/>
       <p className=' font-abc font-medium text-[#757575] text-[18px] mt-[5px]'>Odontoiatria</p>
       </div>

        <div className=' flex flex-col mt-4 justify-center items-center'>
       <img className=' h-[70px] w-[70px]' src={Medicana} alt='psycology'/>
       <p className=' font-abc font-medium text-[#757575] text-[18px] mt-[5px]'>Medicina dello Sport</p>
       </div>

        <div className=' flex flex-col mt-4 justify-center items-center'>
       <img className=' h-[70px] w-[70px]' src={Oftalmolgia} alt='psycology'/>
       <p className=' font-abc font-medium text-[#757575] text-[18px] mt-[5px]'>Oftalmologia</p>
       </div>




      </div>

  <div className=' mx-auto mt-[54px] text-primary-color font-bold text-[48px] w-full max-w-[1200px] flex flex-col items-center gap-[93px] md:gap[69px] md:p-5 sm:gap-[46px]'>
    La nostra Piattaforma
  </div>

  <div className=' flex flex-row gap-[66px] mt-[30px]'>

  <div className=' flex flex-col items-center bg-[#BDD2E180] w-[356px] h-[490px] rounded-[30px]'>
   <img className=' w-[140px] h-[140px] mt-[94px]' src={Doctor} alt='doctor'/>
   <p className=' font-abc font-bold text-[22px] text-primary-color mt-[67px]'>Monitoraggio costante</p>
   <p className=' mx-auto font-abc font-normal text-[13px] mt-[10px] text-center'>Attraverso le tue app, la nostra piattaforma ti garantirà un controllo continuo della tua salute, con cure personalizzate, professionalità e la grande passione dei nostri Specilisti.
</p>
  </div>


 <div className=' flex flex-col items-center bg-primary-color w-[356px] h-[490px] rounded-[30px]'>
   <img className=' w-[140px] h-[140px] mt-[94px]' src={Medicine} alt='doctor'/>
   <p className=' font-abc font-bold text-[22px] text-white mt-[67px]'>Cure a portata di click</p>
   <p className=' mx-2 font-abc font-normal text-white text-[13px] mt-[10px] text-center'>Con la telemedicina, il consulto medico arriva dove sei tu. Dimentica viaggi e attese: ora l'assistenza sanitaria è immediata e diretta, ovunque tu sia.

</p>
  </div>

   <div className=' flex flex-col items-center bg-[#BDD2E180] w-[356px] h-[490px] rounded-[30px]'>
   <img className=' w-[140px] h-[140px] mt-[94px]' src={Aid} alt='doctor'/>
   <p className=' font-abc font-bold text-[22px] text-primary-color mt-[67px]'>Addio alle sale d’Attesa</p>
   <p className=' mx-2 font-abc font-normal text-black text-[13px] mt-[10px] text-center'>Prenota una visita, parla con il medico e ottieni tutte le risposte che cerchi.  Risparmia tempo prezioso e costi ulteriori, godendoti l'assistenza sanitaria dal comfort di casa tua.
</p>
  </div>



  

  </div>

  <div className=' flex flex-row h-[800px] mt-[85px] w-full bg-[#D6E4EC] px-14 pb-[51px] pt-[109px] md:p-5'>
  <div className=' flex flex-row justify-between items-start gap-5'>
  <div className=' w-[52%] flex flex-col'>
 <p className=' ml-[140px] font-abc1 mt-[40px] font-bold text-[40px]'>
    Dedicati alla tua Salute e 
incontra i migliori
Professionisti
 </p>

  <img className=' ml-[140px] mt-[20px]' src={New} alt='new'/>
   <div className=' w-full justify-center items-start flex ml-[50px]'>
<div className=' flex justify-center items-center bg-primary-color py-4 w-[40%] rounded-full my-10 '>
      <h1 className=' text-white font-abc text-[16px] font-semibold' >Consulta i nostri Specialisti</h1>
        </div>
   </div>

   

  </div>

  <div className=' w-[44%] flex justify-center items-center mt-[80px]'>

  <img src={Second} alt=''/>

  </div>

  </div>

  </div>

  <div className=' flex flex-col justify-center items-center'>
 <p className=' text-[#022C49] font-abc1 text-[28px] mt-[40px]'>Come Funziona la nostra Piattaforma?</p>
 <p className=' font-abc1 font-bold text-[36px]'>Tutto ciò di cui hai bisogno è a portata di click!</p>
  </div>


  <div className=' flex flex-row mx-10 w-full'>
  
  <div className=' w-[44%] flex justify-end items-end'>
<img src={Girl} alt='image'/>
  </div>

  <div className=' flex flex-col mt-[140px] ml-[100px]'>
  <img className=' w-[60px] h-[60px]' src={Medical} alt='medical'/>
  <p className=' font-abc1 font-bold text-[32px]'>Prenota il tuo Appuntamento in <br/> 3 semplici passi</p>

  <div className=' flex flex-row justify-start mt-3 gap-1'>
<img src={Tick} alt='tick'/>
<p className=' text-[#606B85] font-abc1 font-normal text-[16px]'>Seleziona lo Specialista che preferisci ricercando per nome o specializzazone</p>
  </div>

    <div className=' flex flex-row justify-start mt-3 gap-1'>
<img src={Tick} alt='tick'/>
<p className=' text-[#606B85] font-abc1 font-normal text-[16px]'>Consulta la sua Agenda e scegli l’appuntamento che più si adatta alle tue esigenze</p>
  </div>


    <div className=' flex flex-row justify-start mt-3 gap-1'>
<img src={Tick} alt='tick'/>
<p className=' text-[#606B85] font-abc1 font-normal text-[16px]'>Paga con un click e attendi il giorno del Consulto!</p>
  </div>

  </div>

  </div>



    </div>
  )
}

export default Features
