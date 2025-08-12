import React, { useState } from "react";
import Title from "../../../components/Title";
import ButtonBg from "../../../components/Button";
import { Pencil } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import EditNMR from "./EditNMR";

const ViewNMR = () => {
  const { state } = useLocation();
  const employee = state?.item || {};
  const navigate = useNavigate();
  const [onEdit, setOnEdit] = useState(false);

  if (!employee) {
    return <div className="p-4 text-red-600">No employee data found.</div>;
  }

  return (
    <>
      {onEdit === false && (
        <>
          <div className="sm:my-2 flex sm:items-center flex-col sm:flex-row items-start sm:justify-between space-y-1.5 my-4">
            <Title
              title="HR Management"
              sub_title="NMR"
              page_title="View NMR"
            />

            <ButtonBg
              button_name="Edit"
              button_icon={<Pencil size={16} />}
              onClick={() =>
               setOnEdit(true)
              }
            />
          </div>
          <div className="dark:bg-layout-dark bg-white w-full flex flex-col sm:grid grid-cols-2 gap-y-2 rounded-md px-4 py-6">
            <div className="col-span-2 flex justify-center items-center mb-4 ">
              <p className="text-xl font-semibold">View NMR</p>
            </div>
            <div className=" flex flex-col col-span-2 sm:grid grid-cols-2 w-full space-y-2">
              <p className="text-sm col-span-1 font-bold dark:text-gray-200 text-gray-800">
                Name
              </p>
              <p className="text-sm col-span-1 dark:text-gray-400 text-gray-600">
                {employee.name}
              </p>

              <p className="text-sm col-span-1 font-bold dark:text-gray-200 text-gray-800">
                Role
              </p>
              <p className="text-sm col-span-1 dark:text-gray-400 text-gray-600">
                {employee.role}
              </p>

              <p className="text-sm col-span-1 font-bold dark:text-gray-200 text-gray-800">
                Department
              </p>
              <p className="text-sm col-span-1 dark:text-gray-400 text-gray-600">
                {employee.dept}
              </p>

              <p className="text-sm col-span-1 font-bold dark:text-gray-200 text-gray-800">
                Site Assigned
              </p>
              <p className="text-sm col-span-1 dark:text-gray-400 text-gray-600">
                {employee.siteassign}
              </p>
            </div>
          </div>
        </>
      )}

      {onEdit && <EditNMR />}
    </>
  );
};

export default ViewNMR;
