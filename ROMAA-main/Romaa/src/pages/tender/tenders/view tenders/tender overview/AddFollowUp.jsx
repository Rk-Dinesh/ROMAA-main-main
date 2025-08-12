import React from "react";
import Modal from "../../../../../components/Modal";
import { InputField } from "../../../../../components/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  time: yup.string().required("Time is required"),
  date: yup.date().required("Due Date is required"),
  notes: yup
    .string()
    .max(500, "Description cannot exceed 500 characters")
    .required("Description is required"),
});

const AddFollowUp = ({ onclose }) => {
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
        widthClassName="lg:w-[500px] md:w-[400px] w-96"
        onclose={onclose}
        title="Add Follow Up"
        child={
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 p-6">
              <InputField
                label=" Date"
                name="date"
                register={register}
                errors={errors}
                type="date"
              />
              <InputField
                label="Time"
                name="time"
                register={register}
                errors={errors}
                placeholder="Enter time"
                type="time"
              />

              <InputField
                label="Note"
                type="textarea"
                name="notes"
                placeholder="Enter a brief notes"
                register={register}
                errors={errors}
              />
            </div>
            <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer  border  dark:border-white border-darkest-blue dark:text-white text-darkest-blue px-6 py-2   rounded"
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
        }
      />
    </>
  );
};

export default AddFollowUp;
