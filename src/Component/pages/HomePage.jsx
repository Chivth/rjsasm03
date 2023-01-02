import React from "react";

import Banner from "../Homepage/Banner";
import ListCategory from "../Homepage/ListCategory";
import Others from "../Homepage/Others";
import Messenger from "../Homepage/Messenger";
import ListProduct from "../Homepage/ListProduct";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.homepage}>
      <Banner />
      <ListCategory />
      <ListProduct />
      <Others />
      <Messenger className={classes.homepage_messengers} />
    </div>
  );
};

export default HomePage;
