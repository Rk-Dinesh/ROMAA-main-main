import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { IoClose } from "react-icons/io5";

// ✅ Validation Schema
const schema = yup.object().shape({
  clientName: yup.string().required("Client Name is required"),
  panNumber: yup.string().required("PAN Number is required"),
  cinNumber: yup.string().required("CIN Number is required"),
  gstIn: yup.string().required("GSTIN is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone Number is required"),
  email: yup.string().email("Invalid email").required("Email ID is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  pincode: yup
    .string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
});

// ✅ Reusable Input Field Component
const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
}) => (
  <div className="grid grid-cols-8 items-center gap-4">
    <label className="col-span-3 text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`col-span-5 border dark:border-border-dark-grey border-input-bordergrey rounded-lg outline-none py-2 px-2 placeholder:text-xs placeholder:font-light placeholder-black dark:placeholder-white ${
        errors[name] ? "border-red-500" : ""
      }`}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs col-span-8 text-end">
        {errors[name].message}
      </p>
    )}
  </div>
);

// ✅ Main Component
const EditClients = ({ item, onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: item, 
  });

  // const onSubmit = async (data) => {
  //   try {
  //     await axios.put(`http://localhost:5000/api/customers/${item._id}`, data);
  //     onclose(); 
  //   } catch (err) {
  //     console.error("Update failed", err);
  //   }
  // };

    const onSubmit = (data) => {
    console.log("Form Data:", data);
    onclose();
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50 drop-shadow-lg z-20">
      <div className="mx-2 shadow-lg py-2 dark:bg-overall_bg-dark bg-white rounded-md lg:w-[900px] md:w-[500px] w-96">
        <div      onClick={onclose} className="grid">
          <button
       
            className="place-self-end cursor-pointer dark:bg-overall_bg-dark bg-white rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-6 md:-my-5 -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-0 lg:px-2.5 md:px-2.5 px-0"
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">
            Edit Client
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 px-6 py-6">
              <div className="space-y-4">
                <InputField
                  label="Client Name"
                  name="clientName"
                  register={register}
                  errors={errors}
                  placeholder="Enter client name"
                />
                <InputField
                  label="PAN no"
                  name="panNumber"
                  register={register}
                  errors={errors}
                  placeholder="Enter PAN no"
                />
                <InputField
                  label="CIN no"
                  name="cinNumber"
                  register={register}
                  errors={errors}
                  placeholder="Enter CIN no"
                />
                <InputField
                  label="GSTIN"
                  name="gstIn"
                  register={register}
                  errors={errors}
                  placeholder="Enter GSTIN"
                />
                <InputField
                  label="Phone number"
                  name="phoneNumber"
                  type="text"
                  register={register}
                  errors={errors}
                  placeholder="Enter phone number"
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  errors={errors}
                  placeholder="Enter email ID"
                />
              </div>

              <div className="space-y-4">
                <InputField
                  label="City"
                  name="city"
                  register={register}
                  errors={errors}
                  placeholder="Enter city"
                />
                <InputField
                  label="State"
                  name="state"
                  register={register}
                  errors={errors}
                  placeholder="Enter state"
                />
                <InputField
                  label="Country"
                  name="country"
                  register={register}
                  errors={errors}
                  placeholder="Enter country"
                />
                <InputField
                  label="Pincode"
                  name="pincode"
                  register={register}
                  errors={errors}
                  placeholder="Enter pincode"
                />
              </div>
            </div>

            <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer border border-darkest-blue dark:border-white dark:text-white text-darkest-blue px-6 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-6 bg-darkest-blue text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditClients;
