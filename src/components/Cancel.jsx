import React from 'react'
import cancel from "../assets/cancel.gif"

const Cancel = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>

    <img src={cancel} alt='cancel'/>
    <p className=' font-abc text-lg text-primary-color font-semibold'> Payment Cancelled</p>
      
    </div>
  )
}

export default Cancel
