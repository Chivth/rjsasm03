import React from "react";

import { Link } from "react-router-dom";
import classes from "../pages/HomePage.module.css";
const Banner = () => {
  return (
    <div>
      <div className={classes.homepage_banner}>
        <div className={classes.homepage_banner_texts}>
          <p>NEW INSPIRATION 2020</p>
          <h2>20% OFF ON NEW SEASON</h2>
          <Link to="/shop">
            <button>Browse collections</button>
          </Link>
        </div>
        <div className={classes.homepage_banner_img}>
          <img src="/image/banner1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
