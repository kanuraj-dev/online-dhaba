import React from "react";
import { createUseStyles } from "react-jss";
import CategoryCard from "./CategoryCard";
import customeScrollbarStyle from "../customStyles/CustomScrollbar";

function TopCategories() {
  const classes = useStyles();

  return (
    <div className={classes.topCategories}>
      <div className={classes.topCategoriesTitle}>
        Top Categories Around You..
      </div>
      <div className={classes.categoriesList}>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((category) => (
          <CategoryCard />
        ))}
      </div>
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  topCategories: {},
  topCategoriesTitle: {
    margin: [30, 0, 20, 30],
    color: "#505050",
    fontSize: 40,
    fontWeight: 500,
  },
  categoriesList: {
    width: "100%",
    padding: [10, 0, 20],
    overflowX: "auto",
    paddingLeft: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    ...customeScrollbarStyle,
  },
  "@media (max-width: 570px)": {
    topCategoriesTitle: {
      margin: [20, 0, 5, 20],
      fontSize: 20,
      lineHeight: "35px",
      fontWeight: 700,
    },
  },
}));

export default TopCategories;
