import React from "react";
import { createUseStyles } from "react-jss";
import { Button, Input } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Formik } from "formik";
import AddressFormSchema from "../schema/AddressFormSchema";
import hideNumberInputArrows from "../customStyles/hideNumberInputArrows";

function AddressForm({ onSubmit }) {
  const screen = useBreakpoint();
  const isMd = screen.lg;
  const classes = useStyles({ isMd: isMd });

  return (
    <Formik
      initialValues={{
        line1: "",
        line2: "",
        pincode: "",
        city: "",
        mobileNumber: "",
      }}
      validationSchema={AddressFormSchema}
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
            name="line1"
            size={isMd ? "large" : "middle"}
            placeholder="House Number/Flat Number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.line1}
          />
          <span className={classes.errorText}>
            {errors.line1 && touched.line1 && errors.line1}
          </span>
          <Input
            name="line2"
            size={isMd ? "large" : "middle"}
            placeholder="Street Address/Road Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.line2}
          />
          <span className={classes.errorText}>
            {errors.line2 && touched.line2 && errors.line2}
          </span>
          <Input
            type="number"
            name="pincode"
            size={isMd ? "large" : "middle"}
            placeholder="Area Pincode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.pincode}
          />
          <span className={classes.errorText}>
            {errors.pincode && touched.pincode && errors.pincode}
          </span>
          <Input
            name="city"
            size={isMd ? "large" : "middle"}
            placeholder="City Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
          />
          <span className={classes.errorText}>
            {errors.city && touched.city && errors.city}
          </span>
          <Input
            type="tel"
            name="mobileNumber"
            size={isMd ? "large" : "middle"}
            placeholder="Receiver's mobile number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mobileNumber}
          />
          <span className={classes.errorText}>
            {errors.mobileNumber && touched.mobileNumber && errors.mobileNumber}
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
            Next
          </Button>
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

    ...hideNumberInputArrows,
  },
  errorText: {
    marginTop: "0 !important",
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: 600,
    color: "#f88379",
  },
}));

export default AddressForm;
