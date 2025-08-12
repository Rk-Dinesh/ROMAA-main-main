import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../../components/Modal";
import { InputField } from "../../../components/InputField";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  role: yup.string().required("Role is required"),
  department: yup.string().required("Department is required"),
  Site_Assigned: yup.string().required("Site Assigned is required"),
});

const AddEmployee = ({ onclose }) => {
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
    <div>
      <Modal
        onclose={onclose}
        title="Add Employee"
        child={
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-c gap-4 px-6 py-6">
                <div className="space-y-4">
                  <InputField
                    label="Name"
                    name="name"
                    register={register}
                    errors={errors}
                    placeholder="Enter employee name"
                  />

                  <InputField
                    label="Role"
                    name="role"
                    register={register}
                    type="select"
                    placeholder="select role"
                    errors={errors}
                    options={[
                      { label: "Engineer", value: "Engineer" },
                      { label: "Manager", value: "Manager" },
                      { label: "Technician", value: "Technician" },
                    ]}
                  />

                  <InputField
                    label="Department"
                    name="department"
                    type="select"
                    placeholder="select department"
                    register={register}
                    errors={errors}
                    options={[
                      { label: "Engineer", value: "Engineer" },
                      { label: "Manager", value: "Manager" },
                      { label: "Technician", value: "Technician" },
                    ]}
                  />
                  <InputField
                    label="Site Assigned"
                    name="Site_Assigned"
                    register={register}
                    errors={errors}
                    placeholder="Enter  name"
                  />
                </div>
              </div>
              <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={onclose}
                  className="cursor-pointer  border dark:border-white dark:text-white border-darkest-blue  text-darkest-blue px-6 py-2   rounded"
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
          </>
        }
      />
    </div>
  );
};

export default AddEmployee;
