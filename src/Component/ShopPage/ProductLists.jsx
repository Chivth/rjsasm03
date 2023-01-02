import React from "react";
import ProductList from "./ProductList";

import classes from "../pages/ShopPage.module.css";
const ProductLists = (props) => {
  const Device = props.Device;
  return (
    <div className={classes.shoppage_productLists}>
      <div className={classes.shoppage_productLists_select}>
        <div>
          <input placeholder="Enter search here" />
        </div>
        <div>
          <select>
            <option value="0"> Default setting</option>
          </select>
        </div>
      </div>
      <ProductList animate={props.animate} Prop={props.Prop} handleClick={props.handleClick} activeAnimat={props.activeAnimat} Device={Device} />
      <div className={classes.shoppage_productLists_page}>
        <div>
          <button>&lt;&lt; </button>
          <span>1</span>
          <button>&gt;&gt; </button>
        </div>
        <p>Show 1- 9 of 9 results </p>
      </div>
    </div>
  );
};

export default ProductLists;
