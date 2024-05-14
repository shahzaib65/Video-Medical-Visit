import React,{useState,useRef} from 'react'
import { DoctorNavbar } from '../../components/DoctorNavBar';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import Select from "react-select";

const DoctorEditProfilePage = () => {

    const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

    const [signatureFile, setSignatureFile] = useState(null);
  const [Sigimage, setSigImage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setImage(URL.createObjectURL(e.target.files[0]));
  };



   const fileSigRef = useRef(null);
  const handleSigImageClick = () => {
    fileSigRef.current.click();
  };
  const handleSigChange = (e) => {
    const file = e.target.files[0];
    setSignatureFile(file);
    setSigImage(URL.createObjectURL(e.target.files[0]));
  };


   const options = [
    { value: t("Male"), label: t("Male") },
    { value: t("Female"), label: t("Female") },
    {
      value: t("I prefer not to specify"),
      label: t("I prefer not to specify"),
    },
  ];


    const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
    const onSubmit = (data) => {
    setLoading(true);
    if (selectedFile === null) {
      setLoading(false);
      alert("Select the file first");
    } else {
      const form = new FormData();
      form.append("firstName", data.firstName);
      form.append("lastName", data.lastName);
      form.append("email", data.email);
      form.append("phoneNumber", data.phoneNumber);
      form.append("dob", data.dob);
      form.append("location", data.location);
      form.append("postal_code", data.postalCode);
      
      form.append("sex", selectedOption.value);
      form.append("image", selectedFile);
      form.append("id", localStorage.getItem("patientId"));

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      axios
        .post(
          "https://medico-backend-production.up.railway.app/api/patient/uploadData",
          form,
          config
        )
        .then((response) => {
          setLoading(false);
          setImage(null);
          reset();
          alert("Post uploaded");
        })
        .catch((error) => {
          console.log(error);
          // setError(error)
        });
    }
  };

  return (
    <div className=' flex flex-col'>
     <DoctorNavbar/>

      <div className=" h-[1px] w-full bg-line_gray"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col rounded-lg m-[60px] border border-line_gray"
      >
        <div className=" flex justify-start items-start m-10">
          <input
            className=" outline-none"
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <img
            className=" rounded-full w-[100px] h-[100px] border-2 border-primary-color object-cover"
            src={image ? image : "./doctor_profile.svg"}
            alt="profile"
          />
          <div className=" flex flex-col mx-5 my-2">
            <div
              onClick={handleImageClick}
              className=" cursor-pointer bg-primary-color rounded-lg font-abc font-medium text-[13px] text-white px-2.5 py-1.5"
            >
              {t("changePhoto")}
            </div>

            <div className=" cursor-pointer bg-white rounded-lg border border-red font-abc font-medium text-[13px] text-red px-2.5 py-1.5 my-2">
              {t("deletePhoto")}
            </div>
          </div>
        </div>

        <div className=" flex flex-row mx-10">
          <div className=" w-[50%] flex flex-col justify-start items-start">
            <h1 className=" font-abc font-medium text-[14px] text-primary-color">
              {t("firstName")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="abc"
              {...register("firstName", {
                required: t("first_name_required"),
              })}
            ></input>
            {errors.firstName && (
              <p className="text-red">{errors.firstName.message}</p>
            )}

            <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("Email")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="shahzaib@gmail.com"
              {...register("email", {
                required: t("email_required"),
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: t("email_validation"),
                },
              })}
            ></input>
            {errors.email && <p className="text-red">{errors.email.message}</p>}

            <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("location")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="pakistan"
              {...register("location", {
                required: t("location_required"),
              })}
            ></input>
            {errors.location && (
              <p className="text-red">{errors.location.message}</p>
            )}

            <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("dob")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="DD/MM/YYYY"
              {...register("dob", {
                required: t("dob_required"),
              })}
            ></input>
            {errors.dob && <p className="text-red">{errors.dob.message}</p>}


  <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("Years Of Studies / Training / Program")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="10 Marzo 1993-194"
              {...register("studies", {
                required: t("studies"),
              })}
            ></input>
            {errors.studies && (
              <p className="text-red">{errors.studies.message}</p>
            )}

 <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("specialist")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="Allergy"
              {...register("specialist", {
                required: t("specialist"),
              })}
            ></input>
            {errors.studies && (
              <p className="text-red">{errors.specialist.message}</p>
            )}

          </div>

          <div className=" w-[50%] flex flex-col justify-start items-start">
            <h1 className=" font-abc font-medium text-[14px] text-primary-color">
              {t("lastName")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="abc"
              {...register("lastName", {
                required: t("last_name_required"),
              })}
            ></input>
            {errors.lastName && (
              <p className="text-red">{errors.lastName.message}</p>
            )}

            <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("phoneNo")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="12325626232"
              {...register("phoneNumber", {
                required: t("phone_required"),
              })}
            ></input>
            {errors.phoneNumber && (
              <p className="text-red">{errors.phoneNumber.message}</p>
            )}

            <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("postalCode")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="5678"
              {...register("postalCode", {
                required: t("postal_code_required"),
              })}
            ></input>
            {errors.postalCode && (
              <p className="text-red">{errors.postalCode.message}</p>
            )}

            <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("sex")}
            </h1>

            <Select
              className=" w-[70%] font-abc1 mt-2 font-normal  rounded-[5px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
              value={selectedOption}
              onChange={handleChange}
              options={options}
            />


      <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("special_recognition")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="Best doctor"
              {...register("recognition", {
                required: t("recognition"),
              })}
            ></input>
            {errors.studies && (
              <p className="text-red">{errors.recognition.message}</p>
            )}


     <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
              {t("digital_signature")}
            </h1>
           <input
            className=" outline-none"
            type="file"
            style={{ display: "none" }}
            ref={fileSigRef}
            onChange={handleSigChange}
          />

          <div className=' flex flex-row mt-1'>
  <img
            className=" rounded-full w-[60px] h-[60px] border-2 border-primary-color object-cover"
            src={Sigimage ? Sigimage: "./doctor_profile.svg"}
            alt="profile"
          />

            <div
              onClick={handleSigImageClick}
              className=" cursor-pointer bg-primary-color rounded-lg font-abc font-medium text-[13px] text-white px-2.5 h-10 text-center pt-2 mx-3 mt-1.5"
            >
              {t("select_signature")}
            </div>
          </div>
        

          </div>
        </div>


 <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color mx-10">
              {t("Office/hospital address")}
            </h1>
            <input
              className=" w-[70%] font-abc1 mt-2 mx-10 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
              placeholder="Pakistan"
              {...register("hospital", {
                required: t("hospital"),
              })}
            ></input>
            {errors.studies && (
              <p className="text-red">{errors.hospital.message}</p>
            )}
      

        <div className=" flex justify-end items-end mx-4 my-2">
          <button
            type="submit"
            className=" bg-primary-color px-6 py-2 m-4 rounded-lg items-end font-abc font-bold text-white text-sm"
          >
            {loading ? <ClipLoader color="#FFFFFF" size={30} /> : t("save")}
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default DoctorEditProfilePage
