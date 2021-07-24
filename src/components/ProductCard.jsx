import {
  ArrowRightOutlined,
  EnvironmentFilled,
  HeartOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import demoImg from "../assets/food-demo-image.jpg";
import FadeBottom from "./FadeBottom";

function ProductCard() {
  const classes = useStyles();

  return (
    <div className={classes.productCard}>
      <div className={classes.productImgWrapper}>
        <img
          src={demoImg}
          className={classes.productImg}
          alt="Rajasthani Khamman"
        />
        <FadeBottom small />
        <Button
          type="default"
          shape="circle"
          icon={<HeartOutlined />}
          className={classes.addToWishlistButton}
        />
      </div>
      <div className={classes.productDetails}>
        <div className={classes.productTitle}>Rajasthani Khamman</div>
        <div className={classes.productDescripiton}>
          Gorgeous Rajasthani Khamman with mirchi, pyaaj and tikhi-mithi
          chutneyyy...
        </div>
        <div className={classes.location}>
          <EnvironmentFilled /> Bhawani Sweets, Virar
        </div>
        <Row align="middle" justify="space-between">
          <Col span={13} className={classes.qtyAndPrice}>
            <div>₹ 300</div>
            <span>•</span>
            <div>Pack of 2</div>
          </Col>
          <Col span={11} className={classes.orderButton}>
            <Button
              size="small"
              block
              type="primary"
              icon={<ArrowRightOutlined />}
            >
              Get Me This
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  productCard: {
    width: "100%",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    paddingBottom: 5,
    zIndex: 1,

    "&:hover": {
      borderRadius: 10,
      boxShadow: "0 4px 8px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      transform: "scale(1.08)",
      zIndex: 2,
      "& $productDetails": {
        padding: [7, 10],
      },
    },
  },
  productImgWrapper: {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    borderRadius: 10,
    position: "relative",
  },
  productImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  addToWishlistButton: {
    boxShadow: "0 0 8px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    position: "absolute",
    top: 15,
    right: 15,
  },
  productDetails: {
    padding: [7, 5],
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 600,
  },
  productDescripiton: {
    fontWeight: 500,
    color: "#505050",
    opacity: 0.95,
    lineHeight: "20px",
    wordBreak: "break-all",
  },
  location: {
    margin: [5, 0, 3, 2],
    fontWeight: 600,
    color: "#505050",
    cursor: "pointer",

    "& .anticon": {
      marginRight: 3,
      color: "#f88379",
    },
  },
  qtyAndPrice: {
    display: "flex",
    textAlign: "center",
    fontWeight: 700,
    color: "#505050",

    "& > div": {
      padding: [0, 5],
    },
  },
  orderButton: {
    marginTop: 4,
    padding: [0, 5],
    "& .ant-btn": {
      height: 25,
      background: "#ffa500d9",
      fontWeight: 600,
      border: "none",
    },
  },
  "@media (max-width: 570px)": {
    productCard: {
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    productTitle: {
      fontSize: 19,
      fontWeight: 600,
    },
    productDescripiton: {
      fontSize: 12,
      lineHeight: "18px",
    },
    orderButton: {
      "& .ant-btn": {
        fontSize: 12,
      },
    },
  },
}));

export default ProductCard;
