import React from "react";
import Modal from "../../../components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../../components/InputField";

const schema = yup.object().shape({
  userId: yup.string().required("User ID is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email ID is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits")
    .required("Phone Number is required"),
  role: yup.string().required("Role is required"),
});




const AddUser = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onclose();
  };

  return (
   <>
     <Modal
            title="Add Expenses"
            onclose={onclose}
            
            child={
              <>
               <Modal
  title="Add User"
  onclose={onclose}
  child={
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-c gap-4 px-6 py-6">
          <div className="space-y-4">
            <InputField
              label="User ID"
              name="userId"
              register={register}
              errors={errors}
              placeholder="Type Here"
            />
            <InputField
              label="Name"
              name="name"
              register={register}
              errors={errors}
              placeholder="Type Here"
            />
            <InputField
              label="Email ID"
              name="email"
              register={register}
              errors={errors}
              placeholder="Type Here"
              type="email"
            />
            <InputField
              label="Phone Number"
              name="phoneNumber"
              register={register}
              errors={errors}
              placeholder="Type Here"
            />
            <InputField
              label="Role"
              type="select"
              name="role"
              placeholder="select role"
              register={register}
              errors={errors}
              options={[{label:"Admin", value:"admin"},{label:"User", value:"User" },]}
            />
          </div>
        </div>
        <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
          <button
            type="button"
            onClick={onclose}
            className="cursor-pointer border dark:border-white border-darkest-blue dark:text-white text-darkest-blue px-6 py-2 rounded"
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
    </>
  }
/>

              </>
            }
          /></>
  );
};

export default AddUser;
