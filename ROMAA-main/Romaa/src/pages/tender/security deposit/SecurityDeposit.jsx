import { securitydepositdata } from "../../../components/Data";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";

const SecurityDepositColumns = [
  { label: "Tender ID", key: "tenderid" },
  { label: "Project Name", key: "projectname" },
  { label: "Deposit", key: "deposit", render: (row) => `₹${row.deposit.toLocaleString("en-IN")}` },
  { label: "Security Deposit", key: "secdeposit", render: (row) => `₹${row.secdeposit.toLocaleString("en-IN")}` },
  { label: "Expiry Date", key: "expirydate" },
  { label: "Amount Collected", key: "amntcollected", render: (row) => `₹${row.amntcollected.toLocaleString("en-IN")}` },
  { label: "Balance", key: "balance", render: (row) => `₹${row.balance.toLocaleString("en-IN")}` },
  { label: "Note", key: "Note" },
];

const SecurityDeposit = () => {
  return (
    <Table
      title="Tender Management"
      subtitle="Security Deposit"
      pagetitle="Security Deposit"
      endpoint={securitydepositdata}
      columns={SecurityDepositColumns}
      FilterModal={Filters}
    />
  );
};

export default SecurityDeposit;
