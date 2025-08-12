import { Projectpenaltydata, securitydepositdata } from "../../../components/Data";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";

const ProjectPenaltyColumns = [
  { label: "Tender ID", key: "tenderid" },
  { label: "Project Name", key: "projectname" },
  { label: "Deposit", key: "deposit", render: (row) => `₹${row.deposit.toLocaleString("en-IN")}` },
  { label: "Project Penalty", key: "projpenalty", render: (row) => `₹${row.projpenalty.toLocaleString("en-IN")}` },
  { label: "Expiry Date", key: "expirydate" },
  { label: "Amount Collected", key: "amntcollected", render: (row) => `₹${row.amntcollected.toLocaleString("en-IN")}` },
  { label: "Balance", key: "balance", render: (row) => `₹${row.balance.toLocaleString("en-IN")}` },
  { label: "Note", key: "Note" },
];

const ProjectPenalty = () => {
  return (
    <Table
      title="Tender Management"
      subtitle="Project Penalty"
      pagetitle="Project Penalty"
      endpoint={Projectpenaltydata}
      columns={ProjectPenaltyColumns}
      FilterModal={Filters}
    />
  );
};

export default ProjectPenalty;
