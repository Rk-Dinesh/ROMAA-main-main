
import { WorkOrderBOQData } from '../../../../../components/Data';
import DeleteModal from '../../../../../components/DeleteModal';
import Table from '../../../../../components/Table'
import ViewWorkOrderBoq from './ViewWorkOrderBoq';

const WorkOrderBOQColumns = [
  { label: "Specification", key: "specification" },
  { label: "Quantity", key: "quantity" },
  { label: "Units", key: "units" },
  { label: "Final Rate", key: "rate" },
  { label: "Amount", key: "amount" },
];


const BoqWorkOrder = () => {
  return (
    <>
    <Table
    contentMarginTop='mt-0'
      endpoint={WorkOrderBOQData}
      columns={WorkOrderBOQColumns}
      EditModal={true}
      ViewModal={ViewWorkOrderBoq}
      exportModal={false}
      DeleteModal={DeleteModal}
      deletetitle="BOQ"
    />
    
    </>
  )
}

export default BoqWorkOrder