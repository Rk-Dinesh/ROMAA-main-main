import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import AddFollowUp from "./AddFollowUp";
import { MdCancel } from "react-icons/md";
import { IoMdSave } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../../../../constant";

const tenderStatus = {
  site_investigation: true,
  pre_bid_meeting: false,
  bid_submission: true,
  technical_bid_opening: false,
  commercial_bid_opening: false,
  negotiation: false,
  work_order: false,
  agreement: false,
};

const importantDates = [
  {
    title: "Last Date of Document Purchase",
    date: "12/06/2025",
    time: "12:00 PM",
    address: "123 Street, Chennai",
  },
  {
    title: "PreBid Meeting Date",
    date: "15/06/2025",
    time: "2:00 PM",
    address: "Conference Room, Chennai",
  },
  {
    title: "Last Date of Bid Submission",
    date: "20/06/2025",
    time: "11:59 PM",
    address: "Online",
  },
  {
    title: "Bid Opening Date",
    date: "21/06/2025",
    time: "10:00 AM",
    address: "Main Office, Chennai",
  },
  {
    title: "Last Date of Technical Bid Submission",
    date: "22/06/2025",
    time: "5:00 PM",
    address: "Online",
  },
  { title: "Validity Period", date: "30/06/2025", time: "11:59 PM" },
];

const customerDetails = [
  { label: "Customer ID", value: "TND-2345" },
  { label: "Customer Name", value: "2025-05-10" },
  { label: "PAN no", value: "Open Bid" },
  { label: "CIN no", value: "Construction" },
  { label: "GSTIN", value: "Downtown, City" },
  { label: "VAT no", value: "Infrastructure" },
  { label: "Phone Number", value: "John Doe" },
  { label: "Contact Number", value: "+1 234 567 890" },
  { label: "Email ID", value: "johndoe@example.com" },
  { label: "Address", value: "123 Main St, New York, NY 10001" },
];
const tenderDetails = [
  { label: "Tender ID", value: "TND-2345" },
  { label: "Tender Published Date", value: "2025-05-10" },
  { label: "Tender Process Type", value: "Open Bid" },
  { label: "Tender Type", value: "Construction" },
  { label: "Project Location", value: "Downtown, City" },
  { label: "Project Type", value: "Infrastructure" },
  { label: "Contact Person", value: "John Doe" },
  { label: "Contact Person Location", value: "New York" },
  { label: "Contact Number", value: "+1 234 567 890" },
  { label: "Email ID", value: "johndoe@example.com" },
  { label: "Address", value: "123 Main St, New York, NY 10001" },
];
const tenderProcessDataTemplate = [
  { label: "Site Investigation", key: "site_investigation" },
  { label: "Pre bid Meeting", key: "pre_bid_meeting" },
  { label: "Bid Submit", key: "bid_submission" },
  { label: "Technical Bid Opening", key: "technical_bid_opening" },
  { label: "Commercial Bid Opening", key: "commercial_bid_opening" },
  { label: "Negotiations", key: "negotiation" },
  { label: "Work Order", key: "work_order" },
  { label: "Agreement", key: "agreement" },
];
const TenderOverView = () => {
  const { tender_id } = useParams();
  const [addFollowup, setAddFollowup] = useState(false);

  const [importantDates, setImportantDates] = useState([]);
  const [customerDetails, setCustomerDetails] = useState([]);
  const [tenderDetailsState, setTenderDetailsState] = useState([]);
  const [tenderProcessState, setTenderProcessState] = useState([]);

  const [isEditingTender, setIsEditingTender] = useState(false);
  const [isProcessChanged, setIsProcessChanged] = useState(false);

  const fetchTenderOverview = async () => {
    try {
      const res = await axios.get(`${API}/tender/getoverview/${tender_id}`);
      const data = res.data.data;

      // Prepare display arrays from API
      setImportantDates(data.importantDates || []);

      setCustomerDetails([
        { label: "Customer ID", value: data.customerDetails?.client_id },
        { label: "Customer Name", value: data.customerDetails?.client_name },
        { label: "PAN no", value: "Open Bid" },
        { label: "CIN no", value: "Construction" },
        { label: "GSTIN", value: "Downtown, City" },
        { label: "VAT no", value: "Infrastructure" },
        { label: "Phone Number", value: data.customerDetails?.contact_phone },
        { label: "Email ID", value: data.customerDetails?.contact_email },
        {
          label: "Address",
          value: `${data.customerDetails?.address?.city || ""}, ${
            data.customerDetails?.address?.state || ""
          }`,
        },
      ]);

      setTenderDetailsState([
        { label: "Tender ID", value: data.tenderDetails?.tender_id },
        {
          label: "Tender Published Date",
          value: data.tenderDetails?.tender_published_date,
        },
        {
          label: "Tender Process Type",
          value: data.tenderDetails?.tender_type,
        },
        {
          label: "Project Location",
          value: `${data.tenderDetails?.project_location?.city || ""}, ${
            data.tenderDetails?.project_location?.state || ""
          }`,
        },
        { label: "Contact Person", value: data.tenderDetails?.contact_person },
        { label: "Contact Number", value: data.tenderDetails?.contact_phone },
        { label: "Email ID", value: data.tenderDetails?.contact_email },
      ]);

      setTenderProcessState(
        tenderProcessDataTemplate.map((item) => ({
          ...item,
          checked: !!data.tenderProcess?.[item.key],
          value: !!data.tenderProcess?.[item.key],
        }))
      );
    } catch (err) {
      console.error("Error fetching overview:", err);
    }
  };

  useEffect(() => {
    if (tender_id) fetchTenderOverview();
  }, [tender_id]);

  // const [tenderProcessState, setTenderProcessState] = useState(
  //   tenderProcessDataTemplate.map((item) => {
  //     const value =
  //       typeof tenderStatus[item.key] === "boolean"
  //         ? tenderStatus[item.key]
  //         : false;
  //     return {
  //       ...item,
  //       value,
  //       checked: value,
  //     };
  //   })
  // );
  // const [isProcessChanged, setIsProcessChanged] = useState(false);

  const handleCancel = () => {
    setTenderDetailsState(tenderDetails);
    setIsEditingTender(false);
  };

  const handleSave = () => {
    setIsEditingTender(false);
  };

  const handleTenderChange = (idx, value) => {
    setTenderDetailsState((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, value } : item))
    );
  };

  const handleCheckboxChange = (idx) => {
    setTenderProcessState((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, checked: !item.checked } : item
      )
    );
    setIsProcessChanged(true);
  };

  const handleProcessSave = () => {
    setIsProcessChanged(false);
    // Create an object with label: boolean
    const processStatus = {};
    tenderProcessState.forEach((item) => {
      processStatus[item.key] = !!item.checked;
    });
    console.log("Process status:", processStatus);
    // Pass processStatus to your API or parent handler here
  };
  return (
    <>
      <div className="font-roboto-flex grid grid-cols-12 h-full gap-4  overflow-y-auto no-scrollbar py-2">
        <div className="col-span-4 row-span-2 dark:bg-layout-dark bg-white rounded-lg shadow p-4 space-y-4">
          <div className="flex justify-between items-center pb-4 mt-2">
            <p className="font-semibold text-lg">Important Dates</p>
            <button
              onClick={() => setAddFollowup(true)}
              className="bg-darkest-blue px-3 py-1.5 text-xs font-extralight text-white rounded"
            >
              Add Follow up
            </button>
          </div>
          <div className="space-y-3 px-2">
            {importantDates.map((item, index) => (
              <div key={index} className="space-y-1 ">
                <p className="font-semibold text-sm">{item.title}</p>
                <div className="grid grid-cols-12 mx-4 text-xs gap-1 ">
                  <p className="col-span-4">Date</p>
                  <p className="col-span-8 text-end text-gray-500">
                    {item.date}
                  </p>
                  <p className="col-span-4">Time</p>
                  <p className="col-span-8 text-end text-gray-500">
                    {item.time || "-"}
                  </p>
                  {item.address && (
                    <>
                      <p className="col-span-4 ">Address</p>
                      <p className="col-span-8 text-end text-gray-500">
                        {item.address}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 dark:bg-layout-dark bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center px-2 py-2">
            <p className="font-semibold text-lg">Customer Details</p>
          </div>
          <div className="grid grid-cols-12 gap-2  text-xs font-semibold px-2 py-2 ">
            {customerDetails.map((item, index) => (
              <React.Fragment key={index}>
                <p className="col-span-6">{item.label}</p>
                <p className="col-span-6 text-end  opacity-50 font-light">
                  {item.value}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="col-span-4 dark:bg-layout-dark bg-white rounded-lg shadow p-4">
          {" "}
          <div className="flex justify-between items-center px-2 py-2">
            <p className="font-semibold text-lg">Tender Details</p>
            {!isEditingTender ? (
              <button
                className="bg-gray-400 text-gray-600 rounded-full px-1.5 py-1.5"
                onClick={() => setIsEditingTender(true)}
              >
                <Pencil size={14} />
              </button>
            ) : (
              <button
                className="px-4 py-1.5 rounded dark:bg-overall_bg-dark dark:text-white text-gray-700"
                onClick={handleCancel}
              >
                <MdCancel />
              </button>
            )}
          </div>
          <div className="grid grid-cols-12 gap-2  text-xs font-semibold px-2 py-2 ">
            {tenderDetailsState.map((item, idx) => (
              <React.Fragment key={idx}>
                <p className="col-span-6">{item.label}</p>
                <div className="col-span-6 text-end opacity-50 font-light">
                  {isEditingTender ? (
                    <input
                      type="text"
                      value={item.value}
                      onChange={(e) => handleTenderChange(idx, e.target.value)}
                      className="w-full bg-transparent  focus:outline-none text-right"
                    />
                  ) : (
                    item.value
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
          {isEditingTender && (
            <div className="flex justify-end gap-2 mt-2">
              <button
                className="px-4 py-1.5 rounded bg-darkest-blue text-white"
                onClick={handleSave}
              >
                <IoMdSave />
              </button>
            </div>
          )}
        </div>
        <div className="col-span-8 dark:bg-layout-dark bg-white rounded-lg shadow p-4 ">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm py-2 mx-4">Tender Process</p>

            {isProcessChanged && (
              <button
                className="ml-2 text-white bg-darkest-blue px-2.5 py-1 rounded"
                onClick={handleProcessSave}
              >
                <IoMdSave size={18} />
              </button>
            )}
          </div>
          <div className="space-y-1 mx-4 text-sm">
            {tenderProcessState.map((item, index) => (
              <div key={index} className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded text-darkest-blue"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {addFollowup && <AddFollowUp onclose={() => setAddFollowup(false)} />}
    </>
  );
};

export default TenderOverView;
