import React from 'react'
import success from "../assets/success.gif"

const Success = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>

    <img src={success} alt='success'/>
    <p className=' font-abc text-lg text-primary-color font-semibold'> Payment Successful</p>
      
    </div>
  )
}

export default Success
