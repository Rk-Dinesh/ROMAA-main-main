import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { vendorfulldetailspurchase } from "../../../../../components/Data";
import StarProgress from "../../../../../components/StarProgress";
import Button from "../../../../../components/Button";

const vendorFields = [
  { label: "Name", key: "vendorname" },
  { label: "Vendor Type", key: "vendortype" },
  { label: "Mobile Number", key: "mobilenumber" },
  { label: "Email", key: "email" },
  { label: "Credit Days", key: "creditdays" },
  { label: "Business Type", key: "businesstype" },
  { label: "Industry Category", key: "industrycategory" },
  { label: "PAN Number", key: "pannumber" },
  { label: "Address", key: "address" },
];

const VendorFullDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full">
        <div className="dark:bg-layout-dark bg-white w-full gap-y-2 rounded-md px-6 py-6">
          <p className="text-xl text-center font-semibold pb-4">
            Vendor Details
          </p>
          <div className="flex flex-col col-span-2 sm:grid grid-cols-7 w-full space-y-2">
            {vendorFields.map(field => (
              <React.Fragment key={field.key}>
                <p className="text-sm col-span-3 font-bold dark:text-gray-200 text-gray-800">{field.label}</p>
                <p className="text-sm col-span-2 dark:text-gray-400 text-gray-600">
                  {vendorfulldetailspurchase[field.key] || "-"}
                </p>
              </React.Fragment>
            ))}
            <p className="text-sm col-span-3 font-bold dark:text-gray-200 text-gray-800">Ratings</p>
            <div className="text-sm col-span-2 dark:text-gray-400 text-gray-600 flex items-center">
              <StarProgress rating={vendorfulldetailspurchase.rating} />
              <span className="ml-2">{vendorfulldetailspurchase.rating ?? "-"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-end">
        <Button
          button_name="Back"
          button_icon={<ChevronLeft />}
          onClick={() => navigate("..")}
        />
      </div>
    </>
  );
};

export default VendorFullDetails;