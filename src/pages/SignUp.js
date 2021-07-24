import { Button, Col, Input, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { createUseStyles } from "react-jss";
import demoImg from "../assets/demo-image.jpg";
import { Formik } from "formik";
import SignupFormSchema from "../schema/SignupFormSchema";
import { Link } from "react-router-dom";

function SignUp() {
  const screen = useBreakpoint();
  const isMd = screen.md;
  const classes = useStyles({ isMd: isMd });

  const handleSubmit = () => {};

  return (
    <Row className={classes.signUpPage}>
      <Col span={12} hidden={!isMd}>
        <img src={demoImg} alt="food" className={classes.pageLeftImg} />
      </Col>
      <Col xs={24} md={12} className={classes.pageRight}>
        <div className={classes.formContainer}>
          <Link to="/">
            <div className={classes.logo}>
              Online<b>Dhaba</b>
            </div>
          </Link>

          <div className={classes.formCard}>
            <div className={classes.formTitle}>Join The Foodies</div>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                cpassword: "",
              }}
              validationSchema={SignupFormSchema}
              onSubmit={handleSubmit}
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
                  <Button block href="/sign-in" type="link">
                    Already have an account? Sign IN
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Col>
    </Row>
  );
}

const useStyles = createUseStyles(() => ({
  signUpPage: {
    height: "100vh",

    "& > div": {
      height: "100vh",
    },
  },
  pageLeftImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(90%)",
  },
  pageRight: {
    height: "100%",
    backgroundImage: ({ isMd }) => (isMd ? "" : `url('${demoImg}')`),
  },
  formContainer: {
    height: "100%",
    background: ({ isMd }) => (isMd ? "#fff" : "rgba(0,0,0,0.5)"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    color: ({ isMd }) => (isMd ? "#505050" : "#f8f8f8"),
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",

    "& b": {
      color: "#ffa500",
      fontWeight: 700,
      fontStyle: "italic",
    },
  },
  formCard: {
    width: "90%",
    maxWidth: 500,
    margin: "5vh auto 20px",
    padding: 15,
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 0px 5px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.24)",
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 700,
    width: "100%",
    textAlign: "center",
    color: "#505050",
  },
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

export default SignUp;
