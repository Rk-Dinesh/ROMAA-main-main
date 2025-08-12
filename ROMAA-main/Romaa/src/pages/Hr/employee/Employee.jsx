import { Employeedata } from "../../../components/Data";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import { AiOutlineFileAdd } from "react-icons/ai";

const Columns = [
  { label: "Employee ID", key: "empid" },
  { label: "Name", key: "name" },
  { label: "Role", key: "role" },
  { label: " Department", key: "dept" },
  { label: "Site Assigned ", key: "siteassign" },
  { label: "Status", key: "status" },
];

const Employee = () => {
  return (
    <Table
      title="HR Management"
      subtitle="Employee"
      pagetitle="Employee"
      columns={Columns}
      endpoint={Employeedata}
      AddModal={AddEmployee}
      editroutepoint={"editemployee"}
      routepoint={"viewemployee"}
      FilterModal={Filters}
      addButtonLabel="Add Employee"
      addButtonIcon={<AiOutlineFileAdd size={23} />}
    />
  );
};

export default Employee;
