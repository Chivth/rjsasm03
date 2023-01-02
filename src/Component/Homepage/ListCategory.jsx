import React from "react";

import { Link } from "react-router-dom";
import classes from "../pages/HomePage.module.css";
const ListCategory = () => {
  return (
    <div>
      <div className={classes.homepage_list_category}>
        <div className={classes.homepage_list_category_text}>
          <p>CAREFULLY CREATED COLLECTIONS</p>
          <span> BROWSE OUR CATEGORIES</span>
        </div>
        <div className={classes.homepage_list_category_img}>
          <div className={classes.homepage_list_category_img_top}>
            <Link to="/shop">
              <img
                className={classes.homepage_list_category_img_tops}
                src="/image/product_1.png"
                alt=""
              />
            </Link>
          </div>
          <div className={classes.homepage_list_category_img_top}>
            <Link to="/shop">
              <img
                className={classes.homepage_list_category_img_tops}
                src="/image/product_2.png"
                alt=""
              />
            </Link>
          </div>

          <div className={classes.homepage_list_category_img_bottom}>
            <Link to="/shop">
              <img
                className={classes.homepage_list_category_img_bottoms}
                src="/image/product_3.png"
                alt=""
              />
            </Link>
          </div>
          <div className={classes.homepage_list_category_img_bottom}>
            <Link to="/shop">
              <img
                className={classes.homepage_list_category_img_bottoms}
                src="/image/product_4.png"
                alt=""
              />
            </Link>
          </div>
          <div className={classes.homepage_list_category_img_bottom}>
            <Link to="/shop">
              {" "}
              <img
                className={classes.homepage_list_category_img_bottoms}
                src="/image/product_5.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCategory;
