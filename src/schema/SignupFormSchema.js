import * as Yup from "yup";

const SignupFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Naam to daalna padega.!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email bhi daalna padega.!"),

  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Password to daalna hi daalna hai.!"),
  cpassword: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Ye bhi daal hi de.!")
    .oneOf([Yup.ref("password"), null], "Passwords match nhi kar rha.!"),
});

export default SignupFormSchema;
