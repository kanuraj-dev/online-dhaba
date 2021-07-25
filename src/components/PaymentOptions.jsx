import {
  BankFilled,
  CreditCardFilled,
  DollarCircleFilled,
  WalletFilled,
} from "@ant-design/icons";
import { Button, Divider, message, Radio } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import SectionDivider from "./SectionDivider";

function PaymentOptions({ onSubmit }) {
  const [paymentOption, setPaymentOption] = useState();
  const screens = useBreakpoint();
  const isLg = screens.lg;
  const classes = useStyles({ isLg });

  const handleNextButtonClick = () => {
    if (paymentOption !== undefined) {
      onSubmit(paymentOption);
    } else {
      message.info("PLease Select a Payment Method");
    }
  };

  return (
    <div className={classes.paymentOptions}>
      <div className={classes.selectOptionText}>Choose Payment Method :</div>
      <Radio.Group
        size="large"
        buttonStyle="solid"
        value={paymentOption}
        className={classes.optionsRadio}
        onChange={(e) => setPaymentOption(e.target.value)}
      >
        <Radio.Button value="credit-debit-card">
          <CreditCardFilled /> Credit/Debit Card
        </Radio.Button>
        <Radio.Button value="e-wallet">
          <WalletFilled /> E-Wallet
        </Radio.Button>
        <Radio.Button value="net-banking">
          <BankFilled /> Net Banking
        </Radio.Button>
        <Radio.Button value="cash-on-delivery">
          <DollarCircleFilled /> Cash On Delivery
        </Radio.Button>
      </Radio.Group>

      <div className={classes.orderSummaryText}>• Order Summary •</div>
      <div className={classes.calculationItem}>
        <span>Total</span>
        <span>₹ 200.00</span>
      </div>
      <div className={classes.calculationItem}>
        <span>Discount</span>
        <span>- ₹ 50</span>
      </div>
      <Divider style={{ margin: "5px 0" }} />
      <div className={classes.calculationItem}>
        <div>Sub Total</div>
        <div>₹ 150</div>
      </div>

      <SectionDivider />

      <Button
        block
        size={isLg ? "large" : "middle"}
        type="primary"
        className={classes.nextButton}
        onClick={handleNextButtonClick}
      >
        Proceed
      </Button>
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  paymentOptions: {
    width: "100%",
    padding: ({ isLg }) => (isLg ? "0px 20% 20px" : "0px 5% 20px"),
  },
  selectOptionText: {
    fontSize: 18,
    fontWeight: 600,
    margin: [20, 5, 10],
  },
  orderSummaryText: {
    width: "100%",
    marginTop: 15,
    height: 30,
    fontSize: 17,
    fontWeight: 600,
    textAlign: "center",
  },
  calculationItem: {
    height: 24,
    fontSize: 14,
    fontWeight: 600,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:last-child": {
      height: 25,
    },

    "& div": { fontSize: 16 },
  },
  optionsRadio: {
    width: "100%",
    "& .ant-radio-button-wrapper": {
      height: ({ isLg }) => (isLg ? 60 : 45),
      fontSize: ({ isLg }) => (isLg ? 16 : 14),
      fontWeight: 600,
      color: "#505050",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      borderLeft: "1px solid #d9d9d9",

      "& .anticon": {
        marginRight: ({ isLg }) => (isLg ? 20 : 10),
        marginLeft: ({ isLg }) => (isLg ? 10 : 5),
      },
    },
    "& .ant-radio-button-wrapper-checked": {
      background: "rgb(248, 131, 121,0.9) !important",
      borderColor: "rgb(248, 131, 121,0.9) !important",
      color: "#fff",
    },
    "& .ant-radio-button-wrapper:not(:first-child)::before": {
      display: "none",
    },
  },
  nextButton: {
    background: "rgb(255, 165, 0,0.8)",
    border: "none",
    fontWeight: 600,
  },
}));

export default PaymentOptions;
