import { TenderData } from "../../../components/Data";
import { HiOutlineClipboardList } from "react-icons/hi";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import AddTender from "./AddTender";
import EditTender from "./EditTender";

const customerColumns = [
  { label: "Tender ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Location", key: "location" },
  { label: "Submission Date", key: "date" },
  { label: "Budget", key: "budget" },
  {
    label: "Status",
    key: "status",
    render: (item) => (
      <span
        className={` ${
          item.status === "approved"
            ? " text-green-600"
            : item.status === "rejected"
            ? "text-red-600"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
      </span>
    ),
  },
];

const Tender = () => {
  return (
    <Table
      title="Tender Management"
      subtitle="Tender"
      pagetitle="Tender"
      endpoint={TenderData}
      columns={customerColumns}
      AddModal={AddTender}
      EditModal={EditTender}
      routepoint={"viewtender"}
      FilterModal={Filters}
      addButtonLabel="Add Tender"
      addButtonIcon={<HiOutlineClipboardList size={24} />}
    />
  );
};

export default Tender;
