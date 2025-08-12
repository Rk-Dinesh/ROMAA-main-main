import { EMDdata } from "../../../components/Data";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";

const Columns = [
  { label: "Tender ID", key: "id" },
  { label: "Project Name", key: "pName" },
  // { label: "Deposit", key: "deposit" },
  { label: "EMP", key: "emp" },
  { label: "Expiry Date", key: "expdate" },
  { label: "Amount Collected", key: "amountcollected" },
  { label: "Balance", key: "balance" },
  { label: "Note", key: "note" },
];

const EMD = () => {
  return (
    <Table
      title="Tender Management"
      subtitle="EMD"
      pagetitle="EMD(Earnest Money Deposit)"
      endpoint={EMDdata}
      columns={Columns}
      FilterModal={Filters}
      onExport={() => console.log("Exporting...")}
    />
  );
};

export default EMD;
