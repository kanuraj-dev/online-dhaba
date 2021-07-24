import * as Yup from "yup";

const SignInFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email bhi daalna padega.!"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Password to daalna hi daalna hai.!"),
});

export default SignInFormSchema;
