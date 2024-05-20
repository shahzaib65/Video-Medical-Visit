
import React,{useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../../components/Navbar';
import profile from "../../assets/doctor_profile.svg";
const PatientBooking = () => {
  
const {t} = useTranslation();

 const [selectedTime, setSelectedTime] = useState(null);
 const [selectedDate, setSelectedDate] = useState(null);
  const [hourTime, setHourTime] = useState(null);
    const [Date, setDate] = useState(null);

const[session_fee,setSessionFee] = useState('')


  const [data,setData] = useState([])

     const {id} = useParams();
    

    const [activeTab, setActiveTab] = useState('');
    const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

    const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6; // Number of items to display at a time

  const handleScrollLeft = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };

  const handleScrollRight = () => {
    setStartIndex(Math.min(data.length - itemsPerPage, startIndex + itemsPerPage));
  };

  const handleTime = (index) => {
    setSelectedTime(index);
  };
  const handleDate = (index) =>{
    setSelectedDate(index);
  }


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

 const[doctorInfo,setDoctorInfo] = useState('')
useEffect(()=>{
  const data = {
    "doctorId": id
  }

   axios.post("https://medico-backend-production.up.railway.app/api/slots/getSlots",data).then((response)=>{
    setDoctorInfo(response.data.doctorInfo);
    setData(response.data.slot)
   }).catch((error)=>{
    console.log(error.message);
   })
},[])

 const onSubmit = ()=>{
  if(Date === null){
    alert("Please Select the date")
  }else if(hourTime === null){
    alert("Please Select the hour")
  } else if(session_fee === null){
    alert("Please select the  visit fee")
  }else{
    const data = {
      "patientId": localStorage.getItem("patientId"),
      "doctorId": id,
      "time": hourTime,
      "session_fee": session_fee,
      "date": Date
    }
   axios.post("https://medico-backend-production.up.railway.app/api/booking/register",data).then((response)=>{
    
    console.log(id,doctorInfo.firstName+doctorInfo.lastName,session_fee,doctorInfo.specialist)
    makePayment(id,doctorInfo.firstName+doctorInfo.lastName,session_fee,doctorInfo.specialist)
     
     
    }).catch((error)=>{
      console.log(error.message)
    });
  }
      
 }

 const makePayment = async(doctorId,name,price,service) => {
  

   const patientId = localStorage.getItem("patientId")
       try {
        const res = await fetch("http://192.168.1.5:5000/api/payment/checkout",{
            method: "POST",
            headers: { 
              'content-type': 'application/json' },
            mode: "cors", 
            body: JSON.stringify({
              items: [
                {
                    id: 1,
                quantity: 1,
                price: price,
                name: name,
                description: "testing the data"
                }
            ],
             patientId: patientId,
             doctorId: doctorId,
             visit_fee: price,
             service: service
           }),
        });
        const data = await res.json()
        console.log(data)
        window.location = data.url
       } catch (error) {
        console.log(error.message)
       }

 }


  return (
   <div className=' flex flex-col'>

   <Navbar/>

    <div className=' flex flex-col mt-7 mx-10 rounded-lg border-line_gray border'>


    <div className='flex flex-row justify-between mx-[60px] h-auto mt-[80px]'>
      
    <div className=' flex flex-row'>
    <img className=' rounded-full w-40 h-40 border-2 border-primary-color object-cover' src={profile} alt='profile'/>
    <div className=' flex flex-col mx-9 mt-2'>
    <h1 className=' font-abc font-semibold text-[24px] text-primary-color'>{doctorInfo.firstName} {doctorInfo.lastName}</h1>
    <h3 className=' font-abc font-normal text-[18px] text-gray_rating'>{doctorInfo.specialist}</h3>
    <h6 className=' font-abc font-normal text-[14px] text-gray_rating'>{doctorInfo.location}</h6>
   {
    data.length>0 &&( <div className=' flex flex-row mt-4'>
      <button
          className={`px-6 py-2 rounded-lg font-abc text-[16px] font-semibold ${activeTab === 'visit' ? ' bg-primary-color text-white' : ' bg-[#D9D9D9] text-[#000]'}`}
          onClick={() => {
handleTabChange('visit');
setSessionFee(data[0].visit_price)
          }}
        >
       
        ${data[0].visit_price}/{t('session')} 
       
        </button>

  <button
          className={`px-6 py-2 rounded-lg ont-abc text-[16px] mx-2 font-semibold ${activeTab === 'followUp' ? 'bg-primary-color text-white' : 'bg-[#D9D9D9] text-[#000]'}`}
          onClick={() => {
            handleTabChange('followUp');
            setSessionFee(data[0].follow_up_price);
          }}
        >
         ${data[0].follow_up_price}/{t('followUp')}
        </button>

    </div>)
   }
    </div>
    </div>

 <button onClick={onSubmit} className=' flex justify-center items-center bg-primary-color px-3 h-11 rounded-lg my-10'>
      <h1 className=' text-white font-abc text-[13px] font-medium' >{t('bookAppointment')}</h1>
        </button>
    

    </div>

     <div className=' bg-line_gray h-px mt-4 mx-6'/>

     <div className=' flex flex-row justify-between'>
      <button onClick={handleScrollLeft}><FaChevronLeft size={30} className=' text-primary-color ml-4 my-6'/></button>
        <div className=' flex flex-row w-auto'>
          {data.slice(startIndex, startIndex + itemsPerPage).map((item,index) => (
            <div onClick={()=>{
              handleDate(index);
              setDate(item.date);
            }} className={`font-abc cursor-pointer flex flex-col  font-medium text-[20px] text-dark-gray mt-6 mx-10 ${
              selectedDate === index ? ' text-primary-color border-primary-color' : ' text-[#000] border-[#000]'
            }`} key={item.id}>
              <p>{item.date}</p>
              {/* <div className={` bg-primary-color w-20 h-1 ${selectedDate === index ? ' bg-primary-color': 'bg-white'}`}></div> */}
            </div>
          ))}
        </div>
        <button onClick={handleScrollRight}><FaChevronRight size={30} className=' text-primary-color mr-4 my-6'/></button>
  
     </div>

      <div className=' bg-line_gray h-px mt-2 mx-0'/>

     <h1 className=' font-abc font-bold text-[24px] m-4 text-[#000000]'>{t('selectHour')}</h1>


      <div className=' flex flex-row'>
  {
    data.map((e,index)=>(
        
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
    </div>

   </div>
  )
}

export default PatientBooking
