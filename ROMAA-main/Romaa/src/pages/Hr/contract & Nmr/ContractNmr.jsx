
import { ContractNmrdata } from "../../../components/Data";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";

const Columns = [
  { label: "Employee name", key: "empname" },
  { label: "Vendor", key: "vendor" },
  { label: "Contract Start ", key: "contractstart" },
  { label: " End Date", key: "enddate" },
  { label: "Site ", key: "site" },
  { label: "Status", key: "status" },
];

const ContractNmr = () => {
  return (
    <Table
      title="HR Management"
      subtitle="Contract & NMR"
      pagetitle="Contract & NMR"
      columns={Columns}
      endpoint={ContractNmrdata}
      EditModal={true}
      ViewModal={true}
      FilterModal={Filters}
    />
  );
};

export default ContractNmr;
