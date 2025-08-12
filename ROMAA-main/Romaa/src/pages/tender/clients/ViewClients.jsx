import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import EditClients from "./EditClients";

const clientFields = [
  { label: "Client ID", key: "id" },
  { label: "Client Name", key: "name" },
  { label: "PAN no", key: "pan" },
  { label: "CIN no", key: "cin" },
  { label: "GSTIN", key: "gstin" },
  { label: "Phone number", key: "phone" },
  { label: "Email", key: "email" },
  { label: "City", key: "city" },
  { label: "State", key: "state" },
  { label: "Country", key: "country" },
  { label: "Pincode", key: "pincode" },
];

const ViewClients = ({ onclose, item }) => {
  const [editModal, setEditModal] = useState(false);
  if (editModal) {
    return <EditClients onclose={() => setEditModal(false)} item={item} />;
  }
  return (
    <div className="font-roboto-flex fixed inset-0 flex justify-center items-center backdrop-blur-xs backdrop-grayscale-50 drop-shadow-lg z-20">
      <div className="dark:bg-overall_bg-dark bg-white rounded-lg drop-shadow-md w-[420px]">
        <p
          className="grid place-self-end cursor-pointer -mx-4 -my-4 dark:bg-overall_bg-dark bg-white shadow-sm py-2.5 px-2.5 rounded-full"
          onClick={onclose}
        >
          <IoClose className="size-[20px]" />
        </p>

        <form className="grid grid-cols-12 justify-center items-center text-sm gap-4 px-8 py-8">
          <p className="pb-6 text-center font-semibold text-lg col-span-12">
            View Clients
          </p>
          {clientFields.map((field) => (
            <React.Fragment key={field.key}>
              <label className="font-semibold col-span-7">{field.label}</label>
              <p className="text-sm font-light col-span-5">
                {item?.[field.key] !== undefined && item?.[field.key] !== ""
                  ? item[field.key]
                  : "-"}
              </p>
            </React.Fragment>
          ))}
        </form>

        <div className="flex justify-end items-center gap-2 py-8 mx-6 text-sm font-extralight">
          <p
            className="cursor-pointer border dark:border-white border-black px-6 py-1.5 rounded-sm"
            onClick={onclose}
          >
            Cancel
          </p>
          <p
            className="cursor-pointer bg-darkest-blue text-white px-6 py-1.5 rounded-sm"
            onClick={() => setEditModal(true)}
          >
            Edit
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewClients;