import React from 'react'
import success from "../assets/success.gif"
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className=' flex justify-center items-center mt-20 flex-col'>

    <img className=' w-20 h-20' src={success} alt='success'/>
    <p className=' font-abc text-[40px] text-primary-color font-semibold'> Payment Successful</p>

      <Link to="/home">
      Go back to home
      </Link>
    </div>
  )
}

export default Success
