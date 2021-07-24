import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import demoImg from "../assets/demo-image.jpg";
import FadeBottom from "./FadeBottom";

function CategoryCard() {
  const classes = useStyles();

  return (
    <div className={classes.categoryCard}>
      <FadeBottom />
      <div className={classes.cardContent}>
        <div className={classes.cardTitle}>Shaam k Snacks</div>
        <div className={classes.cardDescription}>
          Vadpav, Samosa, Bhajiya...
        </div>
      </div>
      <Button
        type="default"
        icon={<RightOutlined />}
        size="large"
        className={classes.openCategoryButton}
      />
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  categoryCard: {
    margin: 10,
    height: 400,
    minWidth: 300,
    borderRadius: 12,
    position: "relative",
    backgroundImage: `url('${demoImg}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",

    "&:hover": {
      boxShadow: "0 4px 8px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      transform: "scale(1.08)",
      zIndex: 2,
      margin: [10, 10],

      "& $openCategoryButton": {
        opacity: 1,
      },
    },
  },
  openCategoryButton: {
    opacity: 0,
    transition: "all .3s",
    position: "absolute",
    color: "#fff",
    background: "transparent",
    border: "none",
    bottom: 25,
    right: 30,
  },
  cardContent: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: "15vh",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 700,
  },
  cardDescription: {
    color: "#d8d8d8",
    fontSize: 14,
    fontWeight: 500,
  },
  "@media (max-width: 570px)": {
    categoryCard: {
      height: 280,
      minWidth: 220,
    },
    cardTitle: {
      fontSize: 20,
    },
    cardDescription: {
      fontSize: 12,
    },
    openCategoryButton: {
      right: 7,
      bottom: 20,
    },
  },
}));

export default CategoryCard;
