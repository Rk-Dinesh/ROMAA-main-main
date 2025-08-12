import React, { useState } from "react";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { RoleData } from "../../../components/Data";
import { RiUserAddLine } from "react-icons/ri";
import DeleteModal from "../../../components/DeleteModal";

const RoleColumns = [
  { label: "Name", key: "name" },
  { label: "Role", key: "role" },
  { label: "Created By", key: "createdBy" },
];

const Roles = () => {
 
  return (
  
      <Table
        title="Settings"
        subtitle="Roles "
        pagetitle="Roles"
        endpoint={RoleData}
        columns={RoleColumns}
        AddModal={true}
        addroutepoint={"addroles"}
        EditModal={true}
        editroutepoint={"editroles"}
        DeleteModal={DeleteModal}
        deletetitle="role"
        FilterModal={Filters}
        addButtonLabel="Add Roles"
        addButtonIcon={<RiUserAddLine size={23} />}
      />

  );
};

export default Roles;
