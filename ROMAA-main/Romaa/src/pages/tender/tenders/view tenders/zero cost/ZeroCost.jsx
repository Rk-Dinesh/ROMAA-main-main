
import axios from 'axios';
import { BOQData } from '../../../../../components/Data';
import DeleteModal from '../../../../../components/DeleteModal';
import Table from '../../../../../components/Table'
import { API } from '../../../../../constant';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const customerColumns = [
  { label: "Item Code", key: "item_name" },
  { label: "Item Description", key: "description" },
  { label: "Quantity", key: "quantity" },
  { label: "Units", key: "unit" },
  { label: "Final Rate", key: "zero_cost_unit_rate" },
  { label: "Amount", key: "zero_cost_final_amount" },
];

const ZeroCost = () => {
  const { tender_id } = useParams(); // 📌 Get tender_id from URL

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchBoqItems = async () => {
    if (!tender_id) return;
    setLoading(true);
    try {
      const res = await axios.get(`${API}/boq/items/${tender_id}`, {
        params: {
          page: currentPage,
          limit: 10,
        },
      });

      setItems(res.data.data || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      toast.error("Failed to fetch BOQ items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoqItems();
  }, [tender_id, currentPage]);

  return (
    <>
    <Table
      title="Zero Cost"
      subtitle={`Tender: ${tender_id}`}
      endpoint={items}
      columns={customerColumns}
      EditModal={true}       
      exportModal={false}
      DeleteModal={DeleteModal}
      deletetitle="Zero Cost"
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      onUpdated={fetchBoqItems}
      onSuccess={fetchBoqItems}
    />
    
    </>
  )
}

export default ZeroCost