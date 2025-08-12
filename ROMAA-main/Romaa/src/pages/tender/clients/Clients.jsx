
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { LuUserRoundSearch } from "react-icons/lu";
import { CustomerData } from "../../../components/Data";
import EditClients from "./EditClients";
import ViewClients from "./ViewClients";
import AddClients from "./AddClients";

const ClientColumns = [
  { label: "Client ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Address", key: "address" },
  { label: "Phone", key: "phone" },
  { label: "Email", key: "email" },
];

const Clients = () => {


  return (
    <Table
      title="Tender Management"
      subtitle="Client"
      pagetitle="Clients Management"
      endpoint={CustomerData}
      columns={ClientColumns}
      AddModal={AddClients}
      EditModal={EditClients}
      ViewModal={ViewClients}
      FilterModal={Filters}
      addButtonLabel="Add Client"
      addButtonIcon={<LuUserRoundSearch  size={24} />}
    />
  );
};

export default Clients;
