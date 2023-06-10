import React, { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import styles from "./Home.module.scss";

const Home = () => {
  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);

  return (
    <div>
      <Slider />
      <Product />
      <div className={styles.spacer}></div>
    </div>
  );
};

export default Home;
