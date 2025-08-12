
import { ContractData } from '../../../../../components/Data';
import DeleteModal from '../../../../../components/DeleteModal';
import Table from '../../../../../components/Table'

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
    contentMarginTop='mt-0'
      endpoint={ContractData}
      columns={customerColumns}
      ViewModal={true}
      exportModal={false}
      DeleteModal={DeleteModal}
      deletetitle="Contract"
    />
    
    </>
  )
}

export default Contract