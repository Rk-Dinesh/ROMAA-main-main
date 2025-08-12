import { LiaClipboardListSolid } from "react-icons/lia";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { Workorderdata } from "../../../components/Data";
import AddWorkOrder from "./AddWorkOrder";
import EditWorkOrder from "./EditWorkOrder";

const Columns = [
  { label: "Work order ID", key: "id" },
  { label: "Date", key: "date" },
  { label: "Client Name", key: "clName" },
  { label: "Project Name", key: "pName" },
  { label: "Location", key: "location" },
  { label: "Amount", key: "amount" },
];

const WorkOrder = () => {
  return (
    <Table
      title="Tender Management"
      subtitle="Work Order"
      pagetitle="Work Order"
      endpoint={Workorderdata}
      columns={Columns}
      // AddModal={AddWorkOrder}
      EditModal={EditWorkOrder}
        routepoint={"viewworkorder"}
      FilterModal={Filters}
      // addButtonLabel="Add Work order"
      // addButtonIcon={<LiaClipboardListSolid size={24} />}
    />
  );
};

export default WorkOrder;
