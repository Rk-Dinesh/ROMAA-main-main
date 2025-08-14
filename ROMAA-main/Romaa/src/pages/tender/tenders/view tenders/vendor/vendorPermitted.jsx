import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Modal from "../../../../../components/Modal"; 
import { InputField } from "../../../../../components/InputField";
import { API } from "../../../../../constant";
import { useParams } from "react-router-dom";


// ✅ Validation Schema
const schema = yup.object().shape({
  vendor_id: yup.string().required("Vendor ID is required"),
  vendor_name: yup.string().required("Vendor Name is required"),
  agreement_start: yup.date().required("Agreement Start Date is required"),
  agreement_end: yup.date().nullable(),
  permitted_by: yup.string().required("Permitted By is required"),
  permitted_status: yup
    .string()
    .oneOf(["APPROVED", "PENDING", "REJECTED"])
    .required("Permitted Status is required"),
  remarks: yup.string().nullable(),
});

const AddPermittedVendor = ({ onclose, onSuccess }) => {
  const { tender_id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        tender_id,
        vendors: [
          {
            vendor_id: data.vendor_id,
            vendor_name: data.vendor_name,
            agreement_start: data.agreement_start,
            agreement_end: data.agreement_end,
            permitted_by: data.permitted_by,
            permitted_status: data.permitted_status,
            remarks: data.remarks,
          },
        ],
      };

      console.log("Payload", payload);

      await axios.post(`${API}/permittedvendor/add`, payload);
      if (onSuccess) onSuccess();
      reset();
      onclose();
    } catch (error) {
      console.error(error);
      alert("Failed to add permitted vendor");
    }
  };

  return (
    <Modal
      title="Add Permitted Vendor"
      widthClassName="lg:w-[600px] md:w-[500px] w-96"
      onclose={onclose}
      child={
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5 px-6 py-6">
            <InputField
              label="Vendor ID"
              name="vendor_id"
              register={register}
              errors={errors}
              placeholder="Enter Vendor ID"
            />
            <InputField
              label="Vendor Name"
              name="vendor_name"
              register={register}
              errors={errors}
              placeholder="Enter Vendor Name"
            />
            <InputField
              label="Agreement Start Date"
              name="agreement_start"
              type="date"
              register={register}
              errors={errors}
            />
            <InputField
              label="Agreement End Date"
              name="agreement_end"
              type="date"
              register={register}
              errors={errors}
            />
            <InputField
              label="Permitted By"
              name="permitted_by"
              register={register}
              errors={errors}
              placeholder="Enter person who permitted"
            />
            <InputField
              label="Permitted Status"
              name="permitted_status"
              type="select"
              register={register}
              errors={errors}
              options={[
                { value: "APPROVED", label: "Approved" },
                { value: "PENDING", label: "Pending" },
                { value: "REJECTED", label: "Rejected" },
              ]}
            />
            <InputField
              label="Remarks"
              name="remarks"
              register={register}
              errors={errors}
              placeholder="Optional remarks"
            />
          </div>

          <div className="mx-5 text-xs flex justify-end gap-2 mb-4">
            <button
              type="button"
              onClick={onclose}
              className="border px-6 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 bg-darkest-blue text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      }
    />
  );
};

export default AddPermittedVendor;
