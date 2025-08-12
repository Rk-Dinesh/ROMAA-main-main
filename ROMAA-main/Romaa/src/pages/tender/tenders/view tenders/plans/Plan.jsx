import { TbFileInvoice } from "react-icons/tb";

const Plan = () => {
  return (
    <>
    <div className="h-11/12">
      <div className=" cursor-pointer flex justify-end pr-4">
        <p className="flex items-center gap-2 bg-darkest-blue text-white px-4 py-2 rounded">
          Upload Plan
        </p>
      </div>
      <div className="flex flex-col justify-center items-center h-full  text-darkest-blue">
        
          <p className="flex justify-center items-center ">
            <TbFileInvoice size={52} className="stroke-1"/>
          </p>
          <p className="font-semibold py-2">Upload Files</p>
      
      </div>
      </div>
    </>
  );
};

export default Plan;
