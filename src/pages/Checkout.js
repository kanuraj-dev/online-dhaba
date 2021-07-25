import { Row, Col, Modal } from "antd";
import { HomeTwoTone, WalletTwoTone } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Loader from "../components/Loader";
import demoImg from "../assets/demo-image.jpg";
import FormStepper from "../components/FormStepper";
import AddressForm from "../forms/AddressForm";
import PaymentOptions from "../components/PaymentOptions";
import { useHistory } from "react-router-dom";

function Checkout() {
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();
  const screens = useBreakpoint();
  const isLg = screens.lg;
  const classes = useStyles({ isLg });

  const Steps = [
    { title: "Address", icon: <HomeTwoTone /> },
    { title: "Payment", icon: <WalletTwoTone /> },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const nextStep = () => setActiveStep(activeStep + 1);

  const onAddressFormSubmit = () => {
    nextStep();
  };

  const onPaymentOptionsSubmit = (method) => {
    Modal.success({
      title: "Order Placed Successfully.!",
      content: "Thanks for buying with Online Dhaba, have a great Meal..",
      onOk: () => history.push("/"),
      centered: true,
    });
  };

  return (
    <>
      {!loading ? (
        <Row className={classes.checkoutPage}>
          <Col span={12} hidden={!isLg}>
            <img src={demoImg} alt="food" className={classes.pageLeftImg} />
          </Col>
          <Col xs={24} lg={12} className={classes.pageRight}>
            <div className={classes.logo}>
              Online<b>Dhaba</b>
            </div>
            <FormStepper steps={Steps} currentStep={activeStep}>
              <AddressForm onSubmit={onAddressFormSubmit} />
              <PaymentOptions onSubmit={onPaymentOptionsSubmit} />
            </FormStepper>
          </Col>
        </Row>
      ) : (
        <Loader height="100vh" />
      )}
    </>
  );
}

const useStyles = createUseStyles(() => ({
  checkoutPage: {
    height: ({ isLg }) => (isLg ? "100vh" : "auto"),
    padding: ({ isLg }) => (isLg ? "0px" : "1rem 0px"),
  },
  pageLeftImg: {
    height: "100vh",
    width: "100%",
    objectFit: "cover",
  },
  pageRight: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    color: "#505050",
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",

    "& b": {
      color: "#ffa500",
      fontWeight: 700,
      fontStyle: "italic",
    },
  },
}));

export default Checkout;
