import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { vendordata } from "../../../components/Data";
import { BookUser } from "lucide-react";
import CreateVendorSupplier from "./CreateVendorSupplier";
import EditVendorSupplier from "./EditVendorSupplier";

const Columns = [
  { label: "Vendor ID", key: "id" },
  { label: "Vendor Name", key: "vname" },
  { label: "Vendor Type", key: "vtype" },
  { label: "Address", key: "address" },
  { label: "GSTIN", key: "gstin" },
];

const VendorSupplier = () => {
  return (
    <Table
      title="Purchase Management"
      subtitle="Vendor & Supplier"
      pagetitle="Vendor & Supplier"
      endpoint={vendordata}
      columns={Columns}
      AddModal={CreateVendorSupplier}
      EditModal={EditVendorSupplier}
    routepoint={"viewvendorsupplier"}
      FilterModal={Filters}
      addButtonLabel="Create Vendor"
      addButtonIcon={<BookUser size={24} />}
    />
  );
};

export default VendorSupplier;
