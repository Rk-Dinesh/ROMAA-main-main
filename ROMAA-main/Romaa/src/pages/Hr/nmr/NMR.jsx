import { NMRData } from "../../../components/Data";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import AddNMR from "./AddNMR";
import { LuNotebookText } from "react-icons/lu";

const columns = [
  { label: "S.no", key: "sno" },
  { label: "NMR ID", key: "nmrid" },
  { label: "Name", key: "name" },
  { label: "Role", key: "role" },
  { label: "Department", key: "department" },
  { label: "Site Assigned", key: "siteAssigned" },
  { label: "Status", key: "status" },
];


const NMR = () => {
  return (
    <Table
      title="HR Management"
      subtitle="NMR"
      pagetitle="NMR"
      columns={columns}
      endpoint={NMRData}
      AddModal={AddNMR}
      editroutepoint={"editnmr"}
      routepoint={"viewnmr"}
      FilterModal={Filters}
      addButtonLabel="Add NMR"
      addButtonIcon={<LuNotebookText size={23} />}
    />
  );
};

export default NMR;
