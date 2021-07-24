import { Col, Row } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import ProductCard from "./ProductCard";

function ProductsSection({ title }) {
  const classes = useStyles();

  return (
    <div className={classes.productsSection}>
      <div className={classes.productsSectionTitle}>{title}</div>
      <Row
        className={classes.productsContainer}
        align="middle"
        justify="center"
        gutter={[20, 20]}
      >
        {[1, 2, 3, 4, 5, 6].map((category) => (
          <Col sm={12} md={12} lg={8}>
            <ProductCard />
          </Col>
        ))}
      </Row>
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  productsSection: {},
  productsSectionTitle: {
    paddingLeft: "10vw",
    margin: [20, 0, 20, 0],
    color: "#505050",
    fontSize: 40,
    fontWeight: 500,
  },
  productsContainer: {
    padding: "2vh 10vw 5vh",
  },
  "@media (max-width: 570px)": {
    productsSectionTitle: {
      margin: [30, 0, 10, 0],
      paddingLeft: "5vw",
      fontSize: 20,
      lineHeight: "35px",
      fontWeight: 700,
    },
    productsContainer: {
      padding: "2vh 5vw 5vh",
    },
  },
}));

export default ProductsSection;
