import { LuUserRoundSearch } from "react-icons/lu";
import { ContractData } from "../../../../../components/Data";
import DeleteModal from "../../../../../components/DeleteModal";
import Table from "../../../../../components/Table";
import AddContractWorker from "./AddContract";


const customerColumns = [
  { label: "Employee Name", key: "employeename" },
  { label: "Vendor", key: "vendor" },
  { label: "Contract Start", key: "contractstart" },
  { label: "End Date", key: "enddate" },
  { label: "Site", key: "site" },
  { label: "Status", key: "status" },
];

const Contract = () => {
  return (
    <>
      <Table
        contentMarginTop="mt-0"
        endpoint={ContractData}
        columns={customerColumns}
        ViewModal={true}
        AddModal={AddContractWorker}
        addButtonLabel="Add Contractor"
        addButtonIcon={<LuUserRoundSearch size={24} />}
        exportModal={false}
        DeleteModal={DeleteModal}
        deletetitle="Contract"
      />
    </>
  );
};

export default Contract;
