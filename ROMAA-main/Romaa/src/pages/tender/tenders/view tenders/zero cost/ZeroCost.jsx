
import { BOQData } from '../../../../../components/Data';
import DeleteModal from '../../../../../components/DeleteModal';
import Table from '../../../../../components/Table'

const customerColumns = [
  { label: "Item Description", key: "item" },
  { label: "Quantity", key: "quantity" },
  { label: "Units", key: "units" },
  { label: "Final Rate", key: "rate" },
  { label: "Amount", key: "amount" },
];


const ZeroCost = () => {
  return (
    <>
    <Table
    contentMarginTop='mt-0'
      endpoint={BOQData}
      columns={customerColumns}
      EditModal={true}
      exportModal={false}
      DeleteModal={DeleteModal}
      deletetitle="Zero Cost"
    />
    
    </>
  )
}

export default ZeroCost