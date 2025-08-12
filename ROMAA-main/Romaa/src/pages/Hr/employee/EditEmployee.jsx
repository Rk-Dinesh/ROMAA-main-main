import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonBg from "../../../components/Button";
import Title from "../../../components/Title";
import { Save } from "lucide-react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { InputField } from "../../../components/InputField";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  role: yup.string().required("Role is required"),
  department: yup.string().required("Department is required"),
  siteAssigned: yup.string().required("Site Assigned is required"),
});

const EditEmployee = () => {
  const { state } = useLocation();
  const employee = state?.item;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: employee?.name || "",
      role: employee?.role || "",
      department: employee?.dept || "",
      siteAssigned: employee?.siteassign || "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Updated Employee Data:", data);
  };

  if (!employee) {
    return <div className="p-4 text-red-600">No employee data found.</div>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:my-2 flex sm:items-center flex-col sm:flex-row items-start sm:justify-between space-y-1.5 my-4">
          <Title
            title="HR Management"
            sub_title="Employee"
            page_title="Employee"
          />
          <ButtonBg
            onClick={() => navigate("/hr/employee")}
            type={"submit"}
            button_name="Save"
            button_icon={<Save size={16} />}
          />
        </div>
        <div className="dark:bg-layout-dark bg-white w-full grid grid-cols-1 gap-y-4 rounded-md px-4 py-6 ">
          <div className="col-span-2 flex justify-center items-center mb-4">
            <p className="text-xl font-semibold">Edit Employee</p>
          </div>
          <div className=" space-y-4">
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
              name="siteAssigned"
              register={register}
              errors={errors}
              placeholder="Enter site assigned"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditEmployee;
