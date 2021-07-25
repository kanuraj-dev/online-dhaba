import * as Yup from "yup";

const AddressFormSchema = Yup.object().shape({
  line1: Yup.string().required("Tis field is required."),
  line2: Yup.string().required("Tis field is required."),
  pincode: Yup.string()
    .length(6, "Pincode must be 6 digits.")
    .required("Tis field is required."),
  city: Yup.string().required("Tis field is required."),
  mobileNumber: Yup.string()
    .length(10, "Mobile number must be 10 digits")
    .required("Tis field is required."),
});

export default AddressFormSchema;
