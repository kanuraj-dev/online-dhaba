import React from "react";
import { createUseStyles } from "react-jss";
import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import ProductsSection from "../components/ProductsSection";
import SectionDivider from "../components/SectionDivider";
import TopCategories from "../components/TopCategories";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.homePage}>
      <HomeHeader />
      <TopCategories />
      <ProductsSection title="Trending Products Near You..." />
      <SectionDivider />
      <ProductsSection title="Most Sold This Week..." />
      <Footer />
    </div>
  );
}

const useStyles = createUseStyles(() => ({ homePage: {} }));

export default Home;
