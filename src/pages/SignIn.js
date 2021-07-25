import { Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { createUseStyles } from "react-jss";
import demoImg from "../assets/food-demo-image-2.jpg";
import { Link } from "react-router-dom";
import SigninForm from "../forms/SigninForm";

function SignIn() {
  const screen = useBreakpoint();
  const isMd = screen.md;
  const classes = useStyles({ isMd: isMd });

  const handleSubmit = () => {};

  return (
    <Row className={classes.signInPage}>
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
            <div className={classes.formTitle}>Welcome Back Foodies</div>
            <SigninForm onSubmit={handleSubmit} />
          </div>
        </div>
      </Col>
    </Row>
  );
}

const useStyles = createUseStyles(() => ({
  signInPage: {
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
}));

export default SignIn;
