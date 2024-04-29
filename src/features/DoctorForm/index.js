import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const DoctorForm = () => {
  const { t } = useTranslation();
let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    axios.post("https://medico-backend-production.up.railway.app/api/doctor/register",data).then((response)=>{
     console.log(response);
     navigate("/doctorLogin");
      reset();
    }).catch((error)=>{
      console.log(error.message)
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col rounded-lg border border-line_gray mx-10 my-5"
    >
      <div className=" flex items-center flex-col w-full mt-10">
        <img src="./Logo.svg" alt="Logo" />
        <h1 className=" text-black font-abc1 text-[32px] font-bold">
          {t("Register")}
        </h1>
        <h3 className=" text-[16px] text-dark-gray font-abc1 font-medium">
          {t("createAccount")}
        </h3>
      </div>

      <div className=" flex flex-row mx-10">
        <div className=" w-[50%] flex flex-col justify-start items-start my-3">
          <h1 className=" font-abc font-medium text-[14px] text-primary-color">
            {t("firstName")}
          </h1>
          <input
            className="w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            placeholder={t("enterFirst")}
            {...register("firstName", {
              required: "First name is required",
            })}
          ></input>

          {errors.firstName && (
            <p className="text-red">{errors.firstName.message}</p>
          )}

          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("Email")}
          </h1>
          <input
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            placeholder="shahzaib@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                message: "Email format is not valid",
              },
            })}
          ></input>
          {errors.email && <p className="text-red">{errors.email.message}</p>}

          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("locations")}
          </h1>
          <input
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            placeholder={t("enterLocation")}
            {...register("location", {
              required: "Location name is required",
            })}
          ></input>

          {errors.city && <p className="text-red">{errors.location.message}</p>}

          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("studiesYear")}
          </h1>
          <input
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            placeholder="12/12/1999-12-12/2004"
            {...register("studies", {
              required: "studies record is required",
            })}
          ></input>
          {errors.studies && (
            <p className="text-red">{errors.studies.message}</p>
          )}

          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("specialist")}
          </h1>
          <input
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            placeholder={t('enterSpecialist')}
            {...register("specialist", {
              required: "Specialist is required",
            })}
          ></input>
          {errors.specialist && (
            <p className="text-red">{errors.specialist.message}</p>
          )}

          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("signature")}
          </h1>
          <input
          placeholder={t('enterSignature')}
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            {...register("signature", {
              required: "Signature is required",
            })}
          ></input>

          {errors.signature && (
            <p className="text-red">{errors.signature.message}</p>
          )}
        </div>

        <div className=" w-[50%] flex flex-col justify-start items-start my-3">
          <h1 className=" font-abc font-medium text-[14px] text-primary-color">
            {t("lastName")}
          </h1>
          <input
          placeholder={t('enterLast')}
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            {...register("lastName", {
              required: "Last name is required",
            })}
          ></input>

          {errors.lastName && (
            <p className="text-red">{errors.lastName.message}</p>
          )}

          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("phoneNo")}
          </h1>
          <input
          placeholder={t('enterPhone')}
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            {...register("phoneNo", {
              required: "Phone number is required",
            })}
          ></input>
          {errors.phoneNo && (
            <p className="text-red">{errors.phoneNo.message}</p>
          )}
          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("postalCode")}
          </h1>
          <input
          placeholder={t('enterPostal')}
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            {...register("postalCode", {
              required: "Postal code is required",
            })}
          ></input>
          {errors.postalCode && (
            <p className="text-red">{errors.postalCode.message}</p>
          )}

          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("dob")}
          </h1>
          <input
          placeholder={t('enterDob')}
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            {...register("dob", {
              required: "Date of birth is required",
            })}
          ></input>

          {errors.dob && <p className="text-red">{errors.dob.message}</p>}

          <h1 className=" font-abc font-medium text-[14px] mt-7 text-primary-color">
            {t("sex")}
          </h1>
          <input
          placeholder={t('enterSex')}
            className=" w-[80%] font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
            {...register("gender", {
              required: "Gender is required",
            })}
          ></input>
          {errors.gender && <p className="text-red">{errors.gender.message}</p>}
        </div>
      </div>

      <h1 className=" font-abc font-medium text-[14px] text-primary-color mx-10">
        {t("aboutMe")}
      </h1>
      <textarea
      placeholder={t('tellus')}
        className="w-[90%] mx-10 font-abc1 mt-2 font-normal py-2.5 rounded-[5px] h-28 text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
        
        {...register("info", {
          required: "Tell us about yourself",
        })}
      ></textarea>
      {errors.info && <p className="text-red mx-10">{errors.info.message}</p>}

      <button
        type="submit"
        className=" my-4 bg-primary-color rounded-lg justify-center items-center w-[10%] mx-10"
      >
        <p className=" text-white font-abc1 font-semibold text-sm items-center text-center py-3">
          {t("Register")}
        </p>
      </button>
    </form>
  );
};

export default DoctorForm;
