import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  EnvironmentFilled,
  ShoppingOutlined,
  SmileTwoTone,
} from "@ant-design/icons";
import { Button, Carousel, Col, message, Row, Select } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import demoImg1 from "../assets/demo-image.jpg";
import demoImg2 from "../assets/food-demo-image-2.jpg";
import Loader from "../components/Loader";
import SectionDivider from "../components/SectionDivider";
import customeScrollbarStyle from "../customStyles/CustomScrollbar";

function Product() {
  const [quantity, setQuantity] = useState();
  const [loading, setLoading] = useState(true);
  const screen = useBreakpoint();
  const history = useHistory();
  const isMd = screen.md;
  const classes = useStyles({ isMd: isMd });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const goToCheckoutPage = () => {
    if (quantity !== undefined) {
      history.push("/checkout");
    } else {
      message.info("Please select Quantity..");
    }
  };

  return (
    <>
      {!loading ? (
        <Row className={classes.productPage}>
          <Button
            type="default"
            shape="circle"
            icon={<ArrowLeftOutlined />}
            size={isMd ? "large" : "middle"}
            className={classes.backButton}
            onClick={history.goBack}
          />
          <Col xs={24} md={12}>
            <Carousel effect="fade" autoplay className={classes.imagesCarousel}>
              <img src={demoImg1} alt="productImg" />
              <img src={demoImg2} alt="productImg" />
            </Carousel>
          </Col>
          <Col xs={24} md={12} className={classes.pageRight}>
            <div className={classes.productName}>
              Rajasthani Khamman & Dhokla
            </div>
            <div className={classes.productDescription}>
              Khaman, also known as khaman dhokla in other Indian states, is a
              popular delicacy from the Gujarati cuisine. It is light, spongy
              and includes a hint of great savory flavor from a simple
              combination of gram flour (besan), spices, and herbs.
            </div>
            <div className={classes.pointsListItem}>
              <SmileTwoTone /> Free Delivery.!
            </div>
            <div className={classes.pointsListItem}>
              <ClockCircleOutlined /> Will get delivered in 15 Minutes.
            </div>
            <div className={classes.pointsListItem}>
              <EnvironmentFilled /> Bhawani Sweets, Virar
            </div>
            <div className={classes.qtyAndPrice}>
              <div>₹ 300</div>
              <span>•</span>
              <div>Pack of 2</div>
            </div>

            <Row justify="center" className={classes.qtySelector}>
              <Col xs={6} xl={5}>
                <Select
                  size="large"
                  placeholder={isMd ? "Select Quantity" : "QTY"}
                  value={quantity}
                  onChange={setQuantity}
                >
                  <Select.Option value={1}>1</Select.Option>
                  <Select.Option value={2}>2</Select.Option>
                  <Select.Option value={3}>3</Select.Option>
                  <Select.Option value={4}>4</Select.Option>
                  <Select.Option value={5}>5</Select.Option>
                  <Select.Option value={6}>6</Select.Option>
                  <Select.Option value={7}>7</Select.Option>
                  <Select.Option value={8}>8</Select.Option>
                  <Select.Option value={9}>9</Select.Option>
                  <Select.Option value={10}>10</Select.Option>
                </Select>
              </Col>
              <Col xs={18} xl={10}>
                <Button
                  block
                  type="primary"
                  size="large"
                  icon={<ShoppingOutlined />}
                  onClick={goToCheckoutPage}
                >
                  Proceed To Checkout
                </Button>
              </Col>
            </Row>

            <div style={{ margin: [15, 0, 10] }}>
              <SectionDivider />
            </div>

            <div className={classes.photosListTitle}>All Photos</div>
            <div className={classes.photosList}>
              <img src={demoImg1} alt="productImg" />
              <img src={demoImg2} alt="productImg" />
              <img src={demoImg1} alt="productImg" />
              <img src={demoImg2} alt="productImg" />
            </div>
          </Col>
        </Row>
      ) : (
        <Loader height="100vh" />
      )}
    </>
  );
}

const useStyles = createUseStyles(() => ({
  productPage: {},
  backButton: {
    border: "none",
    background: "#fff",
    position: "fixed",
    zIndex: 4,
    top: 20,
    left: 20,
  },
  imagesCarousel: {
    height: ({ isMd }) => (isMd ? "100vh" : "35vh"),

    "& img": {
      width: "100%",
      height: ({ isMd }) => (isMd ? "100vh" : "35vh"),
      objectFit: "cover",
      filter: "brightness(90%)",
    },
  },
  pageRight: {
    height: ({ isMd }) => (isMd ? "100vh" : "auto"),
    padding: [20, 30],
    overflowX: "visible",
    overflowY: "auto",
    ...customeScrollbarStyle,
  },
  productName: {
    fontSize: ({ isMd }) => (isMd ? 40 : 25),
    fontWeight: 700,
    color: "#505050",
  },
  productDescription: {
    margin: [7, 0, 20],
    paddingLeft: 3,
    fontSize: ({ isMd }) => (isMd ? 16 : 14),
    fontWeight: "600",
    wordBreak: "break-all",
    color: "rgba(0,0,0,0.6)",
    lineHeight: ({ isMd }) => (isMd ? "25px" : "22px"),
  },
  pointsListItem: {
    margin: [5, 0, 10, 2],
    fontWeight: 600,
    color: "#505050",
    fontSize: ({ isMd }) => (isMd ? 16 : 14),

    "& .anticon": {
      marginRight: 10,
      color: "#f88379",
      fontSize: ({ isMd }) => (isMd ? 20 : 18),
    },
  },
  qtyAndPrice: {
    marginTop: 15,
    fontSize: ({ isMd }) => (isMd ? 25 : 20),
    display: "flex",
    textAlign: "center",
    fontWeight: 700,
    color: "#505050",

    "& > div": {
      padding: [0, 10],
    },
  },
  photosList: {
    width: "100%",
    height: 260,
    paddingLeft: 10,
    marginTop: 5,
    display: "flex",
    justifyContent: "flex-start",
    overflowX: "auto",
    ...customeScrollbarStyle,

    "& img": {
      height: ({ isMd }) => (isMd ? 220 : 180),
      margin: ({ isMd }) => (isMd ? "10px 18px 10px 0" : "10px 15px 10px 0"),
      objectFit: "contain",
      borderRadius: 15,
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",

      "&:hover": {
        boxShadow: "0 4px 8px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        transform: ({ isMd }) => (isMd ? "scale(1.1)" : "scale(1.08)"),
      },
    },
  },
  photosListTitle: {
    padding: [10, 10, 5],
    fontWeight: 700,
    fontSize: 25,
  },
  qtySelector: {
    marginTop: 20,
    fontWeight: 600,

    "& .ant-select": {
      width: "100%",
      color: "#505050",
      textAlign: "center",
    },
    "& .ant-btn": {
      fontWeight: 600,
      background: "rgb(248, 131, 121,1)",
      border: "none",
      "& .anticon": { fontSize: 18 },
    },
  },
}));

export default Product;
