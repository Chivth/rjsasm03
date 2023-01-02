import React from "react";
// import { useEffect, useRef } from "react";
import classes from "./ProductList.module.css";
import { useNavigate } from "react-router-dom";

const ProductList = (props) => {
  const Navigate = useNavigate();
  const Device = props.Device;
  const handleClick = (id, filId) => {
    Navigate(`/detail/${id}/${filId}`);
  };

  return (
    <div className={classes.ProductList}>
      <div className={classes.ProductList_image} id="image">
        {Device.map((item, index) => (
          <img
            className={`${classes.images} `}
            key={index}
            src={item.img1}
            alt=""
            onClick={() => handleClick(item._id.$oid, item.category)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
