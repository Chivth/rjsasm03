import React, { useState, useEffect } from "react";
import Category from "../ShopPage/Category";
import ProductLists from "../ShopPage/ProductLists";
import classes from "./ShopPage.module.css";

const ShopPage = () => {
  const [data, setData] = useState([]);
  const [Product, setProduct] = useState(null);
  const [handledata, setHandleData] = useState([]);

  const datas = async () => {
    const data = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    const dataJson = await data.json();
    setData(dataJson);
  };

  useEffect(() => {
    datas();
  }, []);
  const handleCategory = (item) => {
    setProduct(item);
  };
  useEffect(() => {
    const datas = data.filter((item) => {
      return Product === null || item.category === Product;
    });
    if (Product === null) {
      setHandleData(data);
    }
    if (Product) {
      setHandleData(datas);

      if (Product === "all") {
        setHandleData(data);
      }
    }
  }, [Product, data]);
  return (
    <div className={classes.shoppage}>
      <div className={classes.shoppage_banner}>
        <div className={classes.shoppage_banner_left}>SHOP</div>
        <div className={classes.shoppage_banner_right}>SHOP</div>
      </div>
      <div className={classes.shoppage_info}>
        <Category handleClick={handleCategory} dataAll={data} />
        <ProductLists handleClick={handleCategory} Device={handledata} />
      </div>
    </div>
  );
};

export default ShopPage;
