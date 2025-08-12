import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../../components/Modal";
import { InputField } from "../../../components/InputField";


const schema = yup.object().shape({
  vendortype: yup
    .string()
    .oneOf(
      [
        "Cement Supplier",
        "Steel Supplier",
        "Sand Supplier",
        "Aggregate Supplier",
        "Bricks Supplier",
        "Electrical Contractor",
        "Plumbing Contractor",
        "Paint Supplier",
        "Tiles Supplier",
        "Wood Supplier",
      ],
      "Select a valid Vendor Type"
    )
    .required("Vendor Type is required"),
  vendorname: yup.string().required("Vendor name is required"),
  address: yup.string().required("Address is required"),
  creditdays: yup.string().required("Credit Days is required"),
  gstin: yup.string().required("GSTIN is required"),
});

const EditVendorSupplier = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    data;
    onclose();
  };

  return (
    <>
      <Modal
        title="Edit Vendor"
        widthClassName="lg:w-[450px] md:w-[420px] w-96"
        onclose={onclose}
        child={
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 px-6 py-6">
                <div className="space-y-4">
                  <InputField
                    label="Vendor Type"
                    name="vendortype"
                    type="select"
                    register={register}
                    errors={errors}
                    placeholder={"Select Vendor type"}
                    options={[
                      { label: "Cement Supplier", value: "Cement Supplier" },
                      { label: "Steel Supplier", value: "Steel Supplier" },
                      { label: "Sand Supplier", value: "Sand Supplier" },
                      {
                        label: "Aggregate Supplier",
                        value: "Aggregate Supplier",
                      },
                      { label: "Bricks Supplier", value: "Bricks Supplier" },
                      {
                        label: "Electrical Contractor",
                        value: "Electrical Contractor",
                      },
                      {
                        label: "Plumbing Contractor",
                        value: "Plumbing Contractor",
                      },
                      { label: "Paint Supplier", value: "Paint Supplier" },
                      { label: "Tiles Supplier", value: "Tiles Supplier" },
                      { label: "Wood Supplier", value: "Wood Supplier" },
                    ]}
                  />
                  <InputField
                    label="Vendor name"
                    name="vendorname"
                    register={register}
                    errors={errors}
                    placeholder="Enter vendor name"
                  />

                  <InputField
                    label="Address"
                    name="address"
                    register={register}
                    errors={errors}
                    placeholder="Enter address"
                  />
                  <InputField
                    label="Credit Days"
                    type="date"
                    name="creditdays"
                    register={register}
                    errors={errors}
                  />
                  <InputField
                    label="GSTIN"
                    name="gstin"
                    register={register}
                    errors={errors}
                    placeholder="Enter gstin"
                  />
                </div>
              </div>
              <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={onclose}
                  className="cursor-pointer border dark:border-white dark:text-white border-darkest-blue text-darkest-blue px-6 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer px-6 bg-darkest-blue text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </>
        }
      />
    </>
  );
};

export default EditVendorSupplier;
