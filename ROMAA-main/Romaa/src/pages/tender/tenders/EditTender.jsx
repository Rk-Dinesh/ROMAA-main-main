import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import { InputField } from "../../../components/InputField";

const schema = yup.object().shape({
  customerName: yup.string().required("Tender Name is required"),
  publisheddate: yup.date().required("Published Date is required"),
  tenderType: yup
    .string()
    .oneOf(
      ["item rate contarct", "percentage", "lumpsum"],
      "Invalid Tender Type"
    )
    .required("Tender Type is required"),
  clientID: yup.string().required("Client ID is required"),
  clientName: yup.string().required("Client Name is required"),
  contactperson: yup.string().required("Contact Person is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits")
    .required("Phone Number is required"),
  projectLocation: yup.string().required("Project Location is required"),
  projectDuration: yup.string().required("Project Duration is required"),
  proposalCost: yup
    .number()
    .typeError("Proposal Cost must be a number")
    .positive("Proposal Cost must be a positive number")
    .required("Proposal Cost is required"),
  duedate: yup.date().required("Due Date is required"),
  emd: yup.string().required("EMD is required"),
  emdexpirydate: yup.date().required("Due Date is required"),
  description: yup
    .string()
    .max(500, "Description cannot exceed 500 characters")
    .required("Description is required"),
});

const EditTender = ({ onclose }) => {
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
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className="mx-2 shadow-lg py-2 dark:bg-overall_bg-dark bg-white  rounded-md ">
        <div  className="grid">
          <button onClick={onclose} className=" place-self-end   cursor-pointer dark:bg-overall_bg-dark bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-6 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-1 lg:px-2.5 md:px-2.5 px-1 ">
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">Edit Tender</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 px-6 py-6">
              <div className="lg:space-y-6  space-y-2">
                <InputField
                  label="Tender Name"
                  name="customerName"
                  register={register}
                  errors={errors}
                  placeholder="Enter customer name"
                />
                <InputField
                  label="Tender Published Date"
                  name="publisheddate"
                  type="date"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Tender Type"
                  type="select"
                  name="tenderType"
                  placeholder="Select a tender type"
                  register={register}
                  errors={errors}
                  options={[
                    {
                      value: "item rate contarct",
                      label: "Item Rate contract",
                    },
                    { value: "percentage", label: "Percentage" },
                    { value: "lumpsum", label: "Lumpsum" },
                  ]}
                />
                <InputField
                  label="Client ID"
                  name="clientID"
                  register={register}
                  errors={errors}
                  placeholder="Enter client Id"
                />
                <InputField
                  label="Client Name"
                  name="clientName"
                  register={register}
                  errors={errors}
                  placeholder="Enter client name"
                />
                <InputField
                  label="Contact Person"
                  name="contactperson"
                  register={register}
                  errors={errors}
                  placeholder="Enter contact person"
                />
                <InputField
                  label="Phone Number"
                  name="phoneNumber"
                  register={register}
                  errors={errors}
                  placeholder="Enter Mob.no"
                />
              </div>
              <div className="lg:space-y-4 space-y-2 ">
                <InputField
                  label="Project Location"
                  name="projectLocation"
                  register={register}
                  errors={errors}
                  placeholder="Enter location"
                />
                <InputField
                  label="Project Duration"
                  name="projectDuration"
                  register={register}
                  errors={errors}
                  placeholder="Enter project duration"
                />
                <InputField
                  label="Proposal Cost"
                  name="proposalCost"
                  register={register}
                  errors={errors}
                  placeholder="Enter proposal cost"
                />
                <InputField
                  label="Due Date"
                  name="duedate"
                  type="date"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="EMD"
                  name="emd"
                  register={register}
                  errors={errors}
                  placeholder="Enter emd"
                />

                <InputField
                  label="EMD Expiry Date"
                  name="emdexpirydate"
                  register={register}
                  errors={errors}
                  type="date"
                />
                <InputField
                  label="Description"
                  type="textarea"
                  name="description"
                  placeholder="Enter a brief description"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer  border  dark:border-white dark:text-white border-darkest-blue  text-darkest-blue px-6 py-2   rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-6 bg-darkest-blue text-white  rounded"
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

export default EditTender;
