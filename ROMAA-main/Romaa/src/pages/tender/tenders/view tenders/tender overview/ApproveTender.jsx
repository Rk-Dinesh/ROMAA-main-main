import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const data = [
  { label: "Tender ID", value: "#2345" },
  { label: "Tender Published Date", value: "2025-05-18" },
  { label: "Tender Process Type", value: "Open Tender" },
  { label: "Tender Type", value: "Government" },
  { label: "Project Location", value: "Chennai" },
  { label: "Project Type", value: "Infrastructure" },
  { label: "Contact Person", value: "Ramesh Kumar" },
  { label: "Contact Person Location", value: "Chennai" },
  { label: "Contact Number", value: "+91 98765 43210" },
  { label: "Email ID", value: "ramesh@example.com" },
  { label: "Address", value: "123, Anna Nagar, Chennai, 600096" },
  { label: "Work Order ID", value: " 600096" },
];


const ApproveTender = ({ onclose }) => {

  return (
    <div className=" font-roboto-flex fixed inset-0 flex justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className="dark:bg-layout-dark bg-white rounded-lg drop-shadow-md w-[420px] ">
        <p
          className="grid place-self-end cursor-pointer -mx-4 -my-4 dark:bg-layout-dark bg-white shadow-sm  py-2.5 px-2.5 rounded-full "
          onClick={onclose}
        >
          <IoClose className="size-[20px]" />
        </p>

        <form className="grid grid-cols-12  justify-center items-center text-sm   gap-4 px-8 py-8">
          <p className=" pb-6 text-center font-semibold text-lg col-span-12">
            Approve Tender
          </p>

          {data.map((item, index) => (
                <React.Fragment key={index}>
                  <label className="font-semibold col-span-7">{item.label}</label>
                  <p className="text-sm font-light col-span-5">{item.value}</p>
                </React.Fragment>
              ))}
    
        </form>

        <div className="flex justify-end items-center gap-2 py-8 mx-6 text-sm ">
          <p
            className="cursor-pointer border dark:border-white border-black   px-6 py-1.5 rounded-sm"
            onClick={onclose}
          >
            Cancel
          </p>
             <p
            className="cursor-pointer  bg-darkest-blue text-white   px-6 py-1.5 rounded-sm"
      
          >
            Approve
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default ApproveTender;
