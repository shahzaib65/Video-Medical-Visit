import React, { useEffect, useState } from 'react';
import {useTranslation} from 'react-i18next';

import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { Navbar } from '../../components/Navbar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SelectBox } from '../../components/SelectBox';

const Home = () => {
    const {t} = useTranslation();
    const[doctors, setDoctors] = useState([])
    const [rating, setRating] = useState(4);
    const[doctorId, setDoctorId] = useState(null)
    const [patientID, setPatientID] = useState('66322b78865667866e2097d9')

     const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');


  const [toggled, setToggle] = useState("");
   

     const handleFilterChange = (event) => {
    const query = event.target.value;
    if(query.length === 0){
      axios.get("https://medico-backend-production.up.railway.app/api/service/fetchAll").then((response)=>{
     setDoctors(response.data.doctors)
      setFilterQuery('')
    }).catch((error)=>{
      console.log(error.message)
    });
    }else{
      console.log("query not empty")
      setFilterQuery(query);
    }
   
  };





 const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   const onSubmit = async () => {
   
 const filtered = doctors.filter(
      doctor =>
        doctor.firstName.toString().toLowerCase().includes(filterQuery.toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setFilteredDoctors(filtered);
    setDoctors(filteredDoctors)
    
    
  //   console.log(data);
    // axios.post("https://medico-backend-production.up.railway.app/api/service/findDoctor",data).then((response)=>{
    //  setDoctors(response.data.doctors)
    //   reset();
    // }).catch((error)=>{
    //   console.log(error.message)
    // });
  //  reset();
  };

  const likeDoctor = async(req,res)=>{
    
    const data = {
      "patientID": patientID,
      "doctorID": doctorId
    }
   
    
    axios.post("https://medico-backend-production.up.railway.app/api/patient/like",data).then((response)=>{
      console.log(response)
       
    }).catch((error)=>{
      console.log(error);
    })
  }

   useEffect(()=>{
      axios.get("https://medico-backend-production.up.railway.app/api/service/fetchAll").then((response)=>{
     setDoctors(response.data.doctors)
      reset();
    }).catch((error)=>{
      console.log(error.message)
    });
   },[])


   const[doctorService, setDoctorService] = useState([])
   useEffect(()=>{
      axios.get("https://medico-backend-production.up.railway.app/api/service/fetch").then((response)=>{
           setDoctorService(response.data.services)
      }).catch((error)=>{
        console.log(error.message);
      })
   },[])
 

  return (
    <div className=' flex flex-col'>
    <Navbar/>
<main className='flex w-screen h-auto mx-auto bg-hero-bg'>
      <div className=' flex flex-row w-full'>
      <div className='flex flex-col w-[50%] ml-16 h-96 mt-[120px]'>
       <h1 className=' font-abc font-bold text-[48px] text-primary-color'>{t('heroTitle')}</h1>
       <h6 className=' font-abc font-medium text-[16px] text-[#000000]'>Connettiti con medici qualificati in pochi minuti, direttamente dal tuo dispositivo. La nostra piattaforma ti guiderà direttamente verso la soluzione di cui hai bisogno, con accesso istantaneo ai migliori specialisti e  tutto il supporto necessario per gestire la tua salute senza stress.</h6>
        <div className=' flex justify-center items-center bg-primary-color py-4 w-[40%] rounded-full my-10'>
      <h1 className=' text-white font-abc text-[16px] font-semibold' >{t('makeAppointment')}</h1>
        </div>
        <div
         className=' flex bg-white rounded-lg w-auto py-0 flex-row'>
        <div className=' w-[80%] h-full flex-row flex mx-4'>
         {
                doctorService.length>0 && (
                  <SelectBox 
                  className="md:ml-[0] px-[20px] w-[90%] md:w-full bg-white text-light_blue-800_99 font-normal font-abc text-lg"
                  placeholderClassName="!placeholder:text-light_blue-800_99 !text-light_blue-800_99 leading-[normal] font-abc p-0 text-left text-lg"
                  indicator={
                   <p></p>
                  }
                  isMulti={false}
                  name="Services"
                   options={ doctorService.map((data) => ({
                   label: data.doctor_service,
                   value: data.doctor_service,
                     }))}
                  isSearchable={true}
                 size="md"
                  placeholder={t('specialist')}
                  onChange={(value) => {
                    const filtered = doctors.filter( doctor => doctor.specialist.toLowerCase().includes(value.toLowerCase()));
                    if(filtered.length>0){
                      setDoctors(filtered)
                    }else{
 axios.get("https://medico-backend-production.up.railway.app/api/service/fetchAll").then((response)=>{
     setDoctors(response.data.doctors)
      
    }).catch((error)=>{
      console.log(error.message)
    });
                    }
                  }}
               />
                )
              }
     
        </div>

         <div className=' w-[24%] h-full flex-row flex'>
        <input 
       
                       value={filterQuery}
                       onChange={handleFilterChange}
        
        className=' h-full text-start w-full px-2 border-0 outline-none mx-2 text-dark-gray font-abc font-medium text-[15px]' placeholder={t('firstName')}/>
     
        </div>

    

     <button onClick={()=>{
      onSubmit();
     }} className=' w-[15%]  bg-primary-color rounded-lg mx-2 h-[52px] my-2.5 flex flex-row justify-center items-center'>
     <p className=' mx-2 text-white font-abc font-medium text-[15px] text-center'>{t('search')}</p>
     <img className='ml-2' src='./search.svg' alt='search'/>
     </button>
        </div>
      </div>
      <div className=' flex justify-center items-center'>
      <img src='./hero_bg.svg' alt='doctor image'/>
      </div>
      </div>
    </main>

    <div className=' flex flex-row w-screen'>
<div className="grid lg:grid-cols-4 gap-5 md:grid-cols-1 sm:grid-cols-1 p-2 mx-1">
 {doctors.length>0 &&
                      doctors.map((e,index) => (
                      
             <div key={e._id} className=' rounded-lg m-2 border border-card_border w-96 h-auto flex flex-col'>
       <img className=' rounded-lg' src='./doctor_profile.svg' alt='doctor_profile'/>

     <div className=' flex flex-row justify-between mt-2 mx-2'>
     <h1 className=' font-abc font-bold text-[16px] text-[#000]'>{e.firstName} {e.lastName}</h1>
     
        <button onClick={()=>{
         setDoctorId(e._id);
          setToggle(e._id)
          likeDoctor();
        }}>   {
      toggled === e._id ? (<AiFillHeart size={22}/>) : (<AiOutlineHeart size={22}/>)
     } 
        </button>
     </div>
     <div className=' text-heart_outline font-abc font-medium text-[15px] mx-2'>
        {e.specialist}
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
    <p className=' text-sm font-abc text-gray_rating mx-1'>{e.location}</p>
    </div>

    <div className=' flex flex-row mx-2 mt-2'>
    <img src='./clock.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>Available on Friday March 12, 11:30PM</p>
    </div>

     {/* <div className=' flex flex-row mx-2 mt-2'>
    <img src='./payment.svg' alt='location'/>
    <p className=' text-sm font-abc text-gray_rating mx-1'>{}</p>
    </div> */}

    <div className=' flex flex-row justify-between w-full'>
    <p></p>
    {/* <Link to={`/booking/${e._id}`} className=' rounded-lg border border-primary-color ml-2 my-2 py-2 px-2 justify-center items-center'>
      <p className=' font-abc text-sm text-primary-color font-semibold'>{t()}</p>
    </Link> */}

     <Link to={`/booking/${e._id}`}  className=' cursor-pointer rounded-lg bg-primary-color mr-2 my-2 py-2 px-3 justify-center items-center'>
      <p className=' font-abc text-sm text-white font-semibold'>{t('checkAvailability')}</p>
    </Link>

    </div>
   

    </div>
        
                      ))}
  </div>
    </div>
    </div>
    
  )
}

export default Home
