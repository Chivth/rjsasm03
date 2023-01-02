import React, { useState } from "react";

import classes from "./Messenger.module.css";

const Messenger = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={classes.homepage_messenger}>
      <i
        onClick={() => {
          setShow(!show);
        }}
        className="fa-brands fa-facebook-messenger"
      ></i>

      <div
        className={`${classes.homepage_boxchat} ${
          show
            ? `${classes.homepage_boxchat_show}`
            : `${classes.homepage_boxchat_hide}`
        }`}
      >
        <div className={classes.homepage_boxchats}>
          <div className={classes.homepage_boxchat_head}>
            <h5>Customer support</h5>
            <button>Let's Chat App</button>
          </div>
          <div className={classes.homepage_boxchat_container}>
            <div>
              <p>Xin chào</p>
            </div>
            <div>
              <p>Làm thế nào để xem các sản phẩm</p>
            </div>
            <div>
              <img src="./image/icon_messenger.jpg" alt="" />
              <p> ADMIN: Chào bạn</p>
            </div>
            <div>
              <img src="./image/icon_messenger.jpg" alt="" />
              <p>ADMIN: Bạn có thể vào mục shop để xem các sản phẩm</p>
            </div>
          </div>
          <div className={classes.homepage_boxchat_foot}>
            <img src="./image/icon_messenger.jpg" alt="" />
            <input placeholder="Enter mesenger" />
            <i className="fa-solid fa-paperclip"></i>
            <i className="fa-solid fa-face-smile"></i>
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
