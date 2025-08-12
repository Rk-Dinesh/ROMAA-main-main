import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/Button";
import { KYCDocumentspurchasedata } from "../../../../../components/Data";

const kycFields = [
  { label: "GST", key: "gst" },
  { label: "PAN", key: "pannumber" },
  { label: "RC", key: "rc" },
  { label: "IPR", key: "ipr" },
  { label: "Account Details", key: "accountdetails" },
];

const KYCDocuments = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full">
        <div className="dark:bg-layout-dark bg-white w-full gap-y-2 rounded-md px-6 py-6">
          <p className="text-xl text-center font-semibold pb-4">
            KYC Documents
          </p>
          <div className="flex flex-col col-span-2 sm:grid grid-cols-7 w-full space-y-2">
            {kycFields.map(field => (
              <React.Fragment key={field.key}>
                <p className="text-sm col-span-3 font-bold dark:text-gray-200 text-gray-800">{field.label}</p>
                <p className="text-sm col-span-2 dark:text-gray-400 text-gray-600">
                  {KYCDocumentspurchasedata[field.key] || "-"}
                </p>
              </React.Fragment>
            ))}
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

export default KYCDocuments;