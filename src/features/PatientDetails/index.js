import React, { useState } from "react";
import profile from "../../assets/doctor_profile.svg";
import { useTranslation } from "react-i18next";
import DataTable from "react-data-table-component";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
const PatientDetails = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(true)


  const data = [
    {
        "ID": "1234",
        "patient": "Shahzaib",
        "appointmentDate": "4 mongio",
        "bookingDate": "27-04-2024",
        "amount": "25",
        "status": t(('upcoming'))
    }
  ]


const columns = [
    {
      name: t('ID'),
      selector: (row) => `${row.ID}`
    },
    {
         name: t('patient'),
      selector: (row) => `${row.patient}`
    },
    {
         name: t('appointmentDate'),
      selector: (row) => `${row.appointmentDate}`
    },
    {
         name: t('bookingDate'),
      selector: (row) => `${row.bookingDate}`
    },
     {
         name: t('amount'),
      selector: (row) => `${row.amount}`
    },
     {
         name: "Status",
         cell: row => (
      <div style={{ backgroundColor: '#7CB839', paddingLeft:'20px',paddingRight: '20px', paddingTop: '7px', paddingBottom: '7px', fontSize: '14px', fontWeight: '600', borderRadius: '10px',color: '#fff', textAlign: 'center' }}>
        {row.status}
      </div>
    ),
    //   selector: (row) => `${row.status}`
    }
  ];


  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#E3E3E3",
        color: "#000000",
        
      },
    },
    header: {
      style: {
        textAlign: 'center',
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "600",
        textAlign: 'center'
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        backgroundColor: "white",
        // color: "#333" /* set font color */,
        // border: "0.1px solid #ccc",
      },
    },
    // pagination: {
    //   style: {
    //     color: "#000",
    //   },
    //   button: {
    //     color: "#000",
    //   },
    // },
  };



  return (
    <div className=" flex flex-col">
      <div className="flex flex-row justify-between mx-[60px] h-auto mt-[80px]">
        <div className=" flex flex-row">
          <img
            className=" rounded-full w-36 h-36 border-2 border-primary-color object-cover"
            src={profile}
            alt="profile"
          />
          <div className=" flex flex-col mx-9 mt-4">
            <h1 className=" font-abc font-semibold text-[24px] text-primary-color">
              Shahzaib
            </h1>
            <h3 className=" font-abc font-normal text-[18px] text-gray_rating">
              Asthama
            </h3>
            <h6 className=" font-abc font-semibold text-[14px] text-primary-color">
              {t('appointmentTime')}: 
               12:00-2:00
            </h6>
            <div className=" flex flex-row mt-4"></div>
          </div>
        </div>

        <button className=" flex justify-center flex-row items-center bg-primary-color px-3 h-11 rounded-lg my-10">
         <IoChatbubbleEllipsesOutline color="white" className=" mx-2"/>

          <h1 className=" text-white font-abc text-[13px] font-medium">
            {t("sendMessage")}
          </h1>
        </button>
      </div>


   <div className=' bg-line_gray h-px mt-4 mx-6'/>

  

   <div className={`font-abc cursor-pointer flex flex-col w-[150px]  font-medium text-[20px] text-dark-gray py-2.5 mt-1 mx-20 ${
              selected ? ' text-primary-color border-b-2 border-primary-color' : ' text-[#000] border-[#fff]'
            }`} >
     {t('appointment')}
   </div>

    <div className='w-full h-auto mt-5 gap-4 bg-slate-100 rounded-xl p-5 flex flex-col'>
<DataTable
          columns={columns}
          fixedHeader
          pagination
          data={data}
          customStyles={customStyles}
        />
    </div>

    </div>
  );
};

export default PatientDetails;
