import { TbFileInvoice } from "react-icons/tb";
import Button from "../../../../../components/Button";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const WorkOrderAssets = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-11/12">
        <div className="flex flex-col justify-center items-center h-full  text-darkest-blue">
          <p className="flex justify-center items-center ">
            <TbFileInvoice size={52} className="stroke-1" />
          </p>
          <p className="font-semibold py-2">Upload Files</p>
        </div>
        <div className="flex justify-end py-2 ">
          <Button
            onClick={() => navigate("..?tab=3")}
            button_name="Back"
            button_icon={<IoChevronBackSharp />}
          />
        </div>
      </div>
    </>
  );
};

export default WorkOrderAssets;
