import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { createUseStyles } from "react-jss";
import { useRouteMatch } from "react-router-dom";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import ProductsSection from "../components/ProductsSection";

function Category() {
  const {
    params: { categoryName },
  } = useRouteMatch() || {};
  const classes = useStyles();
  const screens = useBreakpoint();
  const isMd = screens.md;

  return (
    <div className={classes.categoryPage}>
      <HomeHeader />
      <div className={classes.pageContent}>
        {/* <div className={classes.pageTitle}>
          Category : <b>{categoryName.split("-").join(" ")}</b>
        </div> */}
        <ProductsSection
          title={
            <>
              {isMd && "Showing Products In This"} Category :{" "}
              <b className={classes.categoryName}>
                {categoryName.split("-").join(" ")}
              </b>
            </>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  pageContent: {
    minHeight: "60vh",
    paddingBottom: "4rem",
  },
  pageTitle: {
    margin: [20, 0, 20, 30],
    color: "rgba(0,0,0,0.6)",
    fontSize: 40,
    textTransform: "capitalize",
    fontWeight: 600,
    "& b": {
      fontWeight: 700,
      color: "#505050",
    },
  },
  categoryName: {
    textTransform: "capitalize",
    fontWeight: 700,
    color: "#ff5546",
  },
}));

export default Category;
