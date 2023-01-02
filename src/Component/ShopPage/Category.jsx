import React from "react";

import classes from "../pages/ShopPage.module.css";
const Category = (props) => {
  const active = document.querySelectorAll(`.${classes.shoppage_active}`);
  active.forEach((element) => {
    element.addEventListener("click", () => {
      active.forEach((e) => e.classList.remove(`${classes.active}`));

      element.classList.add(`${classes.active}`);
    });
  });

  return (
    <div className={classes.shoppage_category}>
      <p className={classes.shoppage_category_content}>CATEGORIES</p>
      <div>
        <div className={classes.shoppage_category_list}>
          <span>APPLE</span>
        </div>
        <div className={classes.shoppage_category_list2}>
          <p
            className={`${classes.shoppage_active} ${classes.active}`}
            onClick={() => {
              props.handleClick("all");
            }}
          >
            All
          </p>
        </div>
      </div>
      <div>
        <div className={classes.shoppage_category_list1}>
          <span>IPHONE & MAC</span>
        </div>
        <div className={classes.shoppage_category_list2}>
          {
            <p
              className={classes.shoppage_active}
              onClick={() => {
                props.handleClick("iphone");
              }}
            >
              Iphone
            </p>
          }
          <p
            className={classes.shoppage_active}
            onClick={() => {
              props.handleClick("ipad");
            }}
          >
            Ipad
          </p>
          <p
            className={classes.shoppage_active}
            onClick={() => {
              props.handleClick("MacBook");
            }}
          >
            MacBook
          </p>
        </div>
      </div>
      <div>
        <div className={classes.shoppage_category_list1}>
          <span>WIRELESS</span>
        </div>
        <div className={classes.shoppage_category_list2}>
          <p
            className={classes.shoppage_active}
            onClick={() => {
              props.handleClick("airpod");
            }}
          >
            Airpod
          </p>
          <p
            className={classes.shoppage_active}
            onClick={() => {
              props.handleClick("watch");
            }}
          >
            Watch
          </p>
        </div>
      </div>
      <div>
        <div className={classes.shoppage_category_list1}>
          <span>OTHER</span>
        </div>
        <div className={classes.shoppage_category_list2}>
          <p
            className={classes.shoppage_active}
            onClick={() => {
              props.handleClick("mouse");
            }}
          >
            Mouse
          </p>
          <p
            className={classes.shoppage_active}
            onClick={() => {
              props.handleClick("keyboard");
            }}
          >
            Keyboard
          </p>
          <p
            className={classes.shoppage_active}
            onClick={() => {
              props.handleClick("other");
            }}
          >
            Other
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
