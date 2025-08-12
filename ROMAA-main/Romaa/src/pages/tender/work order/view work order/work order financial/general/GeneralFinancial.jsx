import React from "react";
const financialFields = [
  { label: "Mobilization Advance%", value: 1480.0 },
  { label: "Mobilization Amount", value: 1480.0 },
  { label: "Mobilization Recovery", value: 1480.0 },
  { label: "Retention", value: 1480.0 },
];

const GeneralFinancial = () => {
  return (
    <div className="h-full">
      <div className="dark:bg-layout-dark bg-white w-full rounded-md p-6">
        <div className="flex flex-col col-span-2 sm:grid grid-cols-3 w-full gap-3">
          {financialFields.map((field, idx) => (
            <React.Fragment key={idx}>
              <p className="text-sm col-span-1 font-bold dark:text-white text-gray-800">
                {field.label}
              </p>
              <p className="text-sm col-span-2 dark:text-gray-400 text-gray-600">
                ₹{field.value}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralFinancial;