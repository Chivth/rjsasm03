import React from "react";
import accounting from "accounting";
import classes from "./Popup.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../Redux/reducer";

const Popup = (props) => {
  const popups = useSelector((state) => state.popups);
  console.log(popups.SHOW_POPUP);

  const dispatch = useDispatch();

  const ClickHandler = () => {
    const updates = { show: false, hide: true };
    dispatch(update(updates));
  };

  return (
    <div>
      <div
        className={`${classes.Popup} ${
          popups.SHOW_POPUP ? `${classes.active}` : null
        }`}
      >
        <div className={classes.Popup_main}>
          <div className={classes.Popup_main_left}>
            <img src={props.datas.img1} alt="" />
          </div>
          <div className={classes.Popup_main_right}>
            <i
              className="fa-solid fa-xmark"
              id={classes.close}
              onClick={ClickHandler}
            ></i>
            <div className={classes.Popup_main_right_content}>
              <h5>{props.datas.name}</h5>
              <div className={classes.Price}>
                {accounting.formatMoney(props.datas.price, {
                  symbol: "VND",
                  thousand: ".",
                  precision: "",
                  format: "%v %s",
                })}
              </div>
              <p>{props.datas.short_desc}</p>
              <button className={classes.Clickbuy}>
                <i className="fa-solid fa-cart-shopping" id={classes.cart}></i>
                &nbsp; View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
