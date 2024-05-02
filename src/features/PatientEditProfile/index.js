import React, { useState, useRef } from "react";
import { Navbar } from "../../components/Navbar";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";
import { ClipLoader } from "react-spinners";
import axios from "axios";
const PatientEditProfile = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

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
      form.append("good_health", HealthChecked);
      form.append("serious_illness", seriousIllness);
      form.append("serious_illness_description", seriousIllnessDescription);

      form.append("past_surgery", PastSurgeryChecked);
      form.append("past_surgery_description", pastSurgeryDescription);
      form.append("current_medication", CurrentTreatmentChecked);
      form.append(
        "current_medication_description",
        currentTreatmentDescription
      );
      form.append("heart_disease", HeartDiseaseChecked);
      form.append("blood_pressure", BloodPressureChecked);
      form.append("allergies", AllergiesChecked);
      form.append("allergies_description", allergyDescription);
      form.append("diabetes", DiabetesChecked);

      form.append("kidney_disease", KidneyChecked);
      form.append("thyroid", ThyroidChecked);
      form.append("stomach_disease", StomachChecked);
      form.append("digestive_disease", DigestiveChecked);
      form.append("digestive_description", digestiveDisease);
      form.append("lung_disease", LungsChecked);
      form.append("lungs_description", lungDiseaseDescription);

      form.append("smoke", SmokeChecked);
      form.append("alcohol", AlcoholChecked);
      form.append("venereal", VenerealChecked);
      form.append("nervous", NervousChecked);
      form.append("hormone", HormoneChecked);
      form.append("any_illness", AnyIllnessChecked);

      form.append("aids", AidsChecked);
      form.append("usual_medicine", UsualMedicineChecked);
      form.append("usual_medicine_description", usualMedicineDescription);
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

  //health
  const [HealthChecked, setHealthChecked] = useState(false);
  //serious illness
  const [seriousIllness, setSeriousIllness] = useState(false);
  const [seriousIllnessDescription, setSeriousIllnessDescription] =
    useState("");
  const handleSeriousIllnessChange = (event) => {
    setSeriousIllnessDescription(event.target.value);
  };
  //Past surgery
  const [PastSurgeryChecked, setPastSurgeryChecked] = useState(false);
  const [pastSurgeryDescription, setSurgeryDescription] = useState("");
  const handlePastSurgeryChange = (event) => {
    setSurgeryDescription(event.target.value);
  };
  //Currently treatment
  const [CurrentTreatmentChecked, setCurrentTreatmentChecked] = useState(false);
  const [currentTreatmentDescription, setCurrentTreatmentDescription] =
    useState("");
  const handleTreatmentChange = (event) => {
    setCurrentTreatmentDescription(event.target.value);
  };

  //Heart Disease
  const [HeartDiseaseChecked, setHeartDiseaseChecked] = useState(false);
  //Blood pressure
  const [BloodPressureChecked, setBloodPressureChecked] = useState(false);
  //Allergies
  const [AllergiesChecked, setAllergiesChecked] = useState(false);
  const [allergyDescription, setAllergyDescription] = useState("");
  const handleAllergyChange = (event) => {
    setAllergyDescription(event.target.value);
  };
  const [liverDiseaseDescription, setLiverDiseaseDescription] = useState("");
  const handleLiverDiseaseChange = (event) => {
    setLiverDiseaseDescription(event.target.value);
  };
  const [digestiveDisease, setDigestiveDisease] = useState("");
  const handleDigestiveChange = (event) => {
    setDigestiveDisease(event.target.value);
  };
  const [lungDiseaseDescription, setLungDiseaseDescription] = useState("");
  const handleLungDiseaseChange = (event) => {
    setLungDiseaseDescription(event.target.value);
  };
  const [otherIllnessDescription, setOtherIllnessDescription] = useState("");
  const handleOtherIllnessChange = (event) => {
    setOtherIllnessDescription(event.target.value);
  };
  const [usualMedicineDescription, setUsualMedicineDescription] = useState("");
  const handleUsualMedicineChange = (event) => {
    setUsualMedicineDescription(event.target.value);
  };

  //Diabetes
  const [DiabetesChecked, setDiabetesChecked] = useState(false);
  //Lungs
  const [LungsChecked, setLungsChecked] = useState(false);
  //Liver
  const [LiverDiseaseChecked, setLiverDiseaseChecked] = useState(false);
  //Hypatitis
  const [HypatitisChecked, setHypatitisChecked] = useState(false);
  //Kidney
  const [KidneyChecked, setKidneyChecked] = useState(false);
  //Thyroid
  const [ThyroidChecked, setThyroidChecked] = useState(false);
  //Venereal
  const [VenerealChecked, setVenerealChecked] = useState(false);
  //Digestive disease
  const [DigestiveChecked, setDigestiveChecked] = useState(false);
  //Nervous
  const [NervousChecked, setNervousChecked] = useState(false);
  //Any illness
  const [AnyIllnessChecked, setAnyIllnessChecked] = useState(false);
  //Stomach
  const [StomachChecked, setStomachChecked] = useState(false);
  //hormone
  const [HormoneChecked, setHormoneChecked] = useState(false);
  //smoke
  const [SmokeChecked, setSmokeChecked] = useState(false);
  //alcohol
  const [AlcoholChecked, setAlcoholChecked] = useState(false);
  //usually medication
  const [UsualMedicineChecked, setUsualMedicineChecked] = useState(false);
  //aids contact
  const [AidsChecked, setAidsChecked] = useState(false);
  //pregnant
  const [PregnantChecked, setPregnantChecked] = useState(false);
  //agree
  const [AgreeChecked, setAgreeChecked] = useState(false);

  return (
    <div className=" flex flex-col">
      <Navbar />
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
          </div>
        </div>

        {/* Consent patient form */}

        <div className=" flex flex-col m-10">
          <h1 className=" font-abc font-bold text-[22px] text-primary-color">
            {t("addHistory")}
          </h1>
          <p className=" font-abc text-[14px] mt-2 font-medium text-primary-color">
            {t("Are you currently in good health?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={HealthChecked === "Yes"}
                onChange={() => setHealthChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>
            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={HealthChecked === "No"}
                onChange={() => setHealthChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Have you had any serious illnesses in the past?")}
          </p>

          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={seriousIllness === "Yes"}
                onChange={() => setSeriousIllness("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={seriousIllness === "No"}
                onChange={() => setSeriousIllness("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("If the answer is yes, which ones?")}
          </p>

          <input
            value={seriousIllnessDescription}
            onChange={handleSeriousIllnessChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Have you had surgery in the past?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={PastSurgeryChecked === "Yes"}
                onChange={() => setPastSurgeryChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={PastSurgeryChecked === "No"}
                onChange={() => setPastSurgeryChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>
          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("If the answer is yes, which ones?")}
          </p>

          <input
            value={pastSurgeryDescription}
            onChange={handlePastSurgeryChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Are you currently undergoing medical treatment?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={CurrentTreatmentChecked === "Yes"}
                onChange={() => setCurrentTreatmentChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={CurrentTreatmentChecked === "No"}
                onChange={() => setCurrentTreatmentChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>
          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("If the answer is yes, which ones?")}
          </p>

          <input
            value={currentTreatmentDescription}
            onChange={handleTreatmentChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Have had or currently have heart disease?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={HeartDiseaseChecked === "Yes"}
                onChange={() => setHeartDiseaseChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={HeartDiseaseChecked === "No"}
                onChange={() => setHeartDiseaseChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Have you had or currently have high blood pressure?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={BloodPressureChecked === "Yes"}
                onChange={() => setBloodPressureChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={BloodPressureChecked === "No"}
                onChange={() => setBloodPressureChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Have you had or currently have allergies?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={AllergiesChecked === "Yes"}
                onChange={() => setAllergiesChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={AllergiesChecked === "No"}
                onChange={() => setAllergiesChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <input
            value={allergyDescription}
            onChange={handleAllergyChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have diabetes?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={DiabetesChecked === "Yes"}
                onChange={() => setDiabetesChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={DiabetesChecked === "No"}
                onChange={() => setDiabetesChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have viral hepatitis?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={HypatitisChecked === "Yes"}
                onChange={() => setHypatitisChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={HypatitisChecked === "No"}
                onChange={() => setHypatitisChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have other liver diseases?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={LiverDiseaseChecked === "Yes"}
                onChange={() => setLiverDiseaseChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={LiverDiseaseChecked === "No"}
                onChange={() => setLiverDiseaseChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <input
            value={liverDiseaseDescription}
            onChange={handleLiverDiseaseChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have kidney disease?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={KidneyChecked === "Yes"}
                onChange={() => setKidneyChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={KidneyChecked === "No"}
                onChange={() => setKidneyChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have thyroid disease?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={ThyroidChecked === "Yes"}
                onChange={() => setThyroidChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={ThyroidChecked === "No"}
                onChange={() => setThyroidChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have stomach diseases?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={StomachChecked === "Yes"}
                onChange={() => setStomachChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={StomachChecked === "No"}
                onChange={() => setStomachChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have digestive tract diseases?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={DigestiveChecked === "Yes"}
                onChange={() => setDigestiveChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={DigestiveChecked === "No"}
                onChange={() => setDigestiveChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <input
            value={digestiveDisease}
            onChange={handleDigestiveChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have lung disease?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={LungsChecked === "Yes"}
                onChange={() => setLungsChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={LungsChecked === "No"}
                onChange={() => setLungsChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <input
            value={lungDiseaseDescription}
            onChange={handleLungDiseaseChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have venereal diseases?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={VenerealChecked === "Yes"}
                onChange={() => setVenerealChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={VenerealChecked === "No"}
                onChange={() => setVenerealChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have nervous or depressive diseases?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={NervousChecked === "Yes"}
                onChange={() => setNervousChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={NervousChecked === "No"}
                onChange={() => setNervousChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have blood or haemorrhagic diseases?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={HormoneChecked === "Yes"}
                onChange={() => setHormoneChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={HormoneChecked === "No"}
                onChange={() => setHormoneChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you have any other illnesses not listed above?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={AnyIllnessChecked === "Yes"}
                onChange={() => setAnyIllnessChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={AnyIllnessChecked === "No"}
                onChange={() => setAnyIllnessChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <input
            value={otherIllnessDescription}
            onChange={handleOtherIllnessChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you smoke?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={SmokeChecked === "Yes"}
                onChange={() => setSmokeChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={SmokeChecked === "No"}
                onChange={() => setSmokeChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you drink alcohol regularly?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={AlcoholChecked === "Yes"}
                onChange={() => setAlcoholChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={AlcoholChecked === "No"}
                onChange={() => setAlcoholChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t(
              "Have you been in contact with groups at risk for AIDS in the past or recently?"
            )}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={AidsChecked === "Yes"}
                onChange={() => setAidsChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={AidsChecked === "No"}
                onChange={() => setAidsChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Do you usually take any medications?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={UsualMedicineChecked === "Yes"}
                onChange={() => setUsualMedicineChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={UsualMedicineChecked === "No"}
                onChange={() => setUsualMedicineChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <input
            value={usualMedicineDescription}
            onChange={handleUsualMedicineChange}
            className=" w-[70%] font-abc1 mt-0 font-normal py-2.5 rounded-[5px] h-[48px] text-dark-gray ring-1 ring-inset ring-border-color placeholder:text-dark-gray focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6 px-3"
          ></input>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("Are you currently pregnant?")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={PregnantChecked === "Yes"}
                onChange={() => setPregnantChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("Yes")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={PregnantChecked === "No"}
                onChange={() => setPregnantChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("No")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("rule1")}
          </p>
          <div className=" flex flex-row">
            <div className=" flex flex-row">
              <input
                type="checkbox"
                checked={AgreeChecked === "Yes"}
                onChange={() => setAgreeChecked("Yes")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("I agree")}
              </label>
            </div>

            <div className=" flex flex-row mx-3">
              <input
                type="checkbox"
                checked={AgreeChecked === "No"}
                onChange={() => setAgreeChecked("No")}
              />
              <label className=" font-abc text-sm text-primary-color font-semibold mx-1">
                {t("I do not agree**")}
              </label>
            </div>
          </div>

          <p className=" font-abc text-[14px] font-medium text-primary-color my-2">
            {t("rule2")}
          </p>
        </div>

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
  );
};

export default PatientEditProfile;
