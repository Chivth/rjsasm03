import React from "react";

import classes from "../pages/HomePage.module.css";
const Others = () => {
  return <div>
     <div className={classes.homepage_other}>
        <div className={classes.homepage_other_block}>
          <div>
            <span>FREE SHIPPING</span>
            <p>Free shipping worldwide</p>
          </div>
          <div>
            <span>24 X 7 SERVICE</span>
            <p>Free shipping worldwide</p>
          </div>
          <div>
            <span>FESTIVAL OFFER</span>
            <p>Free shipping worldwide</p>
          </div>
        </div>
        <div className={classes.homepage_other_text}>
          <div className={classes.homepage_other_texts}>
            <span>LET'S BE FRIENDS!</span>
            <p>Nisi nisi tempor consequat laboris nisi.</p>
          </div>
          <div className={classes.homepage_other_text_input}>
            <input placeholder="Enter your email address" />

            <button>Subscribe</button>
          </div>
        </div>
      </div>
  </div>;
};

export default Others;
