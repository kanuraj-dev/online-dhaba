import React from "react";
import { createUseStyles } from "react-jss";
import { Button, Input } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Formik } from "formik";
import SignupFormSchema from "../schema/SignupFormSchema";
import { Link } from "react-router-dom";

function SignupForm({ onSubmit }) {
  const screen = useBreakpoint();
  const isMd = screen.md;
  const classes = useStyles({ isMd: isMd });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        cpassword: "",
      }}
      validationSchema={SignupFormSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          spellCheck="false"
          className={classes.formWrappper}
        >
          <Input
            name="name"
            size={isMd ? "large" : "middle"}
            placeholder="Your good name..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <span className={classes.errorText}>
            {errors.name && touched.name && errors.name}
          </span>
          <Input
            type="email"
            name="email"
            size={isMd ? "large" : "middle"}
            placeholder="Your email..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <span className={classes.errorText}>
            {errors.email && touched.email && errors.email}
          </span>
          <Input.Password
            name="password"
            size={isMd ? "large" : "middle"}
            placeholder="Set a good password..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <span className={classes.errorText}>
            {errors.password && touched.password && errors.password}
          </span>
          <Input.Password
            name="cpassword"
            size={isMd ? "large" : "middle"}
            placeholder="Repeat password..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpassword}
          />
          <span className={classes.errorText}>
            {errors.cpassword && touched.cpassword && errors.cpassword}
          </span>
          <Button
            block
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            size={isMd ? "large" : "middle"}
            style={{
              background: "rgb(255, 165, 0,0.8)",
              border: "none",
            }}
          >
            Sign Up
          </Button>
          <Link to="/sign-in">
            <Button block type="link">
              Already have an account? Sign IN
            </Button>
          </Link>
        </form>
      )}
    </Formik>
  );
}

const useStyles = createUseStyles(() => ({
  formWrappper: {
    padding: ({ isMd }) => (isMd ? "15px 20px 20px" : "10px 20px 20px"),

    "& .ant-input-affix-wrapper": {
      paddingLeft: "0px !important",
    },
    "& .ant-input": {
      paddingLeft: "20px !important",
      color: "#505050",
    },
    "& > *": {
      marginTop: ({ isMd }) => (isMd ? 20 : 18),
      borderRadius: 5,
    },
    "& *": {
      fontWeight: 600,
    },
  },
  errorText: {
    marginTop: "0 !important",
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: 600,
    color: "#f88379",
  },
}));

export default SignupForm;
