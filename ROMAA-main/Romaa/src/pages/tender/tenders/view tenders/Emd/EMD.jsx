import React, { useState } from "react";
import Table from "../../../../../components/Table";
import { EMDTableData } from "../../../../../components/Data";
import DeleteModal from "../../../../../components/DeleteModal";
import { Check, Pencil } from "lucide-react";
import EditEMD from "./EditEMD";

const EMD = () => {


  const Columns = [
    { label: "Date", key: "date" },
    { label: "Company", key: "company" },
    { label: "Proposed Value", key: "proposedvalue" },
    { label: "EMD Amount", key: "emdamount" },
    { label: "Bank Name", key: "bankname" },
    { label: "Level", key: "level" },
    { label: "Status", key: "status" },
  ];



  return (
    <div className="h-full">
      <div className="dark:bg-layout-dark bg-white w-full flex flex-col sm:grid grid-cols-2 gap-y-2 rounded-md px-4 py-6">
        <div className="col-span-2 flex justify-center items-center mb-4 ">
          <p className="text-xl font-semibold">EMD</p>
        </div>
        <div className="flex flex-col col-span-2 sm:grid grid-cols-2 w-full space-y-2">
          <p className="text-sm col-span-1 font-bold dark:text-white text-gray-800">
            EMD Percentage
          </p>
          <p className="text-sm col-span-1 dark:text-gray-300 text-gray-600">
            employee
          </p>
          <p className="text-sm col-span-1 font-bold dark:text-white text-gray-800">
            EMD Value
          </p>
          <p className="text-sm col-span-1 dark:text-gray-300 text-gray-600">
            2
          </p>
          <p className="text-sm col-span-1 font-bold dark:text-white text-gray-800">
            Expiry Date
          </p>
          <p className="text-sm col-span-1 dark:text-gray-300 text-gray-600">
            7
          </p>
        </div>
      </div>
      <Table
        contentMarginTop="mt-0"
        endpoint={EMDTableData}
        columns={Columns}
        EditModal={EditEMD}
        DeleteModal={DeleteModal}
        deletetitle={"delete EMD"}
        exportModal={false}
      />
    </div>
  );
};

export default EMD;
