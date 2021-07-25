import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import Loader from "../components/Loader";
import ProductsSection from "../components/ProductsSection";
import SectionDivider from "../components/SectionDivider";
import TopCategories from "../components/TopCategories";

function Home() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className={classes.homePage}>
      <HomeHeader />
      {!loading ? (
        <>
          <TopCategories />
          <ProductsSection title="Trending Products Near You..." />
          <SectionDivider />
          <ProductsSection title="Most Sold This Week..." />
        </>
      ) : (
        <Loader height="60vh" />
      )}
      <Footer />
    </div>
  );
}

const useStyles = createUseStyles(() => ({ homePage: {} }));

export default Home;
