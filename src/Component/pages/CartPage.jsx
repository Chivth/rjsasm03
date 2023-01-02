import React from "react";

import accounting from "accounting";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DELETE_CART, Decrease, Increase } from "../Redux/cart";

import classes from "./CartPage.module.css";
const CartPage = () => {
  const cart = useSelector((item) => item.cart.cart);
  const price = cart.map((item) => item.price * item.quantity);

  //Calculator price for all products in cart
  let sum = 0;
  const Calprice = price.map((item) => (sum += item));
  const total = Calprice.pop((item) => item);

  const dispatch = useDispatch();

  return (
    <div className={classes.cartpage}>
      <div className={classes.cartpage_content}>
        <div className={classes.registerpage_banner}>
          <div className={classes.registerpage_banner_left}>CART</div>
          <div className={classes.registerpage_banner_right}>CART</div>
        </div>
        <div className={classes.cartpage_info}>
          <h3>SHOPPING CART</h3>

          <div className={classes.cartpage_infos}>
            <div className={classes.cartpage_infos_left}>
              <div className={classes.cartpage_infos_left_top}>
                <div className={classes.cartpage_infos_left_tops}>
                  <p>IMAGE</p>
                </div>
                <div className={classes.cartpage_infos_left_tops}>
                  <p>PRODUCT</p>
                </div>
                <div className={classes.cartpage_infos_left_tops}>
                  <p>PRICE</p>
                </div>
                <div className={classes.cartpage_infos_left_tops}>
                  <p>QUANTITY</p>
                </div>
                <div className={classes.cartpage_infos_left_tops}>
                  <p>TOTAL</p>
                </div>
                <div className={classes.cartpage_infos_left_tops}>
                  <p>REMOVE</p>
                </div>
              </div>
              {cart.map((item) => {
                return (
                  <div className={classes.cartpage_infos_left_top}>
                    <div className={classes.cartpage_infos_left_topz}>
                      <img src={item.img1} alt="" />
                    </div>
                    <div className={classes.cartpage_infos_left_topz}>
                      <p>{item.name}</p>
                    </div>
                    <div className={classes.cartpage_infos_left_topz}>
                      <p>
                        {accounting.formatMoney(item.price, {
                          symbol: "VNĐ",
                          thousand: ".",
                          precision: "",
                          format: "%v %s",
                        })}
                      </p>
                    </div>
                    <div className={classes.cartpage_infos_left_topz}>
                      <p>
                        <i
                          className="fa-solid fa-caret-left"
                          onClick={() => dispatch(Decrease(item))}
                        ></i>
                        {item.quantity}
                        <i
                          onClick={() => dispatch(Increase(item))}
                          className="fa-solid fa-caret-right"
                        ></i>
                      </p>
                    </div>
                    <div className={classes.cartpage_infos_left_topz}>
                      <p>
                        {accounting.formatMoney(item.quantity * item.price, {
                          symbol: "VNĐ",
                          thousand: ".",
                          precision: "",
                          format: "%v %s",
                        })}
                      </p>
                    </div>
                    <div className={classes.cartpage_infos_left_topz}>
                      <p
                        onClick={() => {
                          dispatch(DELETE_CART(item));
                        }}
                        className={classes.icon}
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className={classes.cartpage_infos_left_bottom}>
                <div>
                  <button>
                    <i className="fa-solid fa-arrow-left"></i>{" "}
                    <Link to="/shop">Continue Shopping</Link>
                  </button>
                </div>
                <div>
                  <button>
                    <Link to="/checkout">Proceed to checkout</Link>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.cartpage_infos_right}>
              <div className={classes.cartpage_infos_right_content}>
                <h4>CART TOTAL</h4>

                <div className={classes.cartpage_infos_right_contents}>
                  <div className={classes.cartpage_infos_right_content_top}>
                    <h6>SUBTOTAL</h6>
                    <span>
                      {accounting.formatMoney(total, {
                        symbol: "VNĐ",
                        thousand: ".",
                        precision: "",
                        format: "%v %s",
                      })}
                    </span>
                  </div>
                  <div className={classes.cartpage_infos_right_content_bottom}>
                    <h6>TOTAL</h6>

                    <span>
                      {" "}
                      {accounting.formatMoney(total, {
                        symbol: "VNĐ",
                        thousand: ".",
                        precision: "",
                        format: "%v %s",
                      })}
                    </span>
                  </div>
                </div>

                <input placeholder="Enter your counpon" />
                <button>
                  <i className="fa-solid fa-gift"></i> Apply coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
