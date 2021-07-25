import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { useRouteMatch } from "react-router-dom";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import Loader from "../components/Loader";
import ProductsSection from "../components/ProductsSection";

function Search() {
  const {
    params: { searchValue },
  } = useRouteMatch() || {};
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const screens = useBreakpoint();
  const isMd = screens.md;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className={classes.searchPage}>
      <HomeHeader />
      <div className={classes.pageContent}>
        {!loading ? (
          <ProductsSection
            title={
              <>
                {isMd && "Showing Search"} Results For :{" "}
                <b className={classes.searchValue}>
                  {searchValue.split("-").join(" ")}
                </b>
              </>
            }
          />
        ) : (
          <Loader height="60vh" />
        )}
      </div>
      <Footer />
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  searchPage: {},
  pageContent: {
    minHeight: "60vh",
    paddingBottom: "4rem",
  },
  searchValue: {
    textTransform: "capitalize",
    fontWeight: 700,
    color: "#ff5546",
  },
}));

export default Search;
