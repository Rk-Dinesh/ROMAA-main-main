import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ✅ get tender_id from URL
import DeleteModal from "../../../../../components/DeleteModal";
import Table from "../../../../../components/Table";
import axios from "axios";
import { API } from "../../../../../constant";
import { toast } from "react-toastify";

const customerColumns = [
  { label: "Item Code", key: "item_name" },
  { label: "Item Description", key: "description" },
  { label: "Quantity", key: "quantity" },
  { label: "Units", key: "unit" },
  { label: "Final Rate", key: "final_unit_rate" },
  { label: "Amount", key: "final_amount" },
];

const BOQ = () => {
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
    <Table
      title="Bill Of Quantity"
      subtitle={`Tender: ${tender_id}`}
      endpoint={items}
      columns={customerColumns}
      EditModal={true}       
      exportModal={false}
      DeleteModal={DeleteModal}
      deletetitle="BOQ"
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      onUpdated={fetchBoqItems}
      onSuccess={fetchBoqItems}
    />
  );
};

export default BOQ;
