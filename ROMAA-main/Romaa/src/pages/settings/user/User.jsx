
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { UsersData } from "../../../components/Data";
import { RiUserAddLine } from "react-icons/ri";
import DeleteModal from "../../../components/DeleteModal";
import AddUser from "./AddUser";

const UserColumns = [
  { label: "Name", key: "name" },
  { label: "Role", key: "role" },
  { label: "Phone Number", key: "phoneNumber" },
  { label: "Email ID", key: "email" },
  { label: "Status ", key: "status" },
  { label: "Created By", key: "createdBy" },
];

const User = () => {
  return (
    <div>
      <Table
        title="Settings"
        subtitle="User "
        pagetitle="User"
        endpoint={UsersData}
        columns={UserColumns}
        AddModal={AddUser}
        EditModal={true}
        editroutepoint={"edituser"}
        DeleteModal={DeleteModal}
        deletetitle="user"
        FilterModal={Filters}
        addButtonLabel="Add User"
        addButtonIcon={<RiUserAddLine size={23} />}
      />
    </div>
  );
};

export default User;
